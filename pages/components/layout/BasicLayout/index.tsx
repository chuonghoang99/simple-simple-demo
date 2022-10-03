import { ReactElement } from 'react'
import { RecoilRoot } from 'recoil'
import { BasicAside } from '../../organisms/BasicAside'
import { BasicFooter } from '../../organisms/BasicFooter'
import { BasicHeader } from '../../organisms/BasicHeader'
import styles from './styles.module.css'

export const BasicLayout = (page: ReactElement) => {
    return (
        <RecoilRoot>
            <BasicHeader className={styles.header} />
            <div className={styles.container}>
                <BasicAside className={styles.aside} />
                <div className={styles.content}>{page}</div>
            </div>
            <BasicFooter className={styles.footer} />
        </RecoilRoot>
    )
}
