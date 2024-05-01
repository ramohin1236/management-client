/* eslint-disable react-hooks/rules-of-hooks */

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const getAlluserInfo = () => {
 const axiosPublic =useAxiosPublic()

 const {data: info =[], isPending: loading, refetch} = useQuery({
    queryKey: ['info'],
    queryFn: async ()=>{
        const res = await axiosPublic.get('/contact');
        console.log(res.data);
        return res.data
    }
})



return [info, loading, refetch]
}

export default getAlluserInfo