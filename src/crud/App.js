import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Tutorial from "./components/Tutorial";
import Databarang from "./components/Databarang";
import EditUserFormTut from "./forms/EditUserFormTut";

const App = () => {
  // console.log('test data token', item['access_token']);
  return (

    <div className='container ukuran'>
      <div className='row'>
        <div className='App'>

          <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <a href="/tutorial" className="navbar-brand">
              Crud Data Barang
        				</a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/barangcrud"} className="nav-link">
                  Data Barang
           						</Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
            				</Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">

            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path={["/barangcrud", "/tutorials"]} component={Databarang} />
              <Route path="/tutorial" component={Tutorial} />
              <Route path="/EditUserFormTut" component={EditUserFormTut} />

            </Switch>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
