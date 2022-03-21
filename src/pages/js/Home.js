import React, { Fragment, } from "react";
import Header from '../../components/Home/header';
import Content from '../../components/Home/content';
import Footer from '../../components/Home/Footer';
import "../css/home.css";

const Home = () => {
    return (
        <Fragment>
            <div>
                <Header />
                <div className="container">
                    <Content />
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Home;