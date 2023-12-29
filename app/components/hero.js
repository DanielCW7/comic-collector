import Image from "next/image"
import standing from "../images/standing.jpg"

const Hero = (props) => {

    // passed through props
    const background = standing.src

    return (
        <div className="hero min-h-3/4" style={{backgroundImage: `url(${background})`}}>
            <header className="hero-content hero-overlay min-w-full bg-opacity-80 bg-black">
                <div className="text-center">
                    <h1 className="text-5xl font-bold"> Comic Collector </h1>
                    <p className="mt-5"> Keep track of your comics with this handy tool </p>   
                    <button className="btn btn-secondary btn-wide mt-10"> My Stuff </button>                 
                </div>

            </header>
        </div>
    )
}

export default Hero