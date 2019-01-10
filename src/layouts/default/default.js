import React from "react";

import "./default.scss"

import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Profile from "../../components/profile/profile";
import Toolbox from "../../components/toolbox/toolbox";
import Work from "../../components/work/work";



export default class Layout extends React.Component {
  render() {
    return (
        <div>
            {/* <Header /> */}
                {/* <section>
                    <Profile />
                </section> */}
                <section>
                    <Toolbox />
                </section>
            {/* <section>
                <Work />
            </section> */}
        {/* <Footer /> */}
      </div>
    );
  }
}