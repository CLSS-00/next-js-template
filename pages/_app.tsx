import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'

import AppLayout from '@/components/AppLayout'
import store from 'store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}

export default MyApp
