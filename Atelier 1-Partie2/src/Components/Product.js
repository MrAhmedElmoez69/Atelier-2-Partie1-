import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  const [isLike, setIsLike] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [bestProduct, setBestProduct] = useState(false);

  useEffect(() => {
    if (props.like > 5) {
      setBestProduct(true);
      setShowNotification(true);
    } else {
      setBestProduct(false);
      setShowNotification(false);
    }
  }, [props.like]);

  const handleLikeClick = () => {
    setIsLike(!isLike);
    if (!bestProduct && props.like + 1 > 5) {
      setShowNotification(true);
      setBestProduct(true);
    }
  };

  const cardStyle = {
    width: "18rem",
    backgroundColor: bestProduct ? "#DB7090" : "",
  };

  const cardClassName = bestProduct ? "bestProduct" : "";

  const titleStyle = {
    backgroundColor: bestProduct ? "#DB7090" : "",
    color: "#fff",
    padding: "0.5rem",
  };

  return (
    <Card style={cardStyle} className={cardClassName}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
      {props.title}
        <Card.Title style={titleStyle}>
          {bestProduct && <span style={{ marginLeft: "1rem" }}></span>}
        </Card.Title>
        <Card.Text>
          <p>{props.description}</p>
          <p>Price: {props.price}$</p>
          <p>
            Likes: {isLike ? props.like + 1 : props.like}, Quantity:{" "}
            {props.quantity}
          </p>
        </Card.Text>
        <Button variant="primary" onClick={handleLikeClick}>
          {isLike ? "Unlike" : "Like"}
        </Button>
        <Button
          variant="secondary"
          onClick={props.buy}
          disabled={props.disabled}
        >
          Buy
        </Button>
        {showNotification && (
          <div style={{ backgroundColor: "#DB7090", color: "#fff", padding: "1rem" }}>
           Best Product!
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
