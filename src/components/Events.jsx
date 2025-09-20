export default function Events(){
return (
<section id="evenements" className="max-w-6xl mx-auto px-4 py-14">
<div className="flex items-end justify-between gap-6">
<h2 className="text-2xl md:text-3xl font-bold">Événements & actualités</h2>
<a href="#book" className="text-sm font-semibold hover:text-red-700">Proposer une date →</a>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
{[1,2,3].map((i) => (
<div key={i} className="p-6 rounded-3xl border shadow-sm">
<p className="text-xs uppercase tracking-wider text-neutral-500">Bientôt</p>
<h3 className="mt-2 font-semibold">Concert à annoncer</h3>
<p className="mt-2 text-sm text-neutral-700">Programmes en préparation. Suivez‑nous pour les prochaines dates en Dordogne et au‑delà.</p>
</div>
))}
</div>
</section>
);
}