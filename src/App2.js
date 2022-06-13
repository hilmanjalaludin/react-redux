import React from 'react'
import { AddKontak, ListKontak } from './components'
import Navbar from './crud/components/Navbar'


function App2() {
  return (
    <div style={{ padding: '30px' }}>
      <Navbar /><br /><br />
      <AddKontak />
      <hr />
      <ListKontak />

    </div>
  )
}

export default App2
