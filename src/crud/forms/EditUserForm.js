import React, { useState, useEffect } from 'react'
import { postData } from "../../apiService";

const EditUserForm = props => {
    const [user, setuser] = useState(props.currentuser)
    useEffect(() => {
        console.log('edit', props.currentuser);
        setuser(props.currentuser)
    }, [props])
    const handleChange = event => {
        const { name, value } = event.target
        setuser({ ...user, [name]: value })
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!user.nama || !user.jabatan || !user.umur || !user.alamat) return
            console.log('update data', user)
            // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbHVtZW4uZGlhbXN5YWguY29tXC9sb2dpbiIsImlhdCI6MTYzMjQ1NTcwOCwiZXhwIjoxNjMyNDU5MzA4LCJuYmYiOjE2MzI0NTU3MDgsImp0aSI6Inp6OUpsMjJKVDJkRVlHYkkiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5U7hOYT9g7EE9TuLFnu6sIsXdRsSDIGEEN3g3Y2IZhQ'
            const token = JSON.parse(localStorage.getItem('access_token'))
            // ini promise
            postData(`api/auth/pegawai/update`, token, user).then((item) => {
                console.log('data udah update', item)
            })
            // props.updateUser(user.id, user)
            // window.location.reload();
            setTimeout(function () {
                window.location.reload(1);
            }, 500);
        }}>
            <label htmlFor="" className='lebar'>Nama Pegawaisss</label>
            <input type="text" name='nama' value={user.nama} onChange={handleChange} /><br /><br />
            <label htmlFor="" className='lebar'>Jabatan Pegawai</label>
            <input type="text" name='jabatan' value={user.jabatan} onChange={handleChange} /><br /><br />
            <label htmlFor="" className='lebar'>Pegawai Umur</label>
            <input type="text" name='umur' value={user.umur} onChange={handleChange} /><br /><br />
            <label htmlFor="" className='lebar'>Pegawai Alamat</label>
            <input type="text" name='alamat' value={user.alamat} onChange={handleChange} /><br /><br />
            <button className='btn btn-info'>Edit Save</button>
        </form>

    )
}

export default EditUserForm
