import Header from "../components/header";
import sitting from "../images/sitting.jpg";
import NewArrivals from "@/components/newArrivals";

function HomePage() {

    const background = {backgroundImage: `url(${sitting.src})`}

    return (
        <div className="min-h-3/4 bg-contain bg-start bg-no-repeat md:min-h-1/2" style={background} >
            <Header heading="Comic Book Finder" subheading="Browse some of your favorite comic books!"/>
            <NewArrivals />
        </div>
    )
  }
  
  export default HomePage;
  