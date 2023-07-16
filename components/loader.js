import Image from "next/image";
import spinner from "../images/spinner.png";

const Spinner = () => {
    return (
        <div className="bg-white border p-5">
            <Image alt="loading..." height={50} width={50} src={spinner} className="m-auto animate-spin"/>
        </div>
    )
}

export default Spinner