import { QueryClientProvider } from 'react-query'
import { client } from './config'
import { AppRoutes } from './routes/routes'
import { Toaster } from 'react-hot-toast'
import { GlobalStyle } from '~/presentation/themes/global'

export function App () {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
      <GlobalStyle />
      <Toaster position='bottom-right' />
    </QueryClientProvider>
  )
}
