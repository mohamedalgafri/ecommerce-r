import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AddProductHook from "../../hook/product/add-product-hook";

const AdminAddProducts = () => {
    
    const [ onChangeName , prodDescription , onChangeProdDescription , priceBefore , images , setImages , prodName ,
        , onChangeProdPriceBefore , priceAfter , onChangeProdPriceAfter , qty , onChangeProdQty , categorySelect , category , options ,
         onSelect , onRemove , setBrandId , brands , colors , removeColor , setShowColor , showColor ,
          handelChangeComplete , handelSubmit , onChangeColor]
           = AddProductHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
          />
          <input
            value={prodName}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            value={prodDescription}
            onChange={onChangeProdDescription}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            value={priceAfter}
            onChange={onChangeProdPriceAfter}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            value={priceBefore}
            onChange={onChangeProdPriceBefore}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
          />
          <input
            value={qty}
            onChange={onChangeProdQty}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة "
          />
          <select
            onClick={categorySelect}
            name="cat"

            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">اختر التصنيف الرئيسي</option>
            {
            category ?(
                    category.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      )))
                    : null
              }
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            onClick={(e) => setBrandId(e.target.value)}
            name="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">اختر ماركة</option>
            {brands.data
              ? brands.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {
                colors.length >= 1 ?(
                    colors.map((color , index)=>(
                        <div
                        onClick={()=> removeColor(color)}
                        key={index}
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))
                ):null

            }


            <img
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
              className=""
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handelChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
      <ToastContainer />

    </div>
  );
};

export default AdminAddProducts;
