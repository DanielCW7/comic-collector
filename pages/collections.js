import Header from "@/components/header";
import picking from "../images/picking.jpg";
import Nav from "@/components/nav";
import CollectionContainer from "../components/collectionContainer";

function Collection() {

  const background = {backgroundImage: `url(${picking.src})`};

    return (
      <>
        <Nav/>
        <header className="min-h-3/4 bg-cover bg-start bg-no-repeat md:min-h-1/2" style={background}>
          <Header heading="Collections" subheading="Let's see what you've got so far!" link="/" cta="" />
        </header>

        {/* compile detailed comic list into a page element with a form for filtering collection based on attributes */}
        <CollectionContainer />

      </>
    )
  }
  
  export default Collection;
  