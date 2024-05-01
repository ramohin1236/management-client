import { Helmet } from "react-helmet-async";

import { FaTrash } from "react-icons/fa"
import getAlluserInfo from "../hooks/getAllUserInfo";
import Swal from "sweetalert2";

import axios from "axios";
import { MdEmail } from "react-icons/md";

import { LuMessageCircle } from "react-icons/lu";




const ContactManagement = () => {


    const [info, loading, refetch]= getAlluserInfo();

    const handleDelete =async(item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:8000/contact/${item._id}`)
              if(res){
                refetch()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your item has been deleted.",
                  icon: "success"
                });
              }
            }
          });
      }

  return (
    <div>
         <Helmet>
            <title>Management</title>
        
        </Helmet>

        <p className="text-5xl mt-12 mb-16 font-bold text-zinc-700">Contact Management</p>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead >
      <tr className="bg-[#3366CC] text-xl text-white ">
        <th></th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        info?.map((usr,idx)=><tr key={idx} className="text-xl">
        <th>{idx+1}</th>
        <td>{usr.name}</td>
        <td>{usr.number}</td>
        <td>{usr.email}</td>

        <td className="flex gap-2">
        <button
     
        className="btn btn-sm rounded-full"><MdEmail   className="text-xl text-blue-500"/>
        </button>
        <button
     
        className="btn btn-sm rounded-full"><LuMessageCircle    className="text-xl text-blue-500"/>
        </button>



            <button
        onClick={()=>handleDelete(usr)}
        className="btn btn-sm rounded-full"><FaTrash  className="text-xl text-red-500"/>
        </button>
        </td>
        
       
      </tr>)
      }
     
    </tbody>
  </table>
  
</div>


{/* modal */}
{/* Open the modal using document.getElementById('ID').showModal() method */}


    </div>
  )
}

export default ContactManagement