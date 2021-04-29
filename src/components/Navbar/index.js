import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingTop: "0px",
    paddingBottom: "0px",
    backgroundColor: "darkgrey",
  },
}));

export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    // console.log("Clicked");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../../images/abeja.svg")}
            alt="logo"
            style={{ width: "10%" }}
          />
        </NavLink>
        <Bars
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        ></Bars>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            classes: { padding: classes.padding },
          }}
        >
          <MenuItem onClick={handleClose}>
            <NavLink to="/about">About</NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink to="/services" activeStyle>
              Services
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink to="/contact-us" activeStyle>
              Contact Us
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink to="/sign-up" activeStyle>
              Sign Up
            </NavLink>
          </MenuItem>
        </Menu>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
