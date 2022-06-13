import React from 'react'
import {
    Link,
    useLocation,
    useHistory
} from 'react-router-dom';



const DataCustomer = () => {
    const history = useHistory()
    // const handleclick = () => {
    //     history.push('/DataCustomer')
    // }
    function handleclick() {
        history.push("/DataCustomer");
    }

    return (
        <div>
            <h1>Ini Adalah data DataCustomer</h1>

            <button style={{ marginTop: '50vh' }} onClick={handleclick}></button>
        </div>
    )
}

export default DataCustomer
