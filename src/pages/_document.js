import Document from 'next/document'
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
}
