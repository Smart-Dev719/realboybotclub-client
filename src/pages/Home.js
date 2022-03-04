import React, { Fragment, } from "react";
import Header from '../components/Home/header';
import Content from '../components/Home/content';
import Footer from '../components/Home/Footer';
import "./home.css";

const Home = () => {
    return (
        <Fragment>
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
        </Fragment>
    );
}

export default Home;