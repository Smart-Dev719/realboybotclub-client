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
            <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
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
                                    Take off!! Thanks to all of you we’ve built our passionate community and following the sell out of our dope 8008 real boy bots we are now ready to buy a couple of yachts and some mansions… naaa just kidding let’s get ourselves into the metaverse bitchesss!
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="font-bold">A gift from us to you</span>
                            <div className="content font-origin">
                                <p className="para_2" onClick={readmore2}>
                                    As promised all owners of the 8008 real boy bots are eligible for one of 1000 tattoo kits this kit will include everything you need to start practicing your tattoo skills on fake sink just like your real boy bot wears! Do not tattoo human skin… seriously we cant stand the sight of shit tattoos on human skin, it’s not cool and it’s not clever, and nobody will fancy you, you may even catch some bad ass disease, so seriously don’t do it. while learning to tattoo stick to fake skin. Follow our advice and we will be happy to give you regular feedback, tutorials, advice, tips, ideas and whatever else you may need to become a better artist.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="font-bold">Enter the metaverse</span>
                            <div className="content font-origin">
                                <p className="para_3" onClick={readmore3}>
                                    So whilst all of you are loving life, this is where we begin making the decision on which metaverse to call home, this will be no easy decision, we want to make sure it’s the shop that we all want and can be proud of! For this reason we will be asking our community to vote on where they would like to see the real boy bot club. Remember shop is for your 3D avatars to get inked up and fled their tattoos to other web 3 users. There’s already clone x avatars flexing their rtkft kicks let’s make it possible for them to have the tattoos to match.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="font-bold">Level up</span>
                            <div className="content font-origin">
                                <p className="para_4" onClick={readmore4}>
                                    V-02 bot, every owner of a V-01 real boy bot will be gifted a 3D V-02 real boy bot, obviously these bots will be able to access the real boy bot club studio and  will be able to choose from our collection of tattoos and get them inked on you. We will also be engaging with our community in order to create the opportunity for talented individuals to design to earn, this hasn’t been done before, and we know it’ll be an incredible opportunity for everyone.  The designs we choose will be displayed in our metaverse studio and every time someone selects the design to be tattooed on their avatar, the creator of the design will earn a % of the purchase, and this is just the beginning.
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
