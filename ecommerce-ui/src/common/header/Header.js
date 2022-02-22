import React, { Component } from "react";
import "./Header.css";
import Fastfood from '@material-ui/icons/Fastfood';
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/core/Menu';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
const styles = {
  root: {
    color: "#FFFFFF"
  },
  searchInput: {
    width: "80%",
    color: "white"
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 32,
  },
  formControl: {
    width: "90%"
  }
}
const TabContainer = function (props) {
  return (
    <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      mobile: "",
      passwordReg: "",
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      loginError: "dispNone",
      signupError: "dispNone",
      emailRequired: "dispNone",
      firstnameRequired: "dispNone",
      lastnameRequired: "dispNone",
      mobileRequired: "dispNone",
      passwordRegRequired: "dispNone",
      registrationSuccess: false,
      signUpErrorMsg: "",
      signUpErrCode: "",
      loginInvalidContactNo: "",
      loginErrCode: "",
      loginErrorMsg: "",
      loggedIn: sessionStorage.getItem('access-token') == null ? false : true,
      showUserProfileDropDown: false,
      open: false,
      anchorEl: null,
      snackBarOpen: false,
      snackBarText: "",
      menuIsOpen: false
    }
  }

 

  render() {
    const { classes } = this.props;
    

    return (
      <div className="topMain">
        <div className="header-main-container">
          <div className="header-logo-container"></div>
          {this.props.showSearch &&
            <div className="header-search-container">
              <div className="search-icon">
                <SearchIcon style={{ color: "#FFFFFF" }} />
              </div>
              <Input               
                className={classes.searchInput}
                placeholder="Search by Restaurant Name"
              />
            </div>
          }
          {!this.state.loggedIn ?
            <div>
              <Button style={{ fontSize: "100%" }} variant="contained" color="default"><AccountCircle /><span style={{ marginLeft: "2%" }}>Login</span></Button>
            </div>
            :
            <div>
              <Button style={{ textTransform: "capitalize", fontSize: "120%", background: " #263238", color: "lightgrey" }} onClick={this.openMenuHandler}><AccountCircle /><span style={{ paddingLeft: "3%" }}>  {sessionStorage.getItem("firstName")}</span></Button>
              <div>
                <Menu
                  className="menuDrop"
                  id="simple-menu"
                  keepMounted
                  >
                  <MenuItem ><Link to="/profile" style={{ textDecoration: 'none', color: "black" }}>My Profile</Link></MenuItem>
                  <MenuItem >Logout</MenuItem>
                </Menu>

              </div>
            </div>}
        </div>
        
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
         
          autoHideDuration={6000}
         
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.snackBarText}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
             
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}
export default withStyles(styles)(Header);
