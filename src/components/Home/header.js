import React from "react";
import headerText from "../../assets/image/type_logo.png";
import headerPicture from "../../assets/image/hands_logo.png";

const Header = () => {
    return (
        <div className="row d-flex align-items-center header">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6"><img src={headerText} width={150} alt="" /></div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-center header_logo my-3"><img src={headerPicture} width={150} alt="" /></div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                <h2><i className="fab fa-instagram text-white" /></h2>
                <h2><i class="fab fa-discord text-white px-3" /></h2>
                <h2><i className="fab fa-twitter text-white" /></h2>
            </div>
        </div>
    );
}

export default Header;