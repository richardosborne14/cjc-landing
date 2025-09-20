import Logo from './Logo.jsx';


export default function Hero(){
return (
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,40,40,0.12),transparent_60%)]"/>
<div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
Donnons de la voix au <span className="text-red-700">cœur</span>.
</h1>
<p className="mt-4 text-lg text-neutral-700">
Le CJC est un chœur d'enfants basé en Dordogne, formant des jeunes de tous horizons à l'excellence vocale et à la scène. Concerts, ateliers, tournées, enregistrements : nos projets rayonnent en France et à l'international.
</p>
<div className="mt-6 flex flex-wrap gap-3">
<a href="#rejoindre" className="px-5 py-3 rounded-2xl bg-red-700 text-white font-semibold shadow hover:shadow-md hover:bg-red-800 transition">Auditionner</a>
<a href="#soutenir" className="px-5 py-3 rounded-2xl border border-red-700 text-red-700 font-semibold hover:bg-red-50 transition">Soutenir le chœur</a>
<a href="#book" className="px-5 py-3 rounded-2xl border font-semibold hover:bg-neutral-50 transition">Nous programmer</a>
</div>
<p className="mt-3 text-sm text-neutral-600">Difficultés financières ? Des aménagements sont possibles – demande confidentielle auprès du Bureau.</p>
</div>
<div className="md:pl-8">
<div className="aspect-square rounded-3xl border shadow-sm grid place-content-center bg-white">
<Logo className="w-40 h-40" />
</div>
</div>
</div>
</section>
);
}
