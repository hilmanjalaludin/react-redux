import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { postData, getData } from "../../apiService";

const EditUserFormTut = props => {
    const [user, setuser] = useState()
    const [editing, setEditing] = useState(false)
    const id_pegawai = new URLSearchParams(useLocation().search).get('id_pegawai')
    useEffect(() => {
        console.log('data', id_pegawai);
        getPegawai(id_pegawai)
    }, [])
    const handleChange = event => {
        const { name, value } = event.target
        setuser({ ...user, [name]: value })
    }

    async function getPegawai() {
        const token = JSON.parse(localStorage.getItem('access_token'))
        // let tpl = await fetch('api/auth/pegawai/edit', id_pegawai, token)
        // console.log('data tutorial', tpl.data);
        // setUsers(tpl.data)

        let response = await getData(`/pegawai/edit/${id_pegawai}`, token)
        console.log('edit data', response.data[0])
        setuser(response.data[0])
        // window.location.reload();
        // setuser(users.filter(
        //     user => user.id !== id
        // ))
    }
    // console.log('cek data', user.pegawai_nama);

    const updateUser = (pegawai_id, updatedUser) => {
        setEditing(false)
        setuser(user => user.pegawai_id === pegawai_id ? updatedUser : user)
    }

    return (
        <div>
            <h1>test aja</h1>

            <form onSubmit={event => {
                event.preventDefault()
                if (!user.pegawai_nama || !user.pegawai_jabatan || !user.pegawai_umur || !user.pegawai_alamat) return
                console.log('update data', user)
                // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbHVtZW4uZGlhbXN5YWguY29tXC9sb2dpbiIsImlhdCI6MTYzMjQ1NTcwOCwiZXhwIjoxNjMyNDU5MzA4LCJuYmYiOjE2MzI0NTU3MDgsImp0aSI6Inp6OUpsMjJKVDJkRVlHYkkiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5U7hOYT9g7EE9TuLFnu6sIsXdRsSDIGEEN3g3Y2IZhQ'
                const token = JSON.parse(localStorage.getItem('access_token'))
                // ini promise
                postData(`api/auth/pegawai/update`, token, user).then((item) => {
                    console.log('data udah update', item)
                })
                updateUser(user.id, user)

                window.location.replace('/tutorial')
            }}>

                <label htmlFor="" className='lebar'>Nama Pegawai</label>
                <input type="text" name='pegawai_nama' value={user?.pegawai_nama} onChange={handleChange} /><br /><br />
                <label htmlFor="" className='lebar'> Pegawai</label>
                <input type="text" name='pegawai_jabatan' value={user?.pegawai_jabatan} onChange={handleChange} /><br /><br />
                <label htmlFor="" className='lebar'>Umur</label>
                <input type="text" name='pegawai_umur' value={user?.pegawai_umur} onChange={handleChange} /><br /><br />
                <label htmlFor="" className='lebar'>Alamat</label>
                <input type="text" name='pegawai_alamat' value={user?.pegawai_alamat} onChange={handleChange} /><br /><br />
                <button className='btn btn-info'>Edit Save</button>
            </form>


        </div>

    )
}

export default EditUserFormTut
