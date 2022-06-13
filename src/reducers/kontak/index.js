import { GET_KONTAK_LIST, GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK, DETAIL_KONTAK, UPDATE_KONTAK } from '../../actions/kontakAction'
const initialState = {
    getKontakResult: false,
    getKontakLoading: false,
    getKontakError: false,

    addKontakResult: false,
    addKontakLoading: false,
    addKontakError: false,

    deleteKontakLoading: false,
    deleteKontakResult: false,
    deleteKontakError: false,

    detailKontakResult: false,

    updateKontakLoading: false,
    updateKontakResult: false,
    updateKontakError: false,

}



const kontak = (state = initialState, action) => {
    const { type } = action
    switch (type) {
        case GET_KONTAK_LIST:
            console.log('4. Masuk Reducer', action);
            return {
                ...state,
                getKontakResult: action.payload.data,
                getKontakLoading: action.payload.loading,
                getKontakError: action.payload.errorMessage,
            }
        case GET_LIST_KONTAK:
            console.log('4. Masuk Reducer', action);
            return {
                ...state,
                getKontakResult: action.payload.data,
                getKontakLoading: action.payload.loading,
                getKontakError: action.payload.errorMessage,
            }
        case ADD_KONTAK:
            console.log('4. addKontak Masuk Reducer', action);
            return {
                ...state,
                addKontakResult: action.payload.data,
                addKontakLoading: action.payload.loading,
                addKontakError: action.payload.errorMessage,
            }
        case DELETE_KONTAK:
            console.log('4. addKontak Masuk Reducer', action);
            return {
                ...state,
                deleteKontakResult: action.payload.data,
                deleteKontakLoading: action.payload.loading,
                deleteKontakError: action.payload.errorMessage,
            }
        case DETAIL_KONTAK:
            console.log('2. detailkontak Masuk Reducer', action);
            return {
                ...state,
                detailKontakResult: action.payload.data,
            }
        case UPDATE_KONTAK:
            console.log('2. updatekontak Masuk Reducer', action);
            return {
                ...state,
                updateKontakResult: action.payload.data,
                updateKontakLoading: action.payload.loading,
                updateKontakError: action.payload.errorMessage,
            }
        default:
            return state;
    }
}
export default kontak;