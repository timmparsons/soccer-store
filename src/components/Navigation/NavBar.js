import React from 'react';
import NavItems from './NavItems';

const NavBar = () => {
  const listStyle = {
    display: "flex",
    listStyle: "none",
    backgroundColor: "darkBlue",
    color: "white",
    marginTop: "0",
    justifyContent: "flex-end"
  }

  return (
    <div>
      <ul style={listStyle}>
        <NavItems />
      </ul>
    </div>
  )
}

export default NavBar;