import React, { useState } from 'react'
import { postData } from "../../apiService";
const AddUserForm = props => {
	const Data = { id: null, nama: '', jabatan: '', umur: '', alamat: '' }
	const [user, setUser] = useState(Data)
	const handleInputCHange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}
	const currentdate = new Date().toLocaleString();

	return (
		<form onSubmit={
			event => {
				event.preventDefault()
				console.log('tambah data', user)
				if (!user.nama || !user.jabatan || !user.alamat || !user.umur) return

				// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbHVtZW4uZGlhbXN5YWguY29tXC9sb2dpbiIsImlhdCI6MTYzMjQ1NTcwOCwiZXhwIjoxNjMyNDU5MzA4LCJuYmYiOjE2MzI0NTU3MDgsImp0aSI6Inp6OUpsMjJKVDJkRVlHYkkiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5U7hOYT9g7EE9TuLFnu6sIsXdRsSDIGEEN3g3Y2IZhQ'
				let token = JSON.parse(localStorage.getItem('access_token'))
				// ini promise
				postData('api/auth/pegawai/store', token, user).then((item) => {
					console.log('data ditambahkan', item)
				})
				// props.addUser(user)
				setUser(Data)
				// window.location.reload();
				setTimeout(function () {
					window.location.reload(1);
				}, 500);
			}
		}>
			<label htmlFor="" className='lebar'>Nama Pegawai :</label>
			<input className='' type="text" name="nama" value={user.pegawai_nama} onChange={handleInputCHange} /><br /><br />
			<label htmlFor="" className='lebar'>Jabatan Pegawai :</label>
			<input type="text" name="jabatan" value={user.pegawai_jabatan} onChange={handleInputCHange} />

			<label htmlFor="" className='lebar'>Pegawai Umur :</label>
			<input type="text" name="umur" value={user.pegawai_umur} onChange={handleInputCHange} />

			<label htmlFor="" className='lebar'>Pegawai Alamat :</label>
			<input type="text" name="alamat" value={user.pegawai_alamat} onChange={handleInputCHange} />

			<input type="hidden" name="created_at" value={currentdate} onChange={handleInputCHange} />
			<input type="hidden" name="updated_at" value={currentdate} onChange={handleInputCHange} /><br />



			<button className='btn btn-info'>Simpan</button>
		</form>
	)
}

export default AddUserForm
