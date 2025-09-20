export default function Support(){
return (
<section id="soutenir" className="bg-neutral-50">
<div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl md:text-3xl font-bold">Soutenir le CJC</h2>
<p className="mt-3 text-neutral-700">Entreprises, mécènes, particuliers : vos dons et partenariats soutiennent la formation des jeunes et la diffusion de projets culturels. L’association vise la reconnaissance d’intérêt général pour permettre l’émission de reçus fiscaux aux donateurs éligibles.</p>
<div className="mt-5 flex flex-wrap gap-3">
<a href="mailto:contact@cjc-choeur.fr?subject=Don%20ou%20m%C3%A9c%C3%A9nat" className="px-5 py-3 rounded-2xl bg-red-700 text-white font-semibold shadow hover:shadow-md hover:bg-red-800 transition">Faire un don / mécéner</a>
<a href="#kit" className="px-5 py-3 rounded-2xl border font-semibold hover:bg-neutral-100 transition">Demander le kit sponsoring</a>
</div>
</div>
<div className="p-6 rounded-3xl border shadow-sm bg-white">
<h3 className="font-semibold">Newsletter</h3>
<p className="mt-2 text-sm text-neutral-700">Recevez nos dates et actualités (≈ 1 email / mois).</p>
<form onSubmit={(e)=>{e.preventDefault(); alert('Merci !');}} className="mt-4 flex gap-2">
<input type="email" required placeholder="votre@email.fr" className="flex-1 px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-600" aria-label="Adresse email" />
<button className="px-4 py-2 rounded-xl bg-red-700 text-white font-semibold hover:bg-red-800">S'inscrire</button>
</form>
</div>
</div>
</section>
);
}
