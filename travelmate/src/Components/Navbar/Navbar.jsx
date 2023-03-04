import "./Navbar.scss"
import { useState } from "react"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"


const Navbar = () => {
    const [active, setActive] = useState('navLinks')

    //Creating Function to toggle the NavBar
    //show
    const showNavBar = () => {
        setActive('navLinks activeNavbar')
    }
    //hide
    const hideNavBar = () => {
        setActive('navLinks')
    }

    return (
        <div className="mainNav-container">
            <div className="navbar-container">
                <div className="logo-div">
                    <div className="logo-div2">
                        <a href="#" className="logo">
                        </a>
                        <h1><MdOutlineTravelExplore className="icon travel-icon"/>TravelMate</h1>
                    </div>
                    
                <div onClick={showNavBar}className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
                </div>
                <div className={active}>
                    <ul className="navLinks-container">
                        <li>
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li>
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li>
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li>
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li>
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li>
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li>
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="btn-bookNow">
                        <a href="#">BOOK NOW</a>
                    </button>
                    </ul>
                    
                    <div onClick={hideNavBar}className="closeNavbar">
                    <AiFillCloseCircle className="icon icon-menu"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;