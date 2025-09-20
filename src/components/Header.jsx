import Logo from './Logo.jsx';


export default function Header(){
return (
<header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<Logo className="w-8 h-8" />
<span className="font-bold tracking-tight">Chœur des Jeunes Cœurs</span>
<span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full ml-2">CJC</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a href="#mission" className="hover:text-red-700">Notre mission</a>
<a href="#rejoindre" className="hover:text-red-700">Rejoindre</a>
<a href="#evenements" className="hover:text-red-700">Événements</a>
<a href="#soutenir" className="hover:text-red-700">Soutenir</a>
<a href="#contact" className="hover:text-red-700">Contact</a>
</nav>
</div>
</header>
);
}
