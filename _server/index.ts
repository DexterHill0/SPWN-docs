import express, { Request, Response } from "express";
import next from "next";
//import subdomain from "express-subdomain";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const next_app = next({ dev });
const app = express();

const handle = next_app.getRequestHandler();

const main = async () => {
	await next_app.prepare();

	const spwn_it = express.Router();
	const try_spwn_it = express.Router();

	spwn_it.get("*", (req: Request, res: Response) => {
		console.log(req.subdomains);
		return handle(req, res);
	});

	// try_spwn_it.get("*", (_: Request, res: Response) => {
	// 	return res.send("I am a working subdomain!")
	// });

	// spwn_it.use(subdomain("try", try_spwn_it));

	app.use(spwn_it);
	//app.use(try_spwn_it);

	app.listen(port, (err?: any) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
}


try {
	main();
} catch (e) {
	console.error(e);
	process.exit(1);
}
