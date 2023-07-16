import DetailedComic from "./detailedComic"

const CollectionContainer = () => {
    return (
        <>
            <div className="flex flex-col border-2 border-red-700">
                <form>
                    <input className="border-2 border-gray-900" type="text" />
                    <input type="checkbox" />
                    {/* need options for filtering search results */}
                </form>
            </div>
            <div className="flex flex-auto flex-wrap justify-center">
                <DetailedComic />
                <DetailedComic />
                <DetailedComic />
                <DetailedComic />
                <DetailedComic />
                <DetailedComic />
                <DetailedComic />
                <DetailedComic />            
            </div>
        </>
    )
}

export default CollectionContainer