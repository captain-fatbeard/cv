import React from "react";

import "./default.scss"

import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Profile from "../../components/profile/profile";



export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <section>
            <Profile />
          </section>
        <Footer />
      </div>
    );
  }
}