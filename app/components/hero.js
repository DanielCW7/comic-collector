import Image from "next/image"
import camera from "../images/camera.jpg"

const Hero = () => {

    return (
        <div className="hero h-screen bg-gradient-radial">
            <div className="hero-overlay bg-opacity-60">
            </div>

            <header className="hero-content">
                <div className="text-center">
                    <h1 className="text-5xl font-bold"> Comic Collector </h1>
                    <p className="mt-5"> Keep track of your comics with this handy tool </p>                    
                </div>

            </header>
        </div>
    )
}

export default Hero