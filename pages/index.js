import Header from "../components/header";
import standing from "../images/standing.jpg"

function HomePage() {

    const img = {backgroundImage: `url(${standing})`}

    return (
        <div>
            <Header background={img} />
            <p> Welcome to the home page! </p>
        </div>
    )
  }
  
  export default HomePage;
  