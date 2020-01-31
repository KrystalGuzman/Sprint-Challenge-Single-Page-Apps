import React from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="ui centered">
      <Link to="/" class="navbar-brand"><h1 className="ui center">Rick &amp; Morty Fan Page</h1></Link>

      {/* <Link to="/" class="navbar-brand">Home</Link>
      <Link to="/characters" class="navbar-brand">Characters</Link>
      <Link to="/locations" class="navbar-brand">Locations</Link>
      <Link to="/episodes" class="navbar-brand">Episodes</Link>
      <Link to="/search" class="navbar-brand">Search</Link> */}

{/* added material ui components */}
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
      <MenuItem onClick={handleClose}><Link to="/" class="navbar-brand">Home</Link></MenuItem>
      <MenuItem onClick={handleClose}><Link to="/characters" class="navbar-brand">Characters</Link></MenuItem>
      <MenuItem onClick={handleClose}><Link to="/locations" class="navbar-brand">Locations</Link></MenuItem>
      <MenuItem onClick={handleClose}><Link to="/episodes" class="navbar-brand">Episodes</Link></MenuItem>
  
    </Menu>
  </header>


  );
}