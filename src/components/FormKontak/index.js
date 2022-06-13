import React, { useState, useEffect } from 'react'
import { useAppState } from '../../context/appState'
import { addKontak, getKontakList, updateKontak } from '../../actions/kontakAction'

function FormKontak() {
    const [nama, setNama] = useState("")
    const [nohp, setNohp] = useState("")
    const [id, setId] = useState("")

    const [state, dispatch] = useAppState()
    // supaya ngupdate tanpa reload
    const { addKontakResult, detailKontakResult, updateKontakResult } = state;

    const handleSubmit = (event) => {
        // event.preventDefault(); buat supaya submit tidak ada reload
        event.preventDefault();
        // console.log({ nama: nama, nohp: nohp });
        console.log("1. addKontak masuk handle submit");
        if (id) {
            //jika id ada maka update
            updateKontak(dispatch, { id: id, nama: nama, nohp: nohp })
        } else {
            //gak ada id
            addKontak(dispatch, { nama: nama, nohp: nohp })
        }
    }

    useEffect(() => {
        if (addKontakResult) {
            getKontakList(dispatch)
            setNama("")
            setNohp("")
        }
    }, [addKontakResult, dispatch])

    useEffect(() => {
        if (detailKontakResult) {
            console.log("3. detailkontak Update state nama,nohp,id dr state global (reducer)");
            setNama(detailKontakResult.nama)
            setNohp(detailKontakResult.nohp)
            setId(detailKontakResult.id)
        }
    }, [detailKontakResult])

    useEffect(() => {
        if (updateKontakResult) {
            getKontakList(dispatch)
            setNama("")
            setNohp("")
        }
    }, [updateKontakResult, dispatch])

    return (
        <div>
            <h4>Add Kontak</h4>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name="nama" placeholder="Nama ..." value={nama} onChange={(event) => setNama(event.target.value)} />
                <input type="text" name="nohp" placeholder="Nohp ..." value={nohp} onChange={(event) => setNohp(event.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default FormKontak
