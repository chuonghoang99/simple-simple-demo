import clsx from 'clsx'
import Image from 'next/image'
import { memo } from 'react'
import { useRecoilState } from 'recoil'
import { system } from '../BasicAside/recoil'
import styles from './styles.module.css'

type Props = {
    className?: string
}

export const BasicHeader = memo(function BasicHeaderBase({ className }: Props) {
    const systemValue = useRecoilState(system)

    console.log('header render')

    return (
        <header className={clsx(className, styles.header)}>
            <h1 className={styles.heading}>
                This is header - {systemValue[0]}
            </h1>
        </header>
    )
})
