import axios from "axios";




const axiosPublic =axios.create({
    baseURL: 'https://management-system-server-kappa.vercel.app'
   
})



const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;