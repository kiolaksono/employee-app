import { Link } from "react-router-dom"

export default function Table({data, handleDelete}){

    return(
        <>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Nama Karyawan</th>
        <th>Tanggal Lahir</th>
        <th>Alamat</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {data.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.nama_karyawan}</td>
          <td>{item.tanggal_lahir}</td>
          <td>{item.alamat}</td>
          <td>{item.email}</td>
          <td>
            <Link 
            className="btn btn-sm btn-secondary" 
            to={`employee/${item.m_employee_id}`}>Detail</Link>
            <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(item.m_employee_id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        
        </>
    )
}