import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Button } from '../../atoms/Button'
import { useGlobalContext } from '../../layout/BasicLayout2'
import { useSystem } from '../../organisms/BasicAside/hook'
import { changeSystem, system } from '../../organisms/BasicAside/recoil'

export const ContextAPIDemo = () => {
    const systemContext = useGlobalContext()

    const toogleSystem = () => {
        if (systemContext.system === 'agt') systemContext.setSystem('tkn')
        else {
            systemContext.setSystem('agt')
        }
    }

    return (
        <>
            <h1>Demo Recoil</h1>
            <Button theme="normal" onClick={toogleSystem}>
                Change system
            </Button>
        </>
    )
}
