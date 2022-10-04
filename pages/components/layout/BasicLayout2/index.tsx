import { createContext, ReactElement, useContext, useState } from 'react'
import styles from './styles.module.css'
import { BasicAside } from '../../templates/ContextAPIDemo/BasicAside'
import { BasicHeader } from '../../templates/ContextAPIDemo/BasicHeader'
import { BasicFooter } from '../../templates/ContextAPIDemo/BasicFooter'

export type GlobalContent = {
    system: 'agt' | 'tkn'
    setSystem: (c: 'agt' | 'tkn') => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    system: 'agt',
    setSystem(c) {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)

export const BasicLayout2 = (page: ReactElement) => {
    const [system, setSystem] = useState<'agt' | 'tkn'>('agt')

    return (
        <MyGlobalContext.Provider value={{ system, setSystem }}>
            <BasicHeader className={styles.header} />
            <div className={styles.container}>
                <BasicAside className={styles.aside} />
                <div className={styles.content}>{page}</div>
            </div>
            <BasicFooter className={styles.footer} />
        </MyGlobalContext.Provider>
    )
}
