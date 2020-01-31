import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" render={()=> <WelcomePage />} />
      <Route exact path="/characters" render={props => <CharacterList {...props} />} />
      <Route exact path="/locations" render={props => <LocationsList {...props} />} />
      <Route exact path="/episodes" render={props => <EpisodesList {...props} />} />
      <Route exact path='/search' render={props => <SearchForm {...props}/>}/>
    </main>
  );
}
