import React, { Component } from "react";
export default class Extras extends Component {
  render() {
    return (
      <div id="extras">
        <Header />
        This is the page where people make their own branches.
        So make your own questions!
      </div>
    );
  }
}

const Header = () => (
  <header>
      Roots -----> Branches -----> EXTRAS
  </header> 
)