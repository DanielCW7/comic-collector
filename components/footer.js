import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-gray-900 p-2 flex flex-row justify-center gap-10">
            
            <span><Link href="/"> home </Link></span>
            <span><Link href="/search"> search </Link></span>
            <span><Link href="/collection"> collection </Link></span>

        </footer>
    )
}

export default Footer