import React from "react";
import BrandCard from "./BrandCard";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import { Container, Row, Spinner } from "react-bootstrap";


const BrandContainer = ({data : brand , loading}) => {


  console.log(brand.data);

  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل الماركات</div>
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brand.data ? (
            brand.data.map((item) => (
              <BrandCard key={item.id} img={brand1} name={item.name} />
            ))
          ) : (
            <div className="text-center">لا يوجد نتائج</div>
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

export default BrandContainer;
