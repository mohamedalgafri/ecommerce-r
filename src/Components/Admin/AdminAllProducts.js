import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ product }) => {
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        {product ? (
          product.map((item , index) => <AdminAllProductsCard key={index} item={item} />)
        ) : (
          <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
