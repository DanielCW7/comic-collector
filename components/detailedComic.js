import Image from "next/image";
import Link from "next/link";
import spiderman from "../images/comicbook_1.webp";

const DetailedComic = (props) => {
    
    return (
        <div className="flex flex-row p-5 max-w-md m-auto">
            <Image src={spiderman} alt="ex" height={130} width={130} className="m-auto" />
            
            <div className="flex flex-col p-2">
                <h3 className="text-black text-left font-bold text-xl text-left w-32"> the amazing spiderman </h3>
                <p className="text-black text-left"> this is a brief synposis of the comic book that is featured right next to this block of text...</p>
                {/* attributes per comic are present here (owned, favorited, wishlisted) */}
                {/* these will be the only searchable attributes aside from a normal search */}
            </div>
        </div>
    )
}

export default DetailedComic