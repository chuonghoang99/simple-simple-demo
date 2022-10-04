import clsx from 'clsx'
import { memo } from 'react'
import { useGlobalContext } from '../../../layout/BasicLayout2'

import styles from './styles.module.css'

export const BasicFooter = memo(function BasicFooterBase({
    className,
}: {
    className?: string
}) {
    console.log('footer re-render')

    const systemContext = useGlobalContext()

    return (
        <div className={clsx(className, styles.footer)}>
            <h2 className={styles.heading}>
                This is footer - {systemContext.system}
            </h2>
        </div>
    )
})
