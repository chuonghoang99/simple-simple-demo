import clsx from 'clsx'
import { memo } from 'react'
import { useGlobalContext } from '../../../layout/BasicLayout2'
import styles from './styles.module.css'

type Props = {
    className?: string
}

export const BasicHeader = memo(function BasicHeaderBase({ className }: Props) {
    const systemContext = useGlobalContext()

    return (
        <header className={clsx(className, styles.header)}>
            <h1 className={styles.heading}>
                This is header - {systemContext.system}
            </h1>
        </header>
    )
})
