import axios from 'axios';
export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const GET_KONTAK_LIST = "GET_KONTAK_LIST";

export const getListKontak = (dispatch) => {
    console.log('2. masuk action');
    //loading
    dispatch({
        type: GET_LIST_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })
    // get api
    axios({
        method: 'GET',
        url: 'http://localhost:3000/kontak',
        timeout: 120000
    })
        .then((response) => {
            console.log('3. berhasil get data kontak list', response);
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3. Jika gagal get kontak list', error.message);
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })

}

export const getKontakList = (dispatch) => {
    console.log('2. masuk action');
    //loading
    dispatch({
        type: GET_KONTAK_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'GET',
        url: 'http://localhost:3000/kontak',
        timeout: 120000
    })
        .then((response) => {
            console.log('3. berhasil get data kontak list', response);
            dispatch({
                type: GET_KONTAK_LIST,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3. Jika gagal get kontak list', error.message);
            dispatch({
                type: GET_KONTAK_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })

}

export const addKontak = (data) => {
    return (dispatch) => {
        console.log('2. addKontak masuk action');
        //loading
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'POST',
            url: 'http://localhost:3000/kontak',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                console.log('3. addKontak berhasil get data kontak list', response);
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                console.log('3. addKontak Jika gagal get kontak list', error.message);
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

// Action Delete
export const deleteKontak = (id) => {
    return (dispatch) => {
        console.log('2. deleteKontak masuk action');
        //loading
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'DELETE',
            url: "http://localhost:3000/kontak/" + id,
            timeout: 120000,
            // data: data
        })
            .then((response) => {
                console.log('3. deleteKontak berhasil get data kontak list', response);
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                console.log('3. deleteKontak Jika gagal get kontak list', error.message);
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

// Detail Kontak
export const detailKontak = (data) => {
    console.log('1. detail kontak :', data);
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

// Action Update
export const updateKontak = (data) => {
    return (dispatch) => {
        // is loading 
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // Post API 
        axios({
            method: "PUT",
            url: "http://localhost:3000/kontak/" + data.id,
            timeout: 120000,
            data: data,
        }).then((response) => {
            // kalo berhasil 
            console.log('3. updateKontak berhasil get data kontak list', response);
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            // kalo gagal 
            console.log('3. updateKontak Jika gagal get kontak list', error.message);
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}