import { ThemeProvider } from 'styled-components'

import { GlobalStyles, Container } from '@styles'

import { theme } from '~/src/config'

export default function App ({ Component, pageProps }) {
  return (
  	<ThemeProvider theme={ theme }>
  		<GlobalStyles />
  		<Container>
  			<Component {...pageProps} />
  		</Container>
 		</ThemeProvider>
  )
}
