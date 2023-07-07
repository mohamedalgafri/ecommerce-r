import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = () => {

  let [data , colors] = HomeCategoryHook();

  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {data.loading === false ? (
          data.category.data ? (
            data.category.data
              .slice(0, 5)
              .map((item, index) => (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                />
              ))
          ) : (
            <h3>لاتوجد منتجات</h3>
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

export default HomeCategory;
