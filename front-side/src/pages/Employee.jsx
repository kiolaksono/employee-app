import { useNavigate, useParams } from "react-router-dom"
import Card from "../components/Card"
import { baseURL } from "../helpers/http-client"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import Family from "../components/Family"

export default function Employee(){
    const navigate = useNavigate()
    const {id} = useParams()

    const [detail, setDetail] = useState({
        nama_karyawan: "",
        tanggal_lahir: "",
        alamat: "",
        email: ""
    })

    const [family, setFamily] = useState([{
        hubungan_keluarga: "",
        nama_anggota_keluarga: "",
        tanggal_lahir_anggota_keluarga: ""
    }])
        
    const [inputFamily, setInputFamily] = useState({
        hubungan_keluarga: "",
        nama_anggota_keluarga: "",
        tanggal_lahir_anggota_keluarga: ""
    })

    const inputDetailFamily = {inputFamily, setInputFamily}
    const employeeDetail ={detail, setDetail}
    const familyDetail = {family, setFamily}
    

    // console.log(id)

    const fetchDetail = async ()=>{

        try {
            const response = await baseURL.get(`/employee/${id}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            setDetail(response.data)
        } catch (error) {
            Swal.fire("Error", "Data gagal ditampilkan", "error")
        }
    }


    const fetchFamily = async ()=>{
        try {
            const res = await baseURL.get(`/family/${id}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }

            })
            console.log(res.data)
            setFamily(res.data)


        } catch (error) {
            console.log(error)
        }
    }




    const handleEdit = async (e) => {
        try {
        e.preventDefault()
          const res = await baseURL.patch(`/employee/${id}`, detail, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            }
            })

            Swal.fire("Success", "Data berhasil diupdate", "success");
          
            navigate("/");
        } catch (error) {
          Swal.fire("Error", "Data gagal diupdate", "error");
        }
      };

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const data = {
            hubungan_keluarga: inputFamily.hubungan_keluarga,
            nama_anggota_keluarga: inputFamily.nama_anggota_keluarga,
            tanggal_lahir_anggota_keluarga: inputFamily.tanggal_lahir_anggota_keluarga
        }
        
        try {
            const res = await baseURL.post(`/family/${id}`, data, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                }
                })
    
                Swal.fire("Success", "Data berhasil diupdate", "success");
              
                navigate(`/`);
        } catch (error) {
            // alert("<<<<")
            Swal.fire("Error", "Data gagal diupdate", "error");
        }
    }

    useEffect(()=>{
        fetchDetail()
        fetchFamily()
    },[])
    // console.log(detail.M_Families)

    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <Card name={'detail'} data={employeeDetail} handles={handleEdit}/>
            <Family data={familyDetail} handles={handleSubmit} input={inputDetailFamily}/>
        </div>
        
        </>
    )
}
