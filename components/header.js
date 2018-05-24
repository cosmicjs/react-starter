import Head from 'next/head'

export default ({ page }) =>
  <div>
    <Head>
      <title>{ page.title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>
				{`html {
				  font-family: sans-serif;
				}
				body {
					margin: 0;
					padding: 0;
				}
				.main, .footer {
					padding: 0 20px 20px;
					max-width: 960px;
					margin: 0 auto;
				}
				.hero {
					background: #29ABE2;
					width: 100%;
				}
				.hero h1 {
					margin: 0;
					font-size: 30px;
					padding: 30px;
					max-width: 960px;
					margin: 0 auto;
				}
				.hero h1 a {
					color: #fff;
					text-decoration: none;
				}`}
				</style>
    </Head>
    <div className="hero"><h1><a href="/">Cosmic JS React Starter</a></h1></div>
  </div>