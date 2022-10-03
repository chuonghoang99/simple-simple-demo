import clsx from 'clsx'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { system } from './recoil'
import styles from './styles.module.css'

export const BasicAside = memo(function BasicAsideBase({
    className,
}: {
    className?: string
}) {
    console.log('basicAside render')

    const systemValue = useRecoilValue(system)

    return (
        <aside className={clsx(className, styles.aside)}>
            <div>
                {systemValue === 'tkn' && (
                    <ul>
                        <li>TKN - 1</li>
                        <li>TKN - 2 </li>
                        <li>TKN - 3 </li>
                        <li>TKN - 4 </li>
                    </ul>
                )}

                {systemValue === 'agt' && (
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
