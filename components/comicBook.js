import Image from "next/image"

const ComicBook = (props) => {
    console.log(props)
    return (
        <div className="text-center">
            <Image src={props.img} alt={props.comic} height={100} width={100} className="m-auto" />
            <h3 className="text-black whitespace-normal w-32"> {props.comic} </h3>
        </div>
    )
}

export default ComicBook