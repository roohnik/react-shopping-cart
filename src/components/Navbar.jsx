import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import * as AiIcons from "react-icons/ai";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  // FaPinterest,
  faTelegram,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import { mobile } from "../responsive";
import { useSelector } from "react-redux";
// import OrigMenuBar from "./OrigMenuBar";

const Container = styled.div`
  position: fixed;
  z-index: 100;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  opacity: 0.9;
  height: 100px;
  width: 100%;
  ${mobile({ height: "50px", position: "relative" })}
`;

const Wrapper = styled.div`
  // padding: 10px 20px;
  // padding: 30px 1%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ padding: "10px 0px", flexDirection: "column" })}
`;

const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center
  justify-content:space-between;
  flex-direction:row
  // flex: 2npm i react-icons;
  // width:10px
  // height:50%;
  border:2px solid gray;
  text-align: center;
  // margin-right:10px
  margin-bottom: 40px;
  margin-left: 33px;
  // ${mobile({ flexDirection: "column" })}
`;

const Logo = styled.h1`
  flex:1;
  text-align:center;
  margin-right:50px;
  color: #f1c40f;
  text-shadow: 1px 1px 2px black, 0 0 25px white, 0 0 5px #f1c40f;
  font-weight: bold;
  font-size: 10px // transform: translate(50%,-50%);
  &:hover{
    background-color:black;
    opacity:0.66;
  }
    ${mobile({ fontSize: "19px", flexDirection: "column" })};
`;

const Center = styled.div`
  flex: 1;
  // border: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
const SearchContainer = styled.div`
  border: 1px solid #f1c40f;
  border-radius: 51px 50px 50px 7px;
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 0px;
`;
const Input = styled.input`
  border-radius: 51px 50px 50px 7px;
  border: none;
  // border-color:teal;
  outline: none;
  &:focus {
    border: none;
    outline: none;
    border: 0.2px solid gray;
  }
  ${mobile({ width: "50px" })}
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flexDirection: "column" })}
  margin-bottom:40;
  padding-bottom: 40;
`;
//Links or Menu Item.
const MenuItems = styled.div` 
  flex:0.5
  display:flex;
  align-items:center;
  margin-top:10px;
  padding-top:10px;
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}//don't need flex:2

  Badge{
    font-size:12px;
  }
`;

// const AccountDetails = styled.div`
// flex: 0.5
// text-align: center;
// display:flex;
// align-items:center;
// margin-bottom:20px;
// `;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
const CartContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  ${mobile({ position: "fixed", top: "0px", left: "0px" })}
`;

// const SocialIcon = styled.div`
//   width: 33px;
//   height: 33px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: gray;
//     color: white;
//   }
// `;

const FontAwesomeIcons = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.66;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1c40f;
    color: white;
  }
`;

const Button = styled.button`
  padding: 7px;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  color: black 0.66;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #f1c40f;
    color: white;
  }
`;

// const Hr = styled.div`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

const Navbar = () => {
  //Login Modal
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal);
  // };
  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

//   const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);
  // const [click, setClick] = useState(false);
  // const handleClickMenu = () => setClick(!click);

  // for modal
  // const [showRegModal, setShowRegModal] = useState(false);
  // const openModal = () => {
  //   setShowRegModal((prev) => !prev);
  // };

  // Account Menu
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <Container>
        <Wrapper>
          <Right>
            <div style={{ border: "none", marginBottom: "12px" }}>
              <Link to="/" className="link">
                <Logo> فروشگاه من</Logo>
              </Link>
            </div>
          </Right>

          <Center>
            <SearchContainer>
              <Search
                style={{
                  backgroundColor: "#f1c40f",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "33px",
                  fontWeight: "bold",
                }}
              />
              <Input
                style={{ width: "100%", padding: "0px" }}
                placeholder="جستجو کن"
              />
            </SearchContainer>
          </Center>

          <Left>
            {/* ************************************ */}

            <SocialContainer>
              <FontAwesomeIcons>
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </FontAwesomeIcons>
              <FontAwesomeIcons>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </FontAwesomeIcons>
              <FontAwesomeIcons>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </FontAwesomeIcons>
              <FontAwesomeIcons>
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </FontAwesomeIcons>
              <FontAwesomeIcons>
                <FontAwesomeIcon icon={faPinterest} size="2x" />
              </FontAwesomeIcons>
            </SocialContainer>

            {/* <CartContainer>
              <Link to="/cart">
                <MenuItems>
                  <Badge badgeContent={quantity} color="Secondary">
                    <ShoppingCartOutlined
                      style={{ color: "#f1c40f", fontSize: "30px" }}
                    />
                  </Badge>
                </MenuItems>
              </Link>
            </CartContainer> */}


            <SocialContainer>
              <Link to="/login">
                <MenuItems>
                  <Button>ورود</Button>
                </MenuItems>
              </Link>
              <Link to="/register">
                <MenuItems>
                  <Button>عضویت</Button>
                </MenuItems>
              </Link>
            </SocialContainer>
          </Left>
        </Wrapper>
        {/* <OrigMenuBar /> */}
      </Container>
    </>
  );
};

export default Navbar;
