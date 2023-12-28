import Image from "next/image"
import Cover from "../images/cover.webp"

const Comic = () => {
    return (
        <div className="card card-side compact-card shadow-md">
            <figure className="w-32"><Image src={Cover} /></figure>
            <div className="card-body text-black m-auto">
                <h3 className="text-2xl font-black card-title"> Spider-man & Venom </h3> 
                <p> 2019 issue #3 </p>
            </div>
        </div>
    )
}

export default Comic