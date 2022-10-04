import clsx from 'clsx'
import styles from './styles.module.css'

export const BasicFooter = ({ className }: { className?: string }) => {
    console.log('footer render')

    return (
        <div className={clsx(className, styles.footer)}>
            <h2 className={styles.heading}>This is Footer</h2>
        </div>
    )
}
