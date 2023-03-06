import "./Home.scss"
import video from "../../Assets/video1.mp4"

const Home = () => {
    return (
        <section className="home-container">
            <div className="overlay">
                <video src={video} muted loop autoPlay></video>
                <div className="text-container">
                    <span className="packages">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Home;