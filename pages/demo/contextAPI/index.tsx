import { BasicLayout2 } from '../../components/layout/BasicLayout2'
import { ContextAPIDemo } from '../../components/templates/ContextAPIDemo'
import { Error } from '../../components/templates/Error'
import { HttpResponse } from '../../lib/api'
import { NextPageWithLayout } from '../../lib/next/types'

type Props = HttpResponse<{}>

const Page: NextPageWithLayout<Props> = ({ data, err }) =>
    err ? <Error {...err}></Error> : <ContextAPIDemo />
Page.getLayout = BasicLayout2

export const getServerSideProps = () => ({
    props: { data: {}, err: null, status: 200 },
})

export default Page
