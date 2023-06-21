import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNonafication'
import AddCategoryHook from '../../hook/category/add-category-hook';

const AdminAddCategory = () => {

    const [img , name  ,handelSubmit ,onChangeName ,onImgChange] = AddCategoryHook();

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
                        onChange={onChangeName}
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

            <ToastContainer />
        </div>
    )
}

export default AdminAddCategory
