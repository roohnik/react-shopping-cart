import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SiCoop } from "react-icons/si";
import { GiHandOk, GiClothes } from "react-icons/gi";
import { MdRadio } from "react-icons/md";
import * as IoIcons from "react-icons/io";

import { Link } from "react-router-dom";
// import { scrollTop } from "dom-helpers";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  ${mobile({ position: "fixed", top: "0px", right: "0px" })}
  position:absolute;
  top: 100px;
  width: 100%;
`;

const OrigMenuBar = () => {


  return (
    <>
      {/* <Navbar bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect> */}
      <Container>
        <Navbar
          bg="light"
          variant="light"
          opacity="0.66"
          expand="sm"
          collapseOnSelect
          className="NavbarMenu"
        >
          {/* <Navbar.Brand>لوگو</Navbar.Brand> */}

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="productMenu">
                <NavDropdown
                  className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                  title="محصولات"
                >
                  <NavDropdown.Item
                    className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                    as={Link}
                    to="/products/karedast"
                  >
                    <GiHandOk /> کار دست
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                    as={Link}
                    to="/products/zivaralat"
                  >
                    <GiClothes /> زیورآلات
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                    as={Link}
                    to="/products/pooshak"
                  >
                    <MdRadio /> پوشاک
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                    as={Link}
                    to="/products/salamati"
                  >
                    <MdRadio /> سلامتی
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                    as={Link}
                    to="/products/sadegerai"
                  >
                    <MdRadio /> ساده گرایی
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                    as={Link}
                    to="/products/baziosargarmi"
                  >
                    <MdRadio /> بازی و سرگرمی
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                </NavDropdown>
              {/* </button> */}
              <Nav.Link
                className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                as={Link}
                to="/salecooperation"
              >
                {/* <button type="button" class="btn btn-outline-secondary"> */}
                  <SiCoop />
                  <span> همکاری در فروش</span>
                {/* </button> */}
              </Nav.Link>
              <Nav.Link
                className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                as={Link}
                to="/marketing"
              >
                  <SiCoop /> <span>بازاریابی</span>
              </Nav.Link>
              <Nav.Link
                className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                as={Link}
                to="/support"
              >
                  <IoIcons.IoMdHelpCircle />
                  <span> پشتیبانی</span>
              </Nav.Link>
              <Nav.Link
                className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                as={Link}
                to="/about"
              >
                  <IoIcons.IoMdHelpCircle />
                  <span> درباره ما</span>
              </Nav.Link>
              <Nav.Link
                className="bg-light text-secondary p-3 mb-2 d-flex justify-content-start align-items-center rounded"
                as={Link}
                to="/contact"
              >
                  <IoIcons.IoMdHelpCircle />
                  <span> تماس با ما</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>
      </Container>
    </>
  );
};

export default OrigMenuBar;

// {SidebarData.map((item, index) => {
//     return (
//       <li key={index} className={item.cName}>
//         <Link to={item.path}>
//           {item.icon}
//           <span>{item.title}</span>
//         </Link>
//       </li>
