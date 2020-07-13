import React from 'react';

const navItemsList = ["Sessions", "Log In", "Log Out", "Sign Up", "Register"]

const NavItems = () => {

  const listItemStyle = {
    padding: "10px 45px"
  }

  return (
    navItemsList.map((item, i) => 
      <li style={listItemStyle} key={i}>{item}</li>
    )
  )
}

export default NavItems;