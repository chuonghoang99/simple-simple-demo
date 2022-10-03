import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Button } from '../../atoms/Button'
import { useSystem } from '../../organisms/BasicAside/hook'
import { changeSystem, system } from '../../organisms/BasicAside/recoil'

export const RecoilDemo = () => {
    // const [x, y] = useRecoilState(system)
    // y('agt')

    //useSystem('agt')

    const systemValue = useRecoilValue(system)

    const changeSystemState = useSetRecoilState(changeSystem)

    const toogleSystem = () => {
        if (systemValue === 'agt') {
            changeSystemState('tkn')
        } else changeSystemState('agt')
    }

    console.log('Content render', systemValue)
    return (
        <>
            <h1>Demo Recoil</h1>
            <Button theme="normal" onClick={toogleSystem}>
                Change system
            </Button>
        </>
    )
}
