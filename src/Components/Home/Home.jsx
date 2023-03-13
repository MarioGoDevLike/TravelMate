import "./Home.scss"
import video from "../../Assets/video1.mp4"
import { useState } from "react"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {SiTripadvisor} from "react-icons/si"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"



const Home = () => {
    const [data, setData] = useState(1000)

    return (
        <section className="home-container">
            <video className="myVideo" src={video} muted loop autoPlay></video>
            <div className="overlay">
                <div className="text-container">
                    <span className="packages">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>
            </div>
            <div className="main-cardDiv">
                <div className="cardDiv-container">
                    <div className="destination">  
                        <label className="labelEdit" htmlFor="city">Search for your destination:</label>
                        <div className="inputs">
                            <input className="card-input" type="text" placeholder="Enter your destination"></input>
                        </div>
                    </div>
                    <div className="date">  
                        <label className="labelEdit" htmlFor="date">Select the date</label>
                        <div className="inputs">
                            <input className="card-input" type="date"></input>
                        </div>
                    </div>
                    <div className="price">  
                        <div className="total-label">
                            <label className="labelEdit price-edit" htmlFor="price"> Price: {data}$</label>
                        </div>
                        <div className="inputs">
                            <input className="card-input" type="range"  min="1000" max="5000" step="10" value={data} onChange={(e) => setData(e.target.value)}/>
                            <h1></h1>
                        </div>
                    </div>
                </div>
                <div className="searchOptions">
                        <span>FILTERS</span>
                        <HiFilter className="icon"/>
                </div>
            </div>
            <div className="homeFooterIcons">
                <div className="rightIcons">
                    <FiFacebook className="icon"/>
                    <AiOutlineInstagram className="icon"/>
                    <SiTripadvisor className="icon"/>
                </div>
                <div className="leftIcons">
                    <BsListTask className="icon"/>
                    <TbApps className="icon"/>
                </div>

            </div>

        </section>
    )
}

export default Home;