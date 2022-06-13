import React from 'react'

const UserTable = props => {
    console.log('cek data', props.users)
    return (
        <div className='container'>
            <div className='row'>
                <table className='table table-striped table-hover'>
                    <thead className=''>
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
                            props.users.length > 0 ?
                                (
                                    props.users.map(user =>
                                        <tr key={user.id}>
                                            <td>{user.nama}</td>
                                            <td>{user.jabatan}</td>
                                            <td>{user.umur}</td>
                                            <td>{user.alamat}</td>
                                            <td>
                                                <button onClick={() => { props.editRow(user) }} className='btn btn-info'>Update</button>
                                                <button onClick={() => { props.deleteUser(user.id) }} className='btn btn-Danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td>Data tidak ada</td>
                                    </tr>
                                )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserTable
