import React from 'react'
import { useHistory } from 'react-router-dom'

const Navbar = () => {
    const history = useHistory()

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        // history.replace('/')
        window.location.replace('/')
    };

    const toDataBarang = () => {
        history.replace('/Databarang')
    }
    const toApp2 = () => {
        history.replace('/App2')
    }

    return (
        <div className='row'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                {/* <a href="/tutorial" className="navbar-brand">
                    Crud Data Barang
        				</a> */}
                <h1>
                    <span>Data Barang</span>
                </h1>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item" >
                        <span className="nav-link" onClick={toDataBarang} style={{ cursor: 'pointer' }}>
                            Data Barang
                        </span>
                    </li>
                    <li className="nav-item" >
                        <span className="nav-link" onClick={toApp2} style={{ cursor: 'pointer' }}>
                            Data App2
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                            Logout
                        </span>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar