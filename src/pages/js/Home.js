import React, { Fragment, } from "react";
import Header from '../../components/Home/header';
import Content from '../../components/Home/content';
import Footer from '../../components/Home/Footer';
import "../css/home.css";

const Home = () => {
    return (
        <Fragment>
            <div>
                <div className="container">
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </div>
        </Fragment>
    );
}

export default Home;