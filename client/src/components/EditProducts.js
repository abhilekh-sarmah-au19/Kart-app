import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditProducts extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: "",
      price: "",
      quantity: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/products/edit-products/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          price: res.data.price,
          quantity: res.data.quantity,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
      .put(
        "http://localhost:4000/products/update-products/" +
          this.props.match.params.id,
        productObject
      )
      .then((res) => {
        console.log(res.data);
        window.alert("Product successfully updated");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Product List
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
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={this.state.price}
              onChange={this.onChangeProductPrice}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={this.state.quantity}
              min="1"
              onChange={this.onChangeProductQuantity}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update Product
          </Button>
        </Form>
      </div>
    );
  }
}
