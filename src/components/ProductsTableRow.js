import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class ProductsTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct() {
    if (window.confirm("Are You Want to Delete the Product")) {
      axios
        .delete(
          "http://localhost:4000/products/delete-products/" + this.props.obj._id
        )
        .then((res) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const total = this.props.obj.price * this.props.obj.quantity;
    // var subtotal = this.props.obj.reduce(
    //   (acc, product) => acc + total * product.quantity,
    //   0
    // );
    // var product = this.props.obj.reduce;

    return (
      <>
        <tr>
          <td>{this.props.obj.name}</td>
          <td>{this.props.obj.price}/-</td>
          <td>{this.props.obj.quantity}</td>
          <td>{total}/-</td>
          <td>
            <Link
              className="edit-link"
              path={"products/:id"}
              to={"/edit-products/" + this.props.obj._id}
            >
              Edit
            </Link>
            <Button onClick={this.deleteProduct} size="sm" variant="danger">
              Delete
            </Button>
          </td>
        </tr>
      </>
    );
  }
}
