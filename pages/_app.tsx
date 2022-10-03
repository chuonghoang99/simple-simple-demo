import { Fragment } from 'react'
import { AppPropsWithLayout } from './lib/next/types'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)
    const Layout = Component.layout ?? Fragment

    return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
}

export default MyApp
