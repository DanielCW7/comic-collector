import Comic from "../components/comic"


{/* fetches recent additions */}

const Recents = () => {
    return (
        <section className="flex">
            <h2 className="text-4xl text-black font-black"> Recent Additions </h2>
            <div className="flex flex-col justify-center gap-5">
                <Comic />
                <Comic />
                <Comic />                
            </div>

        </section>
    )
}

export default Recents