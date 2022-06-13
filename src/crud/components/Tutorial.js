import React, { useState, useEffect } from 'react'
import "../App.css";
import { getData, deleteData } from "../../apiService";

const Tutorial = () => {
    const [users, setUsers] = useState([])
    const [editing, setEditing] = useState(false)
    const [currentuser, setcurrentuser] = useState()

    useEffect(() => {
        fecthItem();
    }, [])

    const fecthItem = async () => {
        const token = JSON.parse(localStorage.getItem('access_token'))
        let tpl = await getData('api/biodata', token)
        console.log('data tutorial', tpl.data);
        setUsers(tpl.data)

    }



    const deleteUser = id => {
        setEditing(false)
        // const token2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0MDE0NDkwNSwiZXhwIjoxNjQwMTQ4NTA1LCJuYmYiOjE2NDAxNDQ5MDUsImp0aSI6IjBrTTQwU3VRTTJvajVsb24iLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.UAbWel2d2YEQuvI9NDwB44pU4J5ZAdNeZajgryFZI00"

        const token = JSON.parse(localStorage.getItem('access_token'))
        console.log('api/auth/pegawai/hapus/', id)
        deleteData(`api/auth/pegawai/hapus/${id}`, token).then((item) => {
            console.log(item)
        }, err => {
            console.log(err)
        })
        window.location.reload();

    }

    const editRow = user => {
        setEditing(true)
        setcurrentuser({ id: user.pegawai_id, nama: user.pegawai_nama, jabatan: user.pegawai_jabatan, umur: user.pegawai_umur, alamat: user.pegawai_alamat })
    }
    const updateUser = (pegawai_id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => user.pegawai_id === pegawai_id ? updatedUser : user))
    }

    return (
        <div>
            <h1>Tutorial</h1>
            <table className='table striped'>
                <thead>
                    <tr>
                        <td>Nama</td>
                        <td>Jabatan</td>
                        <td>Umur</td>
                        <td>Alamat</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            /* console.log('pegawai tut', user) */
                            <tr key={user.pegawai_id}>
                                <td>{user.pegawai_id}</td>
                                <td>{user.pegawai_nama}</td>
                                <td>{user.pegawai_jabatan}</td>
                                <td>{user.pegawai_umur}</td>
                                <td>{user.pegawai_alamat}</td>
                                <td>
                                    {/* <button onClick={() => { editRow(user) }} className='btn btn-info'>Update</button> &nbsp; */}
                                    <a href={`/EditUserFormTut?id_pegawai=${user.pegawai_id}`} className='btn btn-info'>Update </a>&nbsp;
                                    <button onClick={() => { deleteUser(user.pegawai_id) }} className='btn btn-Danger'>Delete</button>
                                </td>

                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tutorial
