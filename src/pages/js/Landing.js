import React, { Fragment } from "react";
import Header from "../../components/Landing/header";
import Welcome from "../../components/Landing/welcome";
import Fixed from "../../components/Landing/fixed";
import Seat from "../../components/Landing/seat";
import Mint from "../../components/Landing/mint";
import Welldown from "../../components/Landing/welldown";
import Stencil from "../../components/Landing/stencil";
import Ourstory from "../../components/Landing/ourstory";
import Roadmap from "../../components/Landing/roadmap";
import Team from "../../components/Landing/team";
import Faq from "../../components/Landing/faq";
import Footer from "../../components/Home/Footer";
import "../css/landing.css";

const Landing = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <div className="container">
          <Welcome />
          <Fixed />
          <Seat />
          <Mint />
          <Welldown />
          <Stencil />
          <Ourstory />
          <Roadmap />
          <Team />
          <Faq />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
