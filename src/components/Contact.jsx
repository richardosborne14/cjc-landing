import Logo from './Logo.jsx';


export default function Contact(){
return (
<section id="contact" className="bg-neutral-950 text-white">
<div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
<p className="mt-3 text-neutral-300">285 chemin de Bord de Côte, 24290 Saint‑Léon‑sur‑Vézère – France</p>
<p className="mt-1 text-neutral-300">Email : <a className="underline" href="mailto:contact@coeurdesjeunescoeurs.com">contact@coeurdesjeunescoeurs.com</a></p>
<p className="mt-1 text-neutral-300">Programmation : <a className="underline" href="mailto:contact@coeurdesjeunescoeurs.com">contact@coeurdesjeunescoeurs.com</a></p>
</div>
<div>
<div className="flex items-center gap-3">
<Logo className="w-9 h-9" />
<div>
<div className="font-semibold">Chœur des Jeunes Cœurs</div>
<div className="text-sm text-neutral-300">CJC</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Association loi 1901. Gestion désintéressée. Activités ouvertes au public et aux établissements partenaires.</p>
</div>
</div>
<div className="border-t border-neutral-800">
<div className="max-w-6xl mx-auto px-4 py-4 text-xs text-neutral-400 flex items-center justify-between">
<span>© {new Date().getFullYear()} CJC – Tous droits réservés</span>
<a href="#" className="hover:text-neutral-200">Mentions légales</a>
</div>
</div>
</section>
);
}