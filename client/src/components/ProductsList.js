import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ProductTableRow from "./ProductsTableRow";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import WarningIcon from "@mui/icons-material/Warning";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/products/")
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.products.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  }

  grandTotal() {
    return this.state.products.reduce(function (previousValue, currentValue) {
      var total = currentValue.price * currentValue.quantity;
      return previousValue + total;
    }, 0);
  }

  render() {
    const productTable = this.state.products;
    // var subtotal = productTable.length

    return productTable.length > 0 ? (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total (Rs.)</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-center">{this.DataTable()}</tbody>
        </Table>
        <div>
          <h5 className="d-flex justify-content-end p-2 alert-success">
            Grand Total: Rs. {this.grandTotal()}/-
          </h5>
        </div>
      </div>
    ) : (
      <div className="alert alert-danger text-center" role="alert">
        <WarningIcon /> Product List is Empty!!!{" "}
        <a href="/create-products" className="btn alert-primary">
          Please add a new Product <AddCircleIcon fontSize="small" />
        </a>
      </div>
    );
  }
}
