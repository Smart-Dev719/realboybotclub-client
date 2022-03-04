import React from "react";
import main_logo from "../../assets/image/white_logo.png";
import long_arrow_right from "../../assets/image/long_arrow_right.png"

const Footer = () => {
    return (
        <div className="row d-flex justify-content-between align-items-center py-3">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 join_input">
                <div className="ls-3 text-white mb-2">JOIN THE LIST</div>
                <div className="d-flex">
                    <div className="input_text"><input type="text" /></div>
                    <div className="input_icon"><button><img src={long_arrow_right} alt="" width={20} /></button></div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-4 text-center footer_logo"><img src={main_logo} width={250} alt="" /></div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                <div className="d-flex justify-content-end">
                    <h5><i className="fab fa-instagram text-white" /></h5>
                    <h5><i class="fab fa-discord text-white px-3" /></h5>
                    <h5><i className="fab fa-twitter text-white" /></h5>
                </div>
                <div className="footer_text pt-2">
                    <div className="ls-3 spec_color"><u>BLAJWFIEWHGIOHEOI'FBHERWIBH</u></div>
                    <div className="ls-3 spec_color py-2"><u>OWRJGPHGHBPHWPBHVWSBHV</u></div>
                    <div className="ls-3 text-white">EGJRGJRPJRE9HJBR</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;