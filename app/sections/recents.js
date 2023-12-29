import Comic from "../components/comic"


{/* fetches recent additions */}

const Recents = () => {
    return (
        <section className="flex flex-col p-10 justify-center max-site-width m-auto">
            <div className="flex flex-col justify-center my-12">
                <h2 className="text-4xl text-center text-primary font-black"> Recent Additions </h2>
                <p className="text-black text-center">Gotta catch 'em all</p>
                <button className="btn btn-wide btn-primary btn-outline mt-10 mx-auto"> My Stuff </button>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-3 ">
                {/* carousel instead? */}
                <Comic />
                <Comic />
                <Comic />
            </div>
            

        </section>
    )
}

export default Recents