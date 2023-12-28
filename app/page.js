import Layout from "./layout";
import image from "./images/camera.jpg";
import Nav from "./sections/nav";
import Hero from "./components/hero";
import Recents from "./sections/recents";
import Footer from "./sections/footer";

function HomePage() {


    return (
        <Layout>
            <Nav />
            <Hero />
            <h1>
                h1 index
            </h1>

            <Recents />
            <Footer />
        </Layout>
    )
  }
  
  export default HomePage;
  