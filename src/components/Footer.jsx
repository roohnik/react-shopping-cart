import React from "react";
import {
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  // FaPinterest,
  faTelegram,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
  opacity: 0.9;
  ${mobile({ flexDirection: "column" })}
`;

const Right = styled.div`
  // border-top: 1px solid gray;
  // border-width: thin;
  // border-style: solid;
  // border-left-style: groove;
  // border-left-color: black;
  // border-left-width: 0.5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  // text-decoration: none;
  // border:1px solid black
  // width:10px;
  // flex: 0.5;
  color: #f1c40f;
  // padding-top:5px
  text-shadow: 1px 1px 2px black, 0 0 25px white, 0 0 5px #f1c40f;
  // background-color:gray;
  font-weight: bold;
  font-size: 10px // transform: translate(50%,-50%);
  &:hover{
    background-color:black;
    opacity:0.66;
  }
    // ${mobile({ fontSize: "19px" })};
`;

const Desc = styled.div`
  margin: 20px 0px;
  color: gray;
  font-size: 12px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const FontAwesomeIcons = styled.div`
  // width: 40px;
  // height: 40px
  border-radius: 50%;
  opacity: 0.66;
  margin: 0 10px;
  // border:1px solid #f1c40f;
  cursor: pointer;
  &:hover {
    background-color: #f1c40f;
    color: white;
  }
`;
// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
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

const Center = styled.div`
  // border-left: 1px solid gray;
  // border-width: thin;
  // border-style: solid;
  // border-left-style: groove;
  // border-left-color: gray;
  // border-left-width: 7px;
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
  color: gray;
  font-size: 21px;
`;
const List = styled.ul`
    
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-warp: wrap
    flex:0.5;
    
`;

const ListItem = styled.li`
    width:auto;
    margin-bottom:20px;
    padding:7px;
    display:flex;
    // color::#f1c40f;
    color:gray;
    font-size:12px;
    &:hover{
      color::#f1c40f;
      opacity:0.66;
    }
`;

const Left = styled.div`
  border-top: 1px solid gray;
  // border-right:1px solid gray;

  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: gray;
  font-size: 12px;
`;
// const Payment = styled.img`
//   width: 50%;
// `;

// const Hr = styled.div`
//   background-color: black;
//   opacity:0.66;
//   border: none;
//   height: 0.5px;
//   width:100%;

// `;

const Footer = () => {
  return (
    <>
      {/* <Hr /> */}

      <Container>
        <Right>
          <Logo>فروشگاه من </Logo>
          <Desc>
            فروشگاه با دقت و حوصله به دنبال تولید کننده ها میگرده و گمشده شما رو
            پیدا میکنه
          </Desc>
          <SocialContainer>
            {/* <SocialIcon color='3B5999'>
                <Facebook />
            </SocialIcon> */}
            {/* <SocialIcon color="F71523">
              <YouTube />
            </SocialIcon>
            <SocialIcon color='F71568'>
                <Instagram />
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <Twitter />
            </SocialIcon>
            <SocialIcon color='159BF7'>
                <Telegram />
            </SocialIcon>
            <SocialIcon color='F71523'>
                <Pinterest />
            </SocialIcon> */}
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
        </Right>
        <Center>
          <Title>محصولات ما</Title>
          <List>
            <Link to="/" className="link">
              {" "}
              <ListItem>صفحه اصلی</ListItem>
            </Link>
            <Link to="/products/handicraft" className="link">
              <ListItem>صنایع دستی</ListItem>
            </Link>
            <Link to="/products/traditionalclothing" className="link">
              <ListItem>پوشاک سنتی</ListItem>
            </Link>
            <Link to="/products/winter" className="link">
              {" "}
              <ListItem>زمستانه</ListItem>
            </Link>
            <Link to="/products/accessory" className="link">
              <ListItem>اکسسوری</ListItem>
            </Link>
            <Link to="/account" className="link">
              <ListItem>حساب من</ListItem>
            </Link>
          </List>
          <List>
            <Link to="/reports" className="link">
              <ListItem>پیگیری سفارشات</ListItem>
            </Link>
            <Link to="/favorites" className="link">
              <ListItem>لیست علاقه مندی</ListItem>
            </Link>
            <Link to="/salecooperation" className="link">
              <ListItem>همکاری در فروش</ListItem>
            </Link>
            <Link to="/rules" className="link">
              <ListItem>قوانین</ListItem>
            </Link>
          </List>
        </Center>
        <Left>
          <Link to="/contactus" className="link">
            <Title>تماس با ما</Title>
          </Link>
          <ContactItem>
            <Room
              style={{
                marginLeft: "15px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                opacity: "0.66",
              }}
            />
            آدرس: تهران - خیابان آزادی - میدان انقلاب - خیابان قدس
          </ContactItem>
          <ContactItem>
            <Phone
              style={{
                marginLeft: "15px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                opacity: "0.66",
              }}
            />
            تلفن: 02122256222
          </ContactItem>
          <ContactItem>
            <MailOutline
              style={{
                marginLeft: "15px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                opacity: "0.66",
              }}
            />
            ایمیل: example@gmail.com
          </ContactItem>
          {/* <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' /> */}
        </Left>
      </Container>
    </>
  );
};

export default Footer;
