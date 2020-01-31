import React from "react";
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <Link to="/" class="navbar-brand">Home</Link>
      <Link to="/characters" class="navbar-brand">Characters</Link>
      <Link to="/locations" class="navbar-brand">Locations</Link>
      <Link to="/episodes" class="navbar-brand">Episodes</Link>
      <Link to="/search" class="navbar-brand">Search</Link>
    </header>


  );
}
