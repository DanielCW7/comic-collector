import Link from "next/link"

const Header = (props) => {

    // for each page, they need their own unique heading, subheading, and link to another page
    return (
        <div className="flex flex-col justify-center min-h-3/4 px-5 bg-black bg-opacity-70 md:text-center md:min-h-1/2">
            <h1 className="text-3xl font-bold text-gray-200"> {props.heading} </h1>
            <p className="text-gray-200"> {props?.subheading ?? ""} </p>
            <Link href={props?.link ?? null} className="mt-5 underline"> {props?.cta ?? null} </Link>
        </div>
    )
}

export default Header