import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

export const metadata = { title: 'Financial Planning Services' };

export default function Services() {
  return (
    <main>
      <div className="page-hero page-hero-split">
        <div className="page-hero-copy"><div className="eyebrow">Services</div><h1>Your financial life is connected. Your planning should be too.</h1><p>Explore professional guidance across protection, retirement, investments, estate planning and business needs.</p><Link className="btn" href="/contact">Start a conversation <ArrowRight size={17} /></Link></div>
        <div className="page-hero-media"><Image src="/images/service-financial-planning.png" alt="A financial planner reviewing a complete financial roadmap" fill priority sizes="(max-width:900px) 100vw, 48vw" /></div>
      </div>
      <section className="dark-section services-page-section">
        <div className="wrap">
          <div className="section-head"><div><div className="eyebrow">Planning areas</div><h2>Explore the full picture.</h2></div><p>Each conversation starts with your circumstances, priorities and questions—not with a product.</p></div>
          <div className="service-grid visual-grid">{services.map((service, index) => <article className="service-card visual-service-card" key={service.slug}><Link className="service-card-image" href={`/${service.slug}`} aria-label={`Explore ${service.title}`}><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width:700px) 100vw, (max-width:1000px) 50vw, 33vw" /></Link><div className="service-card-body"><div className="service-meta"><span className="num">0{index + 1}</span><service.icon size={25} /></div><h3>{service.title}</h3><p>{service.desc}</p><Link className="text-link" href={`/${service.slug}`}>Explore service <ArrowRight size={15} /></Link></div></article>)}</div>
        </div>
      </section>
    </main>
  );
}
