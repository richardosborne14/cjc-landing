export default function Book(){
return (
<section id="book" className="max-w-6xl mx-auto px-4 py-14">
<div className="grid md:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl md:text-3xl font-bold">Programmer le chœur</h2>
<p className="mt-3 text-neutral-700">Formats : concerts, messes chantées, participatifs, interventions scolaires, créations, enregistrements. Répertoire sacré et profane, musique ancienne à contemporaine.</p>
<ul className="mt-4 space-y-2 text-neutral-800 list-disc pl-5">
<li>Effectif modulable selon le lieu</li>
<li>Partenariats avec instrumentistes professionnels</li>
<li>Fiche technique sur demande</li>
</ul>
<a href="mailto:booking@cjc-choeur.fr?subject=Programmation%20CJ2C" className="mt-5 inline-block px-5 py-3 rounded-2xl bg-neutral-900 text-white font-semibold hover:bg-black">Demander un devis</a>
</div>
<div className="p-6 rounded-3xl border shadow-sm bg-neutral-50">
<h3 className="font-semibold">Exemples de programmes</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-800">
<li>• "Voix d'enfants, cœurs du monde" – polyphonies & musiques du monde</li>
<li>• "Lumières baroques" – chœurs et solos baroques avec continuo</li>
<li>• "Noëls d’hier et d’aujourd’hui" – programme de fin d’année</li>
</ul>
</div>
</div>
</section>
);
}