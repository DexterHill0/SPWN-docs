import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

class _Document extends Document {

	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		return (
			<Html style={{ height: "100%" }}>
				<Head>
					<meta charSet="utf-8" />

					<link href="https://css.gg/chevron-left.css" rel="stylesheet" />
					<link href="https://css.gg/chevron-right.css" rel="stylesheet" />
					<link href="https://css.gg/chevron-down.css" rel="stylesheet" />
					<link href="https://css.gg/search.css" rel="stylesheet" />
					<link href="https://css.gg/chevron-double-down.css" rel="stylesheet" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/base16/railscasts.min.css" />
				</Head>
				<body style={{ height: "100%" }}>
					<style>{"#__next {height: 100%}"}</style>
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default _Document;