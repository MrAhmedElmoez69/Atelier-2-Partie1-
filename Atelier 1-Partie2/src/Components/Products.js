import React, { useState } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import Product from "./Product";
import productsData from "../products.json";

const Products = () => {
  const [data, setdata] = useState(productsData);
  
  const [showAlert, setShowAlert] = useState(false);

  const handleBuy = (index) => {
    setShowAlert(true);
    
    const nextData = [...data];
    
    nextData[index].quantity = 1;
    
    setdata(nextData);
  };

  return (
    <Container>
      <Alert variant="success">
        <Alert.Heading>Hey, welcome to our shop MyStore</Alert.Heading>
        Thank you for choosing our store, we hope you enjoy your shopping
        experience!
      </Alert>
      <Row>
        {data.map((product, index) => (
          <Product
            key={index}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.img}
            like={product.like}
            quantity={product.quantity}
            buy={() => handleBuy(index)}
            disabled={product.quantity <= 0}
          />
        ))}
      </Row>
      <Alert key="primary" show={showAlert}>
        You bought an item
      </Alert>
    </Container>
  );
};

export default Products;