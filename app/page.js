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
            <Recents />
            <Footer />
        </Layout>
    )
  }
  
  export default HomePage;
  