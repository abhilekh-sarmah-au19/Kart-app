import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateProducts extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      price: "",
      quantity: "",
    };
  }

  onChangeProductName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeProductPrice(e) {
    this.setState({ price: e.target.value });
  }

  onChangeProductQuantity(e) {
    this.setState({ quantity: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const productObject = {
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
    };
    axios
      .post("http://localhost:4000/products/create-products", productObject)
      .then((res) => console.log(res.data));
    window.alert("Product added SuccessFully");
    this.setState({ name: "", price: "", quantity: "" });
    this.props.history.push("/products-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeProductName}
              required
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={this.state.price}
              min="1"
              onChange={this.onChangeProductPrice}
              required
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={this.state.quantity}
              min="1"
              onChange={this.onChangeProductQuantity}
              required
            />
          </Form.Group>
          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Create Product
          </Button>
        </Form>
      </div>
    );
  }
}
