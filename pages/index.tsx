import { BasicLayout } from './components/layout/BasicLayout'
import { Error } from './components/templates/Error'
import { HttpResponse } from './lib/api'
import { NextPageWithLayout } from './lib/next/types'

type Props = HttpResponse<{}>

const Page: NextPageWithLayout<Props> = ({ data, err }) =>
    err ? (
        <Error {...err}></Error>
    ) : (
        <>
            <h1> Content Recoit</h1>
        </>
    )
Page.getLayout = BasicLayout

export const getServerSideProps = () => ({
    props: { data: {}, err: null, status: 200 },
})

export default Page
