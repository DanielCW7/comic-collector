import Link from "next/link";
import Nav from "@/components/nav";

const notFound404 = () => {
    return (
        <>
            <Nav />
            <div className="min-h-screen flex flex-col justify-center">
                <h1 className="font-thin text-red-600 text-6xl text-center"> 404 </h1>
                <p className="text-center py-10"> Hmm, something went wrong and we couldn't <br/> find the page you asked for. <br/>
                </p>
            </div>
        </>
    )
}

export default notFound404