import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AddSubCategoryHook from '../../hook/subCategory/add-subCategory-hook';

const AdminAddSubCategory = () => {

    let [name , id , category , handelChangeName ,handelChange , handelSubmit ] = AddSubCategoryHook();

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                        value={name}
                        onChange={ handelChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الرئيسي"
                    />
                    <select name="category" id="lang" className="select mt-3 px-2 " onClick={handelChange}>
                         <option value="0">اختر تصنيف فرعي</option> 
                        {
                            
                            category.data ? (
                                category.data.map((item)=>(
                                    <option key={item._id} value={item._id}>{item.name}</option> 
                                ))
                            ):(
                                ""
                            )
                            
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminAddSubCategory
