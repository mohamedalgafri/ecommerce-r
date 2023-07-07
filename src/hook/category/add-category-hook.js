import React, { useEffect } from 'react'
import avatar from '../../images/avatar.png'
import { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { createCategory } from '../../redux/actions/categoryAction'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNonafication'

const AddCategoryHook = () => {

    const [img , setImg ] = useState(avatar);
    const [name , setName ] = useState();
    const [selectedFile , setSelectedFile ] = useState(null);
    const [loading , setloading ] = useState(null);

    const res = useSelector((state) => state.allCategory.category);

    const dispatch = useDispatch();

    const onChangeName=(e)=>{
        e.persist();
        setName(e.target.value);
    }


    const onImgChange = (e)=> {
        if(e.target.files && e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }

    }

    console.log(loading)

    const handelSubmit =async (event)=>{
        event.preventDefault();

        if(name === "" || selectedFile === null){
            notify("من فضلك اكمل البيانات" , "warn");
            return;
        }
        const formData = new FormData();
        formData.append("name" , name )
        formData.append("image" , selectedFile )
        setloading(true)
        await dispatch(createCategory(formData));
        setloading(false)
    }

    useEffect(()=>{

        if(loading === false){
            setName("")
            setImg(avatar)
            setSelectedFile(null)
            setloading(true)


            if(res.status === 201){
                console.log(res.status)
                notify("تمت عملية الاضافة بنجاح" , "success")
            }else{
                console.log("error")
                notify("هناك مشكلة في عملية الادخال" , "error")
            }

        }



    },[loading])


    return  [img , name  ,handelSubmit ,onChangeName ,onImgChange] ;

}

export default AddCategoryHook;