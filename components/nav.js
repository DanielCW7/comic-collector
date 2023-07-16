import Link from "next/link";




const Nav = () => {

    // need to toggle a class on/off of the nav to creating a smooth transition, need hooks
    function toggle() {
        console.log("clicked on nav")
    }

    return (
        <nav className="sticky bg-black w-screen top-0">
            <p id="nav" onClick={toggle}> click </p>
            <ul className="bg-gray-500">
                <li className="p-2 border bg-red-400"><Link href="/"> Home </Link></li>
                <li className="p-2 border"><Link href="/search"> Search </Link></li>
            </ul>
        </nav>
    )
}


export default Nav    

