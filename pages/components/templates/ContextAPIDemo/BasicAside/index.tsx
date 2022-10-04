import clsx from 'clsx'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { useGlobalContext } from '../../../layout/BasicLayout2'
import styles from './styles.module.css'

export const BasicAside = memo(function BasicAsideBase({
    className,
}: {
    className?: string
}) {
    const systemContext = useGlobalContext()

    return (
        <aside className={clsx(className, styles.aside)}>
            <div>
                {systemContext.system === 'tkn' && (
                    <ul>
                        <li>TKN - 1</li>
                        <li>TKN - 2 </li>
                        <li>TKN - 3 </li>
                        <li>TKN - 4 </li>
                    </ul>
                )}

                {systemContext.system === 'agt' && (
                    <ul>
                        <li>AGT - 1</li>
                        <li>AGT - 2 </li>
                        <li>AGT - 3 </li>
                        <li>AGT - 4 </li>
                    </ul>
                )}
            </div>
        </aside>
    )
})
