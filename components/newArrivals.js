import spiderman from "../images/comicbook_1.webp";
import lantern from "../images/comicbook_2.webp";
import ComicBook from "./comicBook";

const NewArrivals = () => {

    // make sure images that come in are in the correct dimensions
    // test array
    const example = [
        {
            comic: "amazing spiderman",
            img: spiderman
        },
        {
            comic: "amazing spiderman",
            img: spiderman
        },
        {
            comic: "lantern",
            img: lantern
        }
    ]

    // returns a comic for every one present in the array
    const check = (list) => {

        const result = list.map(item => {
            console.log(item.img.src)
            return <ComicBook img={item.img.src} comic={item.comic} key={item.comic} />
        })
        return result
    }

    return (
        <section className="min-h-1/4 p-5 flex flex-col justify-center text-center bg-white">
            <h2 className="text-black font-bold text-2xl"> New Arrivals </h2>
            <div className="flex flex-row justify-center py-10">
                {/* populates comics based on array content received */}
                { check(example) ?? <p className="text-black"> nothing here </p> }
            </div>
        </section>
    )
}

export default NewArrivals