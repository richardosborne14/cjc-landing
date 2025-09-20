export default function Mission(){
const cards = [
{
title: 'Formation exigeante',
text: 'Technique vocale, lecture, style et présence scénique. Un parcours progressif, bienveillant et ambitieux.',
},
{
title: 'Ouvert à tous',
text: "Aucun prérequis musical : la motivation prime. Les auditions orientent vers le groupe adapté.",
},
{
title: 'Rayonnement culturel',
text: 'Concerts, projets pédagogiques et actions culturelles au bénéfice du public et des écoles.',
},
];
return (
<section id="mission" className="max-w-6xl mx-auto px-4 py-14">
<div className="grid md:grid-cols-3 gap-8">
{cards.map((c, i) => (
<div key={i} className="p-6 rounded-3xl border shadow-sm hover:shadow-md transition">
<h3 className="font-semibold text-lg">{c.title}</h3>
<p className="mt-2 text-neutral-700">{c.text}</p>
</div>
))}
</div>
</section>
);
}