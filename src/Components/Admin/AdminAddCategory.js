import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
import { useState } from 'react'
import axios from 'axios'
import baseUrl from '../../Api/baseURL'
import { useSelector , useDispatch } from 'react-redux'
import { createCategory } from '../../redux/actions/categoryAction'
const AdminAddCategory = () => {

    const [img , setImg ] = useState(avatar);
    const [name , setName ] = useState();
    const [selectedFile , setSelectedFile ] = useState(null);
    const [loading , setloading ] = useState(null);

    const dispatch = useDispatch();


    const onImgChange = (e)=> {
        if(e.target.files && e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }

    }

    console.log(loading)

    const handelSubmit =async (event)=>{
        event.preventDefault();
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
        }
        

    },[loading])

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                        <label for="upload-photo">
                            <img src={img} alt="" height="100px" width="120px" style={{cursor:"pointer"}} />
                        </label>
                        <input type='file' id='upload-photo' name="photo" onChange={onImgChange} />
                    </div>

                    <input
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddCategory
