import React from "react";
import mainImg from "../../assets/image/content_img.jpg";

const Content = () => {
    return (
        <div className="pb-3">
            <div><img src={mainImg} width="100%" alt="" /></div>
            <div className="row d-flex justify-content-between py-5">
                <div className="col-xl-6 col-lg-12 col-md-12 d-flex custom_shape">
                    <div className="d-flex align-items-center">
                        <div className="left_line"></div>
                        <div className="content_round"></div>
                        <div className="right_line"></div>
                    </div>
                    <div className="ab_main">
                        <div className="black_line">
                            <div className="ls-5 medium_text_1">REAL BOY</div>
                            <div className="ls-5 medium_text">BOY BOT</div>
                            <div className="ls-5 medium_text_1">CLUB OPEN</div>
                            <div>
                                <button className="ls-5 button btn_enter"><span>ENTER</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 content_text">
                    <div className="text-white ls-5">EHIOSDHFIHSDOZHFVPHDSPXHP</div>
                    <div className="text-white ls-5">ISHGEIGHPWEFPWVFWPFPHEPHGVWP</div>
                </div>
            </div>
            <div className="pt-5">
                <div className="content_line"></div>
            </div>
        </div>
    );
}

export default Content;