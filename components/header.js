

const Header = (props) => {
    
    return (
        <header className="flex flex-col justify-center min-h-3/4 px-5 bg-fixed bg-cover bg-bottom" style={props.background}>
            <h1 className="text-2xl font-bold"> Comic book <br/> collector tool </h1>
            <p> browse your favorite comic books and explore! </p>
        </header>
    )
}

export default Header