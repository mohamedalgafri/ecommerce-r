import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import notify from '../../hook/useNonafication';
import { createSubCategory } from '../../redux/actions/subCategoryAction';

const AddSubCategoryHook = () => {

    let [id , setId] = useState('0');
    let [name , setName] = useState('');
    let [loading , setLoading] = useState(true);

    useEffect(() => {
        if(!navigator.onLine){
            notify('هناك مشكلة في الاتصال بالانترنت' , 'warn');
            return;
        }
        dispatch(getAllCategory());
      }, []);

    const dispatch = useDispatch();

    const category = useSelector((state) => state.allCategory.category);
  

    const subCategory = useSelector((state)=> state.subCategory.subCategory);
    // console.log(category.data);
  


    let handelChange =(e)=>{
        setId(e.target.value);
    }
    let handelChangeName =(e)=>{    
        e.persist();
        setName(e.target.value);
    }

    let handelSubmit = async (e)=>{
        e.preventDefault();

        if(!navigator.onLine){
            notify('هناك مشكلة في الاتصال بالانترنت' , 'warn');
            return;
        }

        if(id === "0"){
            notify("اختر التصنيف الرئيسي" , "warn");
            return ;
        }
        if(name === ""){
            notify("ادخل اسم التصنيف" , "warn");
            return ;
        }

        setLoading(true)

        await dispatch(createSubCategory({
            name,
            category : id ,
        }))

        setLoading(false)

    }

    useEffect(()=>{
        if(loading === false){
            setName('');
            setId('0');

            if(subCategory){
                
                if(subCategory.status === 201){
                    notify("تمت اضافة تصنيف فرعي","success")
                }else if(subCategory === "ErrorAxiosError: Request failed with status code 400"){
                    notify("اسم التصنيف الفرعي مكرر","warn")
                }
                else{
                    notify("هناك خطأ في عملية الاضافة ","error")
                }
                
            }
        }

        setLoading(true)
    },[loading])





  return [name , id , category , handelChangeName ,handelChange , handelSubmit ]
}

export default AddSubCategoryHook