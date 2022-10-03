import clsx from 'clsx'
import { memo } from 'react'
import { useRecoilState } from 'recoil'
import { system } from '../BasicAside/recoil'
import styles from './styles.module.css'

export const BasicFooter = memo(function BasicFooterBase({
    className,
}: {
    className?: string
}) {
    console.log('footer render')

    //const systemValue = useRecoilState(system)

    return (
        <div className={clsx(className, styles.footer)}>
            <h2 className={styles.heading}>This is Footer</h2>
            {/* <h2 className={styles.heading}>This is Footer -{systemValue[0]}</h2> */}
        </div>
    )
})
