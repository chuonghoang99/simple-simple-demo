import Head from 'next/head'
import { Err } from '../../../lib/api'

type Props = Err

export const Error = ({ message, status }: Props) => {
    return (
        <main aria-label="Error">
            <Head>
                <title>Error</title>
            </Head>
            <h2>{status}</h2>
            <p>{message}</p>
        </main>
    )
}
