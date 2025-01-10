import { useState } from "react";
import { baseURL } from "../helpers/http-client";
import Button from "./Button";

export default function Card({ name, data, handles }) {

    const [status, setStatus] = useState(true)

    const {detail, setDetail} = data
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetail(prevData => ({
          ...prevData,
          [name]: value
        }));
      };



  return (
    <div className="card bg-white text-primary-content w-6/12">
        <form onSubmit={handles}>
      <div className="card-body flex">
        <div className="flex flex-wrap">
            <label className="flex flex-wrap w-60 items-center">Nama Karyawan</label>
            <input 
            type="text" 
            name="nama_karyawan"
            className=" bg-white border-solid border-black w-6/12 p-3"
            value={detail.nama_karyawan} 
            onChange={handleChange}
             />
        </div>
        <div className="flex flex-wrap">
            <label className="flex flex-wrap w-60 items-center">Tanggal Lahir</label>
            <input 
            type="date" 
            name="tanggal_lahir"
            className="bg-white border-inherit w-6/12 p-3"
            value={detail.tanggal_lahir} 
            onChange={handleChange}
             />
        </div>
        <div className="flex flex-wrap">
            <label className="flex flex-wrap w-60 items-start">Alamat</label>
            <textarea 
            type="text" 
            name="alamat"
            className="bg-white border-inherit w-6/12 p-3"
            value={detail.alamat} 
            onChange={handleChange}
             />
        </div>
        <div className="flex flex-wrap">
            <label className="flex flex-wrap w-60 items-center">Email</label>
            <input 
            type="text" 
            name="email"
            className="bg-white border-inherit w-6/12 p-3"
            value={detail.email} 
            onChange={handleChange}
             />
        </div>
        
        <div className="card-actions justify-end">
            <Button name="Simpan"/>
          {/* <button type="submit" className="btn">Save</button> */}
        </div>
      </div>
      </form>
    </div>
  );
}
