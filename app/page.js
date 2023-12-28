import Layout from "./layout"
import image from "./images/camera.jpg"
function HomePage() {


    return (
        <Layout>
            <h1>
                h1 index
            </h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image.src} className=""/></figure>
                <div className="card-body">
                    <h2 className="card-title"> camera </h2>
                    <p> test p </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"> Buy now </button>
                    </div>
                </div>
            </div>

        </Layout>
    )
  }
  
  export default HomePage;
  