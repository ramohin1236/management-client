import { Helmet } from "react-helmet-async"


const ContactPage = () => {
  return (
    <div className="p-12 ">
        <Helmet>
            <title>Contact page</title>
        </Helmet>
       
           <p className="text-5xl mt-12 font-bold text-zinc-700"> Contact us</p>
           <div className="flex justify-center items-center gap-20">
                   {/* input div */}
          <div className="mt-10">
            {/* Name */}
            <input type="name" placeholder="name" className="w-[550px] rounded-3xl p-10 bg-blue-100 h-20 text-xl" />
            <br /><br />
            {/* Name */}
            <input type="number" placeholder="Mobile" className="w-[550px] rounded-3xl p-10 bg-blue-100 h-20 text-xl" 
           
            />
            <br /><br />
            {/* email */}
            <input type="email" placeholder="email" className="w-[550px] rounded-3xl p-10 bg-blue-100 h-20 text-xl" />
            <br /><br />
            {/* email */}
            <input type="mesaage" placeholder="Message" className="w-[550px] rounded-3xl pl-10 pb-16 bg-blue-100 h-36 text-xl" />

          
            <button className="btn w-[550px] mt-12 bg-[#3366CC] text-white text-xl hover:bg-[#0e1a32]">Send Message</button>
          
          </div>
         
        
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