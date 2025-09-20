export default function Join(){
return (
<section id="rejoindre" className="bg-neutral-50">
<div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl md:text-3xl font-bold">Rejoindre le chœur</h2>
<p className="mt-3 text-neutral-700">Scolarisation à partir du CE1 (dérogation possible dès le CP). Deux ensembles : chœur principal et groupe « maîtrise » pour les projets intensifs. Les répétitions ont lieu en Dordogne, avec quelques week‑ends TUTTI.</p>
<ul className="mt-4 space-y-2 text-neutral-800 list-disc pl-5">
<li>Répétitions hebdomadaires (2h) et TUTTI (max. 8/an)</li>
<li>Concert annuel + projets extérieurs selon niveau et disponibilité</li>
<li>Tenue de concert requise</li>
<li>Assiduité et ponctualité indispensables</li>
</ul>
<div className="mt-5 flex flex-wrap gap-3">
<a href="mailto:contact@cjc-choeur.fr?subject=Audition%20CJ2C" className="px-5 py-3 rounded-2xl bg-red-700 text-white font-semibold shadow hover:shadow-md hover:bg-red-800 transition">Demander une audition</a>
<a href="#reglement" className="px-5 py-3 rounded-2xl border font-semibold hover:bg-neutral-100 transition">Consulter le règlement</a>
</div>
<p className="mt-3 text-sm text-neutral-600">Besoin d’un aménagement financier ? Écrivez-nous en toute confidentialité.</p>
</div>
<div className="p-6 rounded-3xl border shadow-sm bg-white">
<h3 className="font-semibold">Informations clés</h3>
<dl className="mt-3 grid grid-cols-3 gap-3 text-sm">
<dt className="font-medium text-neutral-600 col-span-1">Siège</dt>
<dd className="col-span-2">285 chemin de Bord de Côte, 24290 Saint‑Léon‑sur‑Vézère</dd>
<dt className="font-medium text-neutral-600 col-span-1">Présidente</dt>
<dd className="col-span-2">Pamela Prandoni</dd>
<dt className="font-medium text-neutral-600 col-span-1">Trésorier</dt>
<dd className="col-span-2">Richard Osborne</dd>
<dt className="font-medium text-neutral-600 col-span-1">Direction artistique</dt>
<dd className="col-span-2">Ayano Devin & Guillaume Devin</dd>
</dl>
</div>
</div>
</section>
);
}