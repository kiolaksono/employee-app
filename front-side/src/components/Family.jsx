import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../helpers/http-client";

export default function Family({data, handles, input}){

    const navigate = useNavigate()
    const {family, setFamily} = data

    const handleDelete = async (id)=>{
        try {
            const res = await baseURL.delete(`/family/${id}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            console.log(res.data)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(ha)
    const {inputFamily, setInputFamily} = input

    const handleChangeFamily = (e) => {
        const { name, value } = e.target;
        setInputFamily(prevData => ({
          ...prevData,
          [name]: value
        }));
      } 


    return(
        <>
            <div className="family-form">
      <h2>Keluarga:</h2>
          {family.map((item, index) => (
      <>
      </>
          ))
        }
 
{ family.length===0 && (
    <div className="family-form">
    <form onSubmit={handles}>
              <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Hubungan Keluarga</th>
            <th>Nama</th>
            <th>Tanggal Lahir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          
        <td>
          <button className="btn text-white text-xl bg-red-400 border-0">+</button>
        </td>
        
        <td>
          <input 
          type="text" 
          id="hubungan_keluarga"
          name="hubungan_keluarga"
          className="bg-white h-10 border-collapse"
          value={inputFamily.hubungan_keluarga}
          onChange={handleChangeFamily}
          />
        </td>
        <td><input 
          type="text" 
          id="nama_anggota_keluarga"
          name="nama_anggota_keluarga"
          className="bg-white h-10 border-collapse"
          value={inputFamily.nama_anggota_keluarga}
          onChange={handleChangeFamily}
          /></td>
        <td><input 
          type="date" 
          id="tanggal_lahir_anggota_keluarga"
          name="tanggal_lahir_anggota_keluarga"
          className="bg-white h-10"
          value={inputFamily.tanggal_lahir_anggota_keluarga}
          onChange={handleChangeFamily}
          /></td>
      
          </tr> 
          </tbody>
          </table>
          </form>
          </div>
        )}

{ family.length === 1 && (
 
          <>
          <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Hubungan Keluarga</th>
            <th>Nama</th>
            <th>Tanggal Lahir</th>
          </tr>
        </thead>
        <tbody>
            {family.map((item, index) => (  
            <tr key={item.family_id}>
              <td>
                <Link className="btn text-white text-xl bg-red-400 border-0" disabled={true}>+</Link>
                <button className="btn text-white text-xl bg-red-400 border-0" onClick={()=>{handleDelete(item.family_id)}}>-</button>
                </td>
              
              <td>
                <input 
                type="text" 
                name="hubungan_keluarga"
                id="hubungan_keluarga"
                className="bg-white h-10"
                disabled={true}
                />
              </td>
              <td><input 
                type="text" 
                name="nama_anggota_keluarga"
                id="nama_anggota_keluarga"
                className="bg-white h-10 border-collapse"
                disabled
                /></td>
              <td><input 
                type="date" 
                name="tanggal_lahir_anggota_keluarga"
                id="tanggal_lahir_anggota_keluarga"
                className="bg-white h-10"
                /></td>
          </tr> 
))}
        </tbody>
        </table>

<form onSubmit={handles}>
    
        <tr>
            <td>
              <button className="btn text-white text-xl bg-red-400 border-0">+</button>
            </td>
            
            <td>
              <input 
              type="text" 
              id="hubungan_keluarga"
              name="hubungan_keluarga"
              className="bg-white h-10 border-collapse"
              value={inputFamily.hubungan_keluarga}
              onChange={handleChangeFamily}
              />
            </td>
            <td><input 
              type="text" 
              id="nama_anggota_keluarga"
              name="nama_anggota_keluarga"
              className="bg-white h-10 border-collapse"
              value={inputFamily.nama_anggota_keluarga}
              onChange={handleChangeFamily}
              /></td>
            <td><input 
              type="date" 
              id="tanggal_lahir_anggota_keluarga"
              name="tanggal_lahir_anggota_keluarga"
              className="bg-white h-10"
              value={inputFamily.tanggal_lahir_anggota_keluarga}
              onChange={handleChangeFamily}
              /></td>
          </tr> 
          </form>
          </>
)}

{ family.length === 2 && (
 
 <>
 <table>
<thead>
 <tr>
   <th>Action</th>
   <th>Hubungan Keluarga</th>
   <th>Nama</th>
   <th>Tanggal Lahir</th>
 </tr>
</thead>
<tbody>
   {family.map((item, index) => (  
   <tr key={item.family_id}>
     <td>
       <Link className="btn text-white text-xl bg-red-400 border-0" disabled={true}>+</Link>
       <button className="btn text-white text-xl bg-red-400 border-0" onClick={()=>{handleDelete(item.family_id)}}>-</button>
       </td>
     
     <td>
       <input 
       type="text" 
       id="hubungan_keluarga"
       name="hubungan_keluarga"
       className="bg-white h-10"
       value={item.hubungan_keluarga}
       disabled={true}
       />
     </td>
     <td><input 
       type="text" 
       id="nama_anggota_keluarga"
       name="nama_anggota_keluarga"
       className="bg-white h-10 border-collapse"
       value={item.nama_anggota_keluarga}
       disabled
       /></td>
     <td><input 
       type="date" 
       id="tanggal_lahir_anggota_keluarga"
       name="tanggal_lahir_anggota_keluarga"
       className="bg-white h-10"
       disabled
       value={item.tanggal_lahir_anggota_keluarga}
       /></td>
 </tr> 
))}
</tbody>
</table>

<form onSubmit={handles}>

<tr>
            <td>
              <button className="btn text-white text-xl bg-red-400 border-0">+</button>
              <button disabled className="btn text-white text-xl bg-red-400 border-0" onClick={()=>{handleDelete(item.family_id)}}>-</button>
            </td>
            
            <td>
              <input 
              type="text" 
              id="hubungan_keluarga"
              name="hubungan_keluarga"
              className="bg-white h-10 border-collapse"
              value={inputFamily.hubungan_keluarga}
              onChange={handleChangeFamily}
              />
            </td>
            <td><input 
              type="text" 
              id="nama_anggota_keluarga"
              name="nama_anggota_keluarga"
              className="bg-white h-10 border-collapse"
              value={inputFamily.nama_anggota_keluarga}
              onChange={handleChangeFamily}
              /></td>
            <td><input 
              type="date" 
              id="tanggal_lahir_anggota_keluarga"
              name="tanggal_lahir_anggota_keluarga"
              className="bg-white h-10"
              value={inputFamily.tanggal_lahir_anggota_keluarga}
              onChange={handleChangeFamily}
              /></td>
          </tr> 
 </form>
 </>
)}

{ family.length >2 && (
 
 <>
 <table>
<thead>
 <tr>
   <th>Action</th>
   <th>Hubungan Keluarga</th>
   <th>Nama</th>
   <th>Tanggal Lahir</th>
 </tr>
</thead>
<tbody>
   {family.map((item, index) => (  
   <tr key={item.family_id}>
     <td>
       <Link className="btn text-white text-xl bg-red-400 border-0" disabled={true}>+</Link>
       <button className="btn text-white text-xl bg-red-400 border-0" onClick={()=>{handleDelete(item.family_id)}}>-</button>
       </td>
     
     <td>
       <input 
       type="text" 
       id="hubungan_keluarga"
       name="hubungan_keluarga"
       className="bg-white h-10"
       value={item.hubungan_keluarga}
       disabled={true}
       />
     </td>
     <td><input 
       type="text" 
       id="nama_anggota_keluarga"
       name="nama_anggota_keluarga"
       className="bg-white h-10 border-collapse"
       value={item.nama_anggota_keluarga}
       disabled
       /></td>
     <td><input 
       type="date" 
       id="tanggal_lahir_anggota_keluarga"
       name="tanggal_lahir_anggota_keluarga"
       className="bg-white h-10"
       disabled
       value={item.tanggal_lahir_anggota_keluarga}
       /></td>
 </tr> 
))}
</tbody>
</table>

<form onSubmit={handles}>

<tr>
            <td>
              <button className="btn text-white text-xl bg-red-400 border-0">+</button>
              <button disabled className="btn text-white text-xl bg-red-400 border-0" onClick={()=>{handleDelete(item.family_id)}}>-</button>
            </td>
            
            <td>
              <input 
              type="text" 
              id="hubungan_keluarga"
              name="hubungan_keluarga"
              className="bg-white h-10 border-collapse"
              value={inputFamily.hubungan_keluarga}
              onChange={handleChangeFamily}
              />
            </td>
            <td><input 
              type="text" 
              id="nama_anggota_keluarga"
              name="nama_anggota_keluarga"
              className="bg-white h-10 border-collapse"
              value={inputFamily.nama_anggota_keluarga}
              onChange={handleChangeFamily}
              /></td>
            <td><input 
              type="date" 
              id="tanggal_lahir_anggota_keluarga"
              name="tanggal_lahir_anggota_keluarga"
              className="bg-white h-10"
              value={inputFamily.tanggal_lahir_anggota_keluarga}
              onChange={handleChangeFamily}
              /></td>
          </tr> 
 </form>
 </>
)}


        {/* </form>    */}


    </div>
        </>
    )
}