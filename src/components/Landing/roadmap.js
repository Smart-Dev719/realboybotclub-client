import React from "react";
import roadmap from "../../assets/image/roadmap1.png";

const Roadmap = () => {
    const readmore1 = () => {
        document.querySelector(".para_1").classList.toggle('readmore');
    }
    const readmore2 = () => {
        document.querySelector(".para_2").classList.toggle('readmore');
    }
    const readmore3 = () => {
        document.querySelector(".para_3").classList.toggle('readmore');
    }
    const readmore4 = () => {
        document.querySelector(".para_4").classList.toggle('readmore');
    }
    return (
        <div className="row pt-5" id="roadmap">
            <div className="col-lg-5 col-md-12 mt-5">
                <div className="nft_img">
                    <img src={roadmap} alt="" width="100%" className="roadimg" />
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
                <div class="timeline">
                    <ul>
                        <li>
                            <span className="font-bold">Launch</span>
                            <div className="content font-origin">
                                <p className="para_1" onClick={readmore1}>
                                    Take off! With all of your help, we can build our passionate community and sell
                                    out our dope 8008 real boy bots! Following this, we will be ready to enter the metaverse!
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="font-bold">A gift from us to you</span>
                            <div className="content font-origin">
                                <p className="para_2" onClick={readmore2}>
                                    As promised all owners of the 8008 real boy bots will be eligible for 1 of 1000 tattoo kits. This kit will include everything you need to start practicing your tattoo skills on fake skin, just like your bot wears! Please, whatever you do, DO NOT TATTOO human skin...&nbsp;We can't stand the sight of shit tattoos on human skin, it's not cool and it's not clever, nobody will say you look good, you may even catch a disease, so seriously, don’t do it. While learning how to tattoo stick to fake skin.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="font-bold">Entering the metaverse</span>
                            <div className="content font-origin">
                                <p className="para_3" onClick={readmore3}>
                                    So whilst all of you are loving life, this is where we begin making the decision on which metaverse to call home, this will
                                    be no easy decision, we want to make sure it's the shop that we all want and something we can be proud of. For this reason, we will be asking our community to vote on where they would like to see the real boy bot club. Remember, the shop is for YOU to express yourself using your 3D bots, and get inked, of course. There are already clone x avatars flexing their fire kicks, let’s make it possible for them to have tattoos too!
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="font-bold">Level up</span>
                            <div className="content font-origin">
                                <p className="para_4" onClick={readmore4}>
                                    V-02 bot, every owner of a V-01 real boy bot will be gifted a 3D V-02 real boy bot. These bots will be able to access the real boy bot club studio, be able to choose from our collection of tattoos and get them inked on their avatars. We will also be engaging with our community in order to create the opportunity for talented individuals to design and earn money for their creations, this hasn't been done before in the NFT space, and we know it will be an incredible opportunity for everyone. The designs we
                                    choose will be displayed in our metaverse studio and every time someone selects the design to be tattooed on their avatar, the creator of the design will earn a % of the purchase, and this is just the beginning.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Roadmap;
