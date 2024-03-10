export function AppHeader({setPage}) {

    function onSetPage(ev, str) {
        ev.preventDefault()
        setPage(str)

    }
    return <header className="app-header full" >
        <h1>My Book App </h1>

        <nav className="app-nav ">
            <a href="" onClick={(ev) => onSetPage(ev, 'home')}>Home</a>|
            <a href="" onClick={(ev) => onSetPage(ev, 'about')}>About</a>|
            <a href="" onClick={(ev) => onSetPage(ev, 'books')}>Books</a>
        </nav>
    </header>
}