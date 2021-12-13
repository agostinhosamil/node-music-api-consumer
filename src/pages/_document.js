import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class ApplicationDocument extends Document {
  static async getInitialProps (context) {
    const stylesheet = new ServerStyleSheet()
    const originalContextRenderPage = context.renderPage

    try {
      context.renderPage = () => originalContextRenderPage(
        { 
          enhanceApp: App => props => stylesheet.collectStyles(
            <App {...props} /> 
          ) 
        }
      )

      const initialProps = await Document.getInitialProps (context)

      return {
        ...initialProps,
        styles: (
          <>
            { initialProps.styles }
            { stylesheet.getStyleElement() }
          </>
        )
      }
    } finally {
      stylesheet.seal()
    }
  }

  render () {
     return (
       <Html>
         <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400&display=swap" rel="stylesheet" />
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     )
  }
 }
