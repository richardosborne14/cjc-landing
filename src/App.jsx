import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Mission from './components/Mission.jsx';
import Join from './components/Join.jsx';
import Events from './components/Events.jsx';
import Support from './components/Support.jsx';
import Book from './components/Book.jsx';
import Contact from './components/Contact.jsx';


export default function App() {
return (
<div className="min-h-screen bg-white text-neutral-900">
<Header />
<Hero />
<Mission />
<Join />
<Events />
<Support />
<Book />
<Contact />
</div>
);
}