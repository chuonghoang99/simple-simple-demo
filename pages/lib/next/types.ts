import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ComponentType, ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
    layout?: ComponentType
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
