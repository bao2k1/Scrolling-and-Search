import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import Layout from "antd/es/layout";
import  Menu  from "antd/es/menu";
import  MenuOutlined from "@ant-design/icons";
import { StyledSidenav } from "./StyledSidenav";
import { Card } from "../Card/Card";
import { ReactComponent as Logo } from "../../assets/img/Logo.svg"
import { ReactComponent as Tivi } from "../../assets/img/Tivi.svg"
import { ReactComponent as Badge } from "../../assets/img/Badge.svg"
import { ReactComponent as Explore } from "../../assets/img/Explore.svg"
import { ReactComponent as Popular } from "../../assets/img/Popular.svg"
import { ReactComponent as Author } from "../../assets/img/Author.svg"
import { ReactComponent as Email } from "../../assets/img/Email.svg"
import { ReactComponent as Address } from "../../assets/img/Address.svg"
import { ReactComponent as Live } from "../../assets/img/Live.svg"
import { ReactComponent as Hotel } from "../../assets/img/Hotel.svg"
import { ReactComponent as Setting } from "../../assets/img/Setting.svg"
import { ReactComponent as Look } from "../../assets/img/Look.svg"
import { ReactComponent as Chat } from "../../assets/img/Chat.svg"
const { Sider} = Layout;
const {SubMenu} = Menu;


const newFeedData = [
  { name: "Newfeeds",svgHeight:"20px", color1: "#4d8ff2", color2: "#032889", fontSize: "16px", fontWeight: "500", icon: <Tivi /> },
  { name: "Badges", svgHeight:"20px",color1: "#e65026", color2: "#ef6128", fontSize: "16px", fontWeight: "500", icon: <Badge /> },
  { name: "Explore Stories",svgHeight:"20px", color1: "#f2c24c", color2: "#f2a04a", fontSize: "16px", fontWeight: "500", icon: <Explore /> },
  { name: "Popular Groups", svgHeight:"20px",color1: "#f11b62", color2: "#fd5e0f", fontSize: "16px", fontWeight: "500", icon: <Popular /> },
  { name: "Author Profile", svgHeight:"20px",color1: "#0066ff", color2: "#0089ff", fontSize: "16px", fontWeight: "500", icon: <Author /> }
];
const pages = [
  { name: "Email Box",  svgHeight:"30px", fontSize: "16px", fontWeight: "500", icon: <Email /> ,quantity:226},
  { name: "Near Hotel",  svgHeight:"30px",fontSize: "16px", fontWeight: "500", icon: <Hotel /> },
  { name: "Latest Event", svgHeight:"30px", fontSize: "16px", fontWeight: "500", icon: <Address /> },
  { name: "Live Stream", svgHeight:"30px", fontSize: "16px", fontWeight: "500", icon: <Live /> }
];
const account = [
  { name: "Settings",  svgHeight:"30px",fontSize: "16px", fontWeight: "500", icon: <Setting /> },
  { name: "Analytics",  svgHeight:"30px",fontSize: "16px", fontWeight: "500", icon: <Look /> },
  { name: "Chat",  svgHeight:"30px",fontSize: "16px", fontWeight: "500", icon: <Chat /> ,quantity:16}
];
const Sidenav =() => {

  const location = useLocation();
  // const [collapsed, setCollapsed] = useState(false);


  return (
      <StyledSidenav>
          <div className="logo">
            <Logo className="logo-img" />
            <span className="">Sociala. </span>
          </div>
          <div className="navigate-sidenav">
              <Card radius={"10px"} title={"New Feeds"} fontSize={"12px"} fontWeight={"500"} listData={newFeedData}/>
              <Card radius={"10px"} title={"More Pages"} fontSize={"12px"} fontWeight={"500"} listData={pages}/>
              <Card radius={"10px"} title={"Account"} fontSize={"12px"} fontWeight={"500"} listData={account}/>
          </div>
      </StyledSidenav>

  );
};

export default Sidenav;
