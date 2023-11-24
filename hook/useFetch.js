import { useState, useEffect } from "react";
import axios from "axios";


const useFecth=(endpoint, query)=>{
    const [data, SetData]=useState([]);
    const [isLoading, setIsLoading]=useState(false);
    const [error, SetError]=useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '93a43ff407msh37f3dc210f8b9cfp1ca50ejsn6ac1415b7ccf',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };
      const fetchData=async()=>{
        setIsLoading(true);

        try{
            const response=await axios.request
            (options);
            SetData(response.data.data);
            setIsLoading(false);
        }catch(error){
            SetError(error);
            alert('Ada suatu error terjadi')
        }finally{
            setIsLoading(false);
        }
      }

      useEffect(()=>{
        fetchData();
      },[])

      const refecth=()=>{
        setIsLoading(true);
        fetchData;
      }
    return{data, isLoading, error, refecth};
}
export default useFecth;