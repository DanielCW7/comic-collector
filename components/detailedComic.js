import Image from "next/image";
import Link from "next/link";
import spiderman from "../images/comicbook_1.webp";

const DetailedComic = (props) => {
    
    return (
        <div className="flex flex-row p-5 max-w-md">
            <Image src={spiderman} alt="ex" height={130} width={130} className="m-auto" />
            
            <div className="flex flex-col p-2">
                <h3 className="text-black text-left font-bold text-xl text-left w-32"> the amazing spiderman </h3>
                <p className="text-black text-left"> this is a brief synposis of the comic book that is featured right next to this block of text...</p>
                {/* attributes per comic are present here (owned, favorited, wishlisted) */}
                {/* these will be the only searchable attributes aside from a normal search */}
                
                <div>
                    <svg className="w-5" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 109.37"><path class="cls-1" d="M61.44,19.23A41.21,41.21,0,0,1,71.25,7.29C90.05-8,117.34,1.91,122.25,26A28.34,28.34,0,0,1,122,39.11c-2.28,8.31-9.89,16.72-18,24.42-3.89,3.69-7.64,7.13-11.32,10.56-11.45,10.73-22.72,22-31.18,35.28C53,96.07,41.71,84.82,30.25,74.09c-3.67-3.43-7.42-6.87-11.31-10.56-8.15-7.7-15.75-16.11-18-24.42A28.34,28.34,0,0,1,.63,26c4.91-24.11,32.2-34,51-18.73a41.24,41.24,0,0,1,9.82,11.94Z"/></svg>
                </div>
               </div>
        </div>
    )
}

export default DetailedComic