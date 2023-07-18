import DetailedComic from "./detailedComic"
import Form from "./form"
const CollectionContainer = () => {
    return (
        <>
            <Form />
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