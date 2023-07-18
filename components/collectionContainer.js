import DetailedComic from "./detailedComic"

const CollectionContainer = () => {
    return (
        <>
            <div className="flex flex-col p-5">
                <form className="flex flex-col w-full m-auto md:w-auto md:flex-row gap-5">
                    <div className="flex flex-col">
                        <label className="text-black" for="search"> Search </label>
                        <input className="text-black p-1 rounded-md" type="search" id="search" name="search" />                        
                    </div>


                    <div className="flex flex-col justify-center">
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" id="owned" name="owned" value="owned" />  
                            <label className="text-black"> Owned </label>
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" id="wishlisted" name="wishlisted" value="wishlisted" /> 
                            <label className="text-black"> Wishlisted </label>   
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" id="favorited" name="favorited" value="favorited" />                            
                            <label className="text-black"> Favorited </label>                       
                        </div>                                   
                    </div>

                    <div className="flex flex-col gap-5 justify-center m-2">
                        <button className="text-black bg-green-500 p-1 rounded-md w-20 text-center" type="submit"> submit </button>                       
                    </div>
                        <input className="cursor-pointer underline text-black p-1" type="reset" />                        

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