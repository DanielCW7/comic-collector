import Header from "../components/header";
import standing from "../images/standing.jpg"

function HomePage() {

    const background = {backgroundImage: `url(${standing})`}
    return (
        <div>
            <Header background={background} />
            <p> Welcome to the home page! </p>
        </div>
    )
  }
  
  export default HomePage;
  