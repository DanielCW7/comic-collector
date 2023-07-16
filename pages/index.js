import Header from "../components/header";
import sitting from "../images/sitting.jpg";
import camera from "../images/camera.jpg"
import Nav from "@/components/nav";
import NewArrivals from "@/components/newArrivals";
import Image from "next/image";
import Spinner from "@/components/loader";
import { SP } from "next/dist/shared/lib/utils";

function HomePage() {

    const background = {backgroundImage: `url(${sitting.src})`};

    return (
        <>
            <Nav />
            <header className="min-h-3/4 bg-cover bg-start bg-no-repeat md:min-h-1/2" style={background}>
                <Header heading="Comic Book Finder" subheading="Browse some of your favorite comic books!" link="/search" cta="search" />
            </header>
            <NewArrivals />
            <main className="flex flex-col justify-center md:gap-10 md:flex-row md:px-5 md:py-20 bg-gray-100">
                <div className="relative min-h-1/2 lg:min-h-none md:w-1/2 lg:max-w-2xl">
                    <Image src={camera} alt="camera on comics" layout="fill" objectFit="cover" className="w-full h-full"/>
                </div>
                <div className="text-black p-5 flex flex-col justify-center md:w-1/2 lg:max-w-2xl">
                    <h2 className="text-black font-bold text-2xl py-5"> Explore </h2>
                    <p> 
                        this is a blurb that is designed to be as long as a few sentences describing the app and
                        what inspired it. blah blah blah 
                        this is a blurb that is designed to be as long as a few sentences describing the app and
                        what inspired it. blah blah blah
                        this is a blurb that is designed to be as long as a few sentences describing the app and
                        what inspired it. blah blah blah
                    </p>                    
                </div>
            </main>

        </>
    )
  }
  
  export default HomePage;
  