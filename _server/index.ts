import express, { ErrorRequestHandler, Request, Response } from "express";
import next from "next";
//import subdomain from "express-subdomain";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev });
const app = express();

const handle = nextApp.getRequestHandler();

const handleError: ErrorRequestHandler = (err, _, res, next) => {
	if (res.headersSent) next(err);
	else {
		console.error(err);
		res.status(500);
		res.json({
			message: "Whoops! An error has unexpectedly occured our end. Check back soon, and in the meantime, report the error on our github page!"
		})
	}
}

const main = async () => {
	await nextApp.prepare();

	app.disable("x-powered-by");
	app.use(handleError);

	const spwnIt = express.Router();
	//const trySpwnIt = express.Router();

	spwnIt.get("*", (req: Request, res: Response) => {
		return handle(req, res);
	});

	// trySpwnIt.get("*", (_: Request, res: Response) => {
	// 	return res.send("I am a working subdomain!")
	// });

	// spwn_it.use(subdomain("try", trySpwnIt));

	app.use(spwnIt);
	//app.use(trySpwnIt);

	app.listen(port, (err?: any) => {
		console.log(`> Ready on http://localhost:${port}`);
	});
}


try {
	main();
} catch (e) {
	console.error(e);
	process.exit(1);
}
