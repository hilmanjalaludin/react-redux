import { ListKontak, FormKontak } from './components'

const AppState = () => {
    return (
        <div style={{ padding: '30px' }}>
            <h1>Kontak App</h1>
            <hr />
            <FormKontak />
            <hr />
            <ListKontak />
        </div>
    )
}

export default AppState
