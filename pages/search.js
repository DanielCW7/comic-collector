import Header from "@/components/header";
import cluster from "../images/cluster.jpg";

function Search() {

  const background = {backgroundImage: `url(${cluster.src})`};


    return (
      <div className="">
        <header className="min-h-3/4 bg-cover bg-start bg-no-repeat md:min-h-1/2" style={background}>
          <Header heading="search" subheading="find the comics you've been missing out on." link="/" cta="home" />
        </header>
      </div>
    )
  }
  
  export default Search;
  