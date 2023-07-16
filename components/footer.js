import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-gray-900 p-2 flex flex-row justify-center gap-10">
            
            <span><Link href="/"> Home </Link></span>
            <span><Link href="/search"> Search </Link></span>
            <span><Link href="/collections"> Collections </Link></span>

        </footer>
    )
}

export default Footer