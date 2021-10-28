export const Navbar = ({ onSetIsClicked }) => {
    const  clickHandler = () => {
        onSetIsClicked(1);
    }

    return (
        <div className="navbar-container">
            <header onClick={function(){window.location.reload()}} style={{cursor:"pointer"}}>Advertyzement</header>
            <button onClick={clickHandler}>Get Users</button>
        </div>
    )
}
