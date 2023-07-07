import baseUrl from "../Api/baseURL";

const useUpdateDataWithImage = async (url , parmas) =>{
    const config={
        headers:{"Content-Type":"multipart/from-data"}
    }
    const res = await baseUrl.put(url , parmas , config);

    return res;
}


const useUpdataData = async (url , parmas) =>{
    
    const res = await baseUrl.put(url , parmas);

    return res;
}

export  {useUpdataData , useUpdateDataWithImage};