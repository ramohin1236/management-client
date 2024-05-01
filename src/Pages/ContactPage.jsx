/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import useAxiosPublic from "../hooks/useAxiosPublic"
import Swal from "sweetalert2"
import ShareButton from "../components/ShareButton"



const ContactPage = () => {

    const axiosPublic = useAxiosPublic()
    const {register,handleSubmit} = useForm()



      const onSubmit = (data) =>{

        const name =data.name;
        const number =data.number;
        const email =data.email;
        const message =data.message;
      const info ={name,number,email,message};
      
      axiosPublic.post('/contact', info)
      .then(res => {
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch(error => {
          console.error('Error:', error);
          // Handle error
      });
        }
  return (
    <div className="p-12 ">
         <ShareButton/>
        <Helmet>
            <title>Contact page</title>
        </Helmet>
       
           <p className="text-5xl mt-12 font-bold text-zinc-700"> Contact us</p>
           <div className="flex justify-center items-center gap-20">
                   {/* input div */}
          <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10">
            {/* Name */}
            <input {...register("name", { required: true })} type="name" placeholder="name" className="w-[550px] rounded-3xl p-10 bg-blue-100 h-20 text-xl" />
            <br /><br />
            {/* Name */}
            <input {...register("number", { required: true })} type="number" placeholder="Mobile" className="w-[550px] rounded-3xl p-10 bg-blue-100 h-20 text-xl" 
           
            />
            <br /><br />
            {/* email */}
            <input {...register("email", { required: true })} type="email" placeholder="email" className="w-[550px] rounded-3xl p-10 bg-blue-100 h-20 text-xl" />
            <br /><br />
            {/* email */}
            <input {...register("message", { required: true })} type="mesaage" placeholder="Message" className="w-[550px] rounded-3xl pl-10 pb-16 bg-blue-100 h-36 text-xl" />

          
            <button type="submit" className="btn w-[550px] mt-12 bg-[#3366CC] text-white text-xl hover:bg-[#0e1a32]">Send Message</button>
          
          </form>
         
        
          {/* image div */}
          <div >
            <img src="https://i.ibb.co/ZVt9dwv/1564-png-860-removebg-preview.png" alt="icon" 
            className="w-[600px] h-[600px] object-cover"
            />
            </div>
          
           </div>
        
         
    </div>
  )
}

export default ContactPage