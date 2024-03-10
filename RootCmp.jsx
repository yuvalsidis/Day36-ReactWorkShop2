import {Home} from './pages/Home.jsx'
import {About} from './pages/About.jsx'
import {BookIndex} from './pages/BookIndex.jsx'


export function App() {
    return <section className="app">
        <header className="app-header">
            <h1>My App</h1>
        </header>
        <main className="container">
            <Home/>
            <About/>
            <BookIndex/>
        </main>
    </section>
}