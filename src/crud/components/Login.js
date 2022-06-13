import React, { useState } from 'react'
import { auth } from "../../apiService";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useHistory } from 'react-router-dom'

const Login = () => {
    // const history = useHistory
    const Data = { email: '', password: '' }
    const [user, setUser] = useState(Data)
    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    return (
        <div>
            <h1>Login Tutorial</h1>
            <form onSubmit={
                event => {
                    event.preventDefault()
                    console.log('login cek data', user)
                    if (!user.email || !user.password) return

                    // ini promise
                    auth('api/auth/login', user).then((item) => {
                        console.log('tampil', item)
                        if (item['message'] === 'Berhasil') {
                            alert(item['message'])
                            localStorage.setItem('access_token', JSON.stringify(item['access_token']));
                            // alert(JSON.stringify(item['access_token']))
                            window.location.replace('/Databarang')
                            // history.replace('/Databarang')
                        } else if (item['message'] === 'Gagal Login') {
                            alert(item['message'])
                        }

                    })
                    // window.location.reload();
                    // props.addUser(user)
                    setUser(Data)


                }
            }>

                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email : </label>
                </div>
                <div className="col-sm-10">
                    <input type="text" name='email' value={user.email} onChange={handleInputChange} className="form-control" id="email" />
                </div>
                <div className="row mb-3">
                    <label htmlFor="password">Password : &nbsp;</label>
                </div>
                <div className="col-sm-10">
                    <input type="text" name='password' value={user.password} onChange={handleInputChange} className="form-control" id="password" />
                </div><br />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Login
