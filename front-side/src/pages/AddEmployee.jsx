import { useState } from "react";
import { baseURL } from "../helpers/http-client";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";

export default function AddEmployee() {

    const navigate = useNavigate()

    const[employeeName, setEmployeeName] = useState("")
    const[birthDate, setBirthDate] = useState("")
    const[address, setAddress] = useState("")
    const[email, setEmail] = useState("")


    const handleSubmit = async (e) =>{
        e.preventDefault()
        const data = {
            nama_karyawan: employeeName,
            tanggal_lahir: birthDate,
            alamat: address,
            email: email,
            valid_from : new Date().toISOString()
        }
        
        try {
            const res = await baseURL.post("/employee", data, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            Swal.fire("Success", "Data berhasil disimpan", "success")

            navigate("/")
        } catch (error) {
            Swal.fire("Error", "Data gagal disimpan", "error")
        }

    }

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-center font-semibold leading-7 text-gray-900">
              Input New Employee
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label
                  htmlFor="nama_karyawan"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nama Karyawan
                </label>
                <div className="mt-2">
                  <input
                    id="nama_karyawan"
                    name="nama_karyawan"
                    type="text"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="tanggal_lahir"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tanggal Lahir
                </label>
                <div className="mt-2">
                  <input
                    id="tanggal_lahir"
                    name="tanggal_lahir"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="alamat"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Alamat
                </label>
                <div className="mt-2">
                    <textarea
                    id="alamat"
                    name="alamat"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <Button name="Simpan" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
