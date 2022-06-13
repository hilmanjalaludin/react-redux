import React, { useState, useEffect, Fragment } from 'react'
import {
    Link,
    useLocation,
    useHistory
} from 'react-router-dom';
import AddUserForm from '../forms/AddUserForm';
import EditUserForm from '../forms/EditUserForm';
import UserTable from '../tables/UserTable';
import { getData, deleteData } from "../../apiService";
import Navbar from './Navbar'

const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0 });
        // window.location.reload(1);
    }, [location]);
};


const Databarang = () => {
    const history = useHistory()
    // useScrollToTop()
    const [users, setUsers] = useState([])
    const [editing, setEditing] = useState(false)
    const [currentuser, setcurrentuser] = useState()




    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        // history.replace('/')
        window.location.replace('/')
    };

    useEffect(() => {
        const Databarang2 = async () => {

            try {
                const token = JSON.parse(localStorage.getItem('access_token'))
                // let response = await getData('api/biodata', token)
                let response = await getData('api/auth/pegawai', token)
                setUsers(response.data)
            } catch (e) {
                if (e.response.status === 401) {
                    handleLogout();
                }
            }
        }
        Databarang2()
    }, [])

    const addUser = user => {
        user.id = users.length > 1
        setUsers([...users, user])
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
        // setUsers(Data)
        // window.location.reload();
        setTimeout(function () {
            window.location.reload(1);
        }, 500);

    }


    const editRow = user => {
        console.log('ini user', user);

        setEditing(true)
        setcurrentuser({ id: user.id, nama: user.nama, jabatan: user.jabatan, umur: user.umur, alamat: user.alamat })
    }
    const updateUser = (pegawai_id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => user.pegawai_id === pegawai_id ? updatedUser : user))
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <h1>Pegawai</h1>
                    <div className='col-md-4'>
                        {
                            editing ? (
                                <Fragment>
                                    <EditUserForm
                                        editing={editing}
                                        setEditing={setEditing}
                                        currentuser={currentuser}
                                        updateUser={updateUser}
                                    />
                                </Fragment>
                            ) : (
                                    <Fragment>
                                        <AddUserForm addUser={addUser} />
                                    </Fragment>
                                )
                        }
                    </div>
                    <div className='col-md-8'>
                        {users.length > 0 ?
                            <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                            :
                            null
                        }
                        <p style={{ marginTop: '1vh' }}>
                            <span onClick={() => history.replace('/DataCustomer')}>Go to DataCustomer</span>
                        </p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Databarang
