import { Button } from '../../atoms/Button'

export const RecoilDemo = () => {
    const toogleSystem = () => {}

    return (
        <>
            <h1>Demo Recoil</h1>
            <Button theme="normal" onClick={toogleSystem}>
                Change system
            </Button>
        </>
    )
}
