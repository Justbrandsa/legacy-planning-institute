import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { const service = services.find((item) => item.slug === params.slug); return { title: service?.title || 'Service', description: service?.desc }; }

export default function Service({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <div className="page-hero page-hero-split service-hero">
        <div className="page-hero-copy"><div className="eyebrow">Financial planning service</div><h1>{service.title}</h1><p>{service.desc} We begin by understanding your circumstances before discussing options or recommendations.</p><Link className="btn" href="/contact">{service.cta} <ArrowRight size={17} /></Link></div>
        <div className="page-hero-media"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width:900px) 100vw, 48vw" /></div>
      </div>

      <section><div className="wrap content-grid service-content"><div><div className="eyebrow">What this helps with</div><h2>Turn important questions into an informed plan.</h2><p>Financial decisions can feel disconnected or difficult to prioritise. A structured planning conversation brings your current position, responsibilities and long-term goals into one view.</p></div><div className="list-panel"><h3>Areas we can explore</h3><ul className="checklist">{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>

      <section className="dark-section compact-cta"><div className="wrap section-head"><div><div className="eyebrow">Who it is for</div><h2>Planning built around real life.</h2></div><div><p>This service may be relevant to individuals, couples, families, professionals or business owners who want greater clarity around this part of their financial life.</p><Link className="btn" href="/qualification-questionnaire">Check if you qualify <ArrowRight size={17} /></Link></div></div></section>

      <section><div className="wrap"><div className="section-head"><div><div className="eyebrow">Related planning areas</div><h2>See the wider picture.</h2></div></div><div className="related related-visual">{others.map((item) => <Link key={item.slug} href={`/${item.slug}`}><div className="related-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width:700px) 100vw, 33vw" /></div><div className="related-copy"><item.icon size={22} /><h3>{item.title}</h3><p>{item.desc}</p><strong>Explore <ArrowRight size={14} /></strong></div></Link>)}</div><p className="fine-print">Information on this page is general in nature and does not constitute personal financial advice. A financial needs analysis and consultation are required before any recommendation is made. Investment outcomes are not guaranteed and involve risk.</p></div></section>
    </main>
  );
}
