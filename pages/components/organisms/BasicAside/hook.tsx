import { useCallback, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { system } from './recoil'

export const useSystem = (systemProps: 'agt' | 'tkn') => {
    const setSystem = useSetRecoilState(system)
    const resetSystem = useCallback(() => setSystem('agt'), [setSystem])

    useEffect(() => {
        setSystem(systemProps)
        return resetSystem
    }, [system, setSystem, resetSystem])
}
