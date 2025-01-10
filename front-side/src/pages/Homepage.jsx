import { useEffect, useState } from "react";
import Table from "../components/Table";
import { baseURL } from "../helpers/http-client";
import Swal from "sweetalert2";



export default function Homepage() {

    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchEmployees = async()=>{
        try {
            const response = await baseURL.get("/employee",{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            setEmployees(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) =>{

        // console.log(id)
        try {
          const res = await baseURL.delete(`/employee/${id}`,{
            headers:{
              Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
          })

            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Data berhasil dihapus',
            })
          
        } catch (error) {
          // console.log(error.message)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Data gagal dihapus',
          })
        }
      }
    

    useEffect(()=>{
        fetchEmployees()
    },[])


    return(
        <>
            <Table data={employees} handleDelete={handleDelete}/>
        </>
    )

}