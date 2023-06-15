import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";


const CategoryContainer = ({data , loading}) => {

  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data.data ? (
            data.data.map((item , index) => (
              <CategoryCard
                key={index}
                title={item.name}
                img={item.image}
                background="#F4DBA4"
              />
            ))
          ) : (
            <h3>لا توجد منتجات</h3>
          )
        ) : (
          <div className=" d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
