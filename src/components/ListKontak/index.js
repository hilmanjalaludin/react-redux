import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getKontakList, deleteKontak, detailKontak } from '../../actions/kontakAction';



function ListKontak() {
    const dispatch = useDispatch();
    // const { getKontakResult, getKontakLoading, getKontakError, deleteKontakResult } = state
    const { getKontakResult, getKontakLoading, getKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer)

    useEffect(() => {
        console.log('1. component did amount get kontak list useeffect');
        dispatch(getKontakList)
    }, [dispatch])

    useEffect(() => {
        if (deleteKontakResult) {
            getKontakList(dispatch);
        }
    }, [deleteKontakResult, dispatch])

    return (
        <div>
            <h4>List Kontak</h4>
            {getKontakResult ?
                (getKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} -
                            {kontak.nohp} -
                            <button onClick={() => dispatch(deleteKontak(kontak.id))} style={{ marginRight: "10px" }}>Delete</button>
                            <button onClick={() => dispatch(detailKontak(kontak))}>Edit</button>
                        </p>
                    )
                })) : getKontakLoading ? (
                    <p>Loading ...</p>
                ) : (
                        <p>{getKontakError ? getKontakError : "Data Kosong"}</p>
                    )}
        </div>
    )
}

export default ListKontak
