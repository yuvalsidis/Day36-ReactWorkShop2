const { useState } = React

import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

export function RootCmp() {
    const [page, setPage] = useState('home')
    console.log(page)

    return <section className="app main-layout">
        <AppHeader setPage={setPage} />
        <main className="container main-layout">
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'bookIndex' && <BookIndex />}
        </main>
    </section>
}