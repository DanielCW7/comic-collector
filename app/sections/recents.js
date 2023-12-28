import Comic from "../components/comic"


{/* fetches recent additions */}

const Recents = () => {
    return (
        <section className="flex justify-center">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl text-primary font-black"> Recent Additions </h2>
                <p className="text-black">We got 'em all, folks</p>
                <button className="btn btn-wide btn-primary btn-outline mt-5"> My Stuff </button>
            </div>
            <div className="flex flex-col justify-center gap-5">
                <Comic />
                <Comic />
                <Comic />                
            </div>

        </section>
    )
}

export default Recents