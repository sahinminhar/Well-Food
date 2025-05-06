import React, { useState } from "react";
import "../../../assets/css/style.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import MenuItemCard from "./menuitemcard";
import Button from "react-bootstrap/Button";

import dessertImg from "../../../assets/img/Dessert.jpg";
import vegetarianImg from "../../../assets/img/Vegetarian.jpg";
import potatoesImg from "../../../assets/img/Potatoes.jpg";
import seafoodImg from "../../../assets/img/Sea Food.jpg";
import beefburgerImg from "../../../assets/img/Beef Burger.jpg";
import pizzaImg from "../../../assets/img/Pizza.jpg";
import chickenrollImg from "../../../assets/img/Chicken Roll.jpg";
import hotdogImg from "../../../assets/img/Hot Dog Mustard.jpg";
import rawmincebeefImg from "../../../assets/img/Raw Mince Beef.jpg";
import shawarmaImg from "../../../assets/img/Shawarma.jpg";
import seaImg from "../../../assets/img/Sea-food.webp";

const MenuItem = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleQuantityChange = (name, quantity, price, image) => {
    setSelectedItems((prevItems) => {
      const existing = prevItems.find((item) => item.name === name);
      if (existing) {
        return quantity === 0
          ? prevItems.filter((item) => item.name !== name)
          : prevItems.map((item) =>
              item.name === name ? { ...item, quantity } : item
            );
      } else {
        return [...prevItems, { name, quantity, price, image }];
      }
    });
  };

  const handleBuyNow = () => {
    localStorage.setItem("cart", JSON.stringify(selectedItems));
    window.location.href = "/checkout";
  };

  return (
    <section className="menu-section">
      {/* Starting */}
      <h6>popular menu</h6>
      <h2>
        we provide exclusive food based on <br /> usa explore our popular food
      </h2>

      {/* Middle */}
      <section>
        <Container className="menu-list">
          <Row>
            <Col xs={12} md={1} className="menu-item">
              <Image src={dessertImg} rounded style={{ height: "100px" }} />
              <p className="heading">dessert</p>
            </Col>
            <Col xs={12} md={1} className="menu-item">
              <Image src={vegetarianImg} rounded style={{ height: "100px" }} />
              <p className="heading">vegetarian</p>
            </Col>
            <Col xs={12} md={1} className="menu-item">
              <Image src={potatoesImg} rounded style={{ height: "100px" }} />
              <p className="heading">potatoes</p>
            </Col>
            <Col xs={12} md={1} className="menu-item">
              <Image src={seafoodImg} rounded style={{ height: "100px" }} />
              <p className="heading">seafood</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Last */}
      <section className="menu-list2">
        <Container>
          <Row>
            <Col md={6}>
              <MenuItemCard
                name="beef burger"
                description="Juicy grilled beef patty in soft bun"
                image={beefburgerImg}
                price={120}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
            <Col md={6}>
              <MenuItemCard
                name="Italian pizza"
                description="Classic cheese & tomato Italian style"
                image={pizzaImg}
                price={250}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <MenuItemCard
                name="Chicken roll"
                description="Spicy chicken wrapped in soft roti"
                image={chickenrollImg}
                price={90}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
            <Col md={6}>
              <MenuItemCard
                name="shawarma"
                description="Chicken & veggies wrapped in pita"
                image={shawarmaImg}
                price={110}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <MenuItemCard
                name="Sea octopus"
                description="Exotic grilled octopus with spices"
                image={seaImg}
                price={190}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
            <Col md={6}>
              <MenuItemCard
                name="hot dog mustard"
                description="	Hot dog topped with tangy mustard"
                image={hotdogImg}
                price={80}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <MenuItemCard
                name="raw mince beef"
                description="Fresh ground beef for cooking"
                image={rawmincebeefImg}
                price={180}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
            <Col md={6}>
              <MenuItemCard
                name="hot dog mustard"
                description="	Hot dog topped with tangy mustard"
                image={hotdogImg}
                price={80}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Button variant="success" className="btn" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </section>
    </section>
  );
};

export default MenuItem;
