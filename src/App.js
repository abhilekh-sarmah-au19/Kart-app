import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreateProducts from "./components/CreateProducts";
import EditProducts from "./components/EditProducts";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar className="Color" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/products-list"} className="nav-link text-light">
                  <ShoppingCartIcon /> Shopping Kart
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-products"} className="nav-link text-light">
                    Add New Product <AddCircleOutlineIcon fontSize="small" />
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/products-list"} className="nav-link text-light">
                    Products List <FactCheckIcon />
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <ProductsList {...props} />}
                  />
                  <Route
                    exact
                    path="/create-products"
                    component={(props) => <CreateProducts {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-products/:id"
                    component={(props) => <EditProducts {...props} />}
                  />
                  <Route
                    exact
                    path="/products-list"
                    component={(props) => <ProductsList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
