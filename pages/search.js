import Header from "@/components/header";
import cluster from "../images/cluster.jpg";
import Nav from "@/components/nav";
function Search() {

  const background = {backgroundImage: `url(${cluster.src})`};

    return (
      <>
        <Nav/>
        <header className="min-h-3/4 bg-cover bg-start bg-no-repeat md:min-h-1/2" style={background}>
          <Header heading="Search" subheading="find the comics you've been missing out on." link="/" cta="home" />
        </header>
      </>
    )
  }
  
  export default Search;
  