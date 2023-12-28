import Layout from "./layout";
import image from "./images/camera.jpg";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Recents from "./sections/recents";

function HomePage() {


    return (
        <Layout>
            <Nav/>
            <Hero />
            <h1>
                h1 index
            </h1>

            <Recents />

        </Layout>
    )
  }
  
  export default HomePage;
  