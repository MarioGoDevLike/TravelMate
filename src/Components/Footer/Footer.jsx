import "./Footer.scss"
import video from "../../Assets/video2.mp4"
import {FiChevronRight, FiSend} from "react-icons/fi"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiOutlineTwitter} from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"


const Footer = () => {
    return (
        <div className="all-container">
            <div className="footer-container">
                <div className="videoDiv">
                    <video src={video} loop muted autoPlay/>
                </div>

                <div className="div-container">
                    <div className="divContainer container2">
                        <div className="contactDiv">
                            <small>KEEP IN TOUCH</small>
                            <h2>Travel with us</h2>
                        </div>

                        <div className="inputDiv">
                            <input type="text" placeholder="Enter your email address"></input>
                            <button className="btn" type="submit">
                            SEND
                                <FiSend className="icon"/>
                                
                            </button> 
                        </div>
                    </div>

                    <div className="footerCard">
                        <div className="footerIntro">
                            <div className="divLogo">
                                <a href="#" className="myLogo">
                                <MdOutlineTravelExplore className="icon"/>
                                TravelMate
                                </a>
                            </div>
                            <div className="footerParagraph">
                            Welcome to my website that displays places for tourism, a comprehensive platform that helps travelers discover and explore new destinations around the world. Our website is designed to provide you with a wealth of information on popular tourist spots, off-the-beaten-path gems, and hidden cultural treasures.
                            </div>
                            <div className="footerSocials">
                                <AiOutlineTwitter className="icon"/>
                                <AiFillYoutube className="icon" />
                                <AiFillInstagram className="icon"/>
                                <FaTripadvisor className="icon"/>
                            </div>
                        </div>
                        <div className="footerLinks">
                            {/* //First Group */}
                            <div className="linkGroup">
                                <span className="groupTitle">
                                    OUR AGENCY
                                </span>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    Services
                                </li>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    Insurance
                                </li>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    Agency
                                </li>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    Tourism
                                </li>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    Payment
                                </li>
                                

                            </div>


                            {/* //Second Group */}
                            <div className="linkGroup">
                                <span className="groupTitle">
                                    PARTNERS
                                </span>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    Bookings
                                </li>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    Rentcars
                                </li>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    HostelWorld
                                </li>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    Trivago
                                </li>
                                <li className="footerList">
                                    <FiChevronRight className="icon"/>
                                    TripAdvisor
                                </li>
                                

                            </div>
                            

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;