import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = { title: 'About Hendrik van Niekerk' };

export default function About() {
  return (
    <main>
      <div className="page-hero page-hero-split">
        <div className="page-hero-copy"><div className="eyebrow">About Hendrik</div><h1>Professional guidance. Personal perspective.</h1><p>Meet the Executive Financial Planner behind Legacy Planning Institute.</p></div>
        <div className="page-hero-media"><Image src="/images/brand-7.png" alt="Hendrik van Niekerk in his office" fill priority sizes="(max-width:900px) 100vw, 48vw" /></div>
      </div>
      <section><div className="wrap split"><div><div className="eyebrow">A structured approach</div><h2>Helping people plan with confidence.</h2><p>Hendrik van Niekerk helps individuals, families, professionals and business owners better understand their financial needs and options.</p><p>His background in commerce, law and compliance management informs a methodical approach: listen carefully, assess the full picture, communicate clearly and only then discuss suitable next steps.</p><p>At Legacy Planning Institute, financial planning is treated as an ongoing relationship—not a once-off transaction. The aim is to help clients make informed decisions as life, responsibilities and priorities change.</p><Link href="/contact" className="btn dark">Book a conversation <ArrowRight size={17} /></Link></div><div className="portrait portrait-soft"><Image src="/images/brand-8.png" alt="Hendrik guiding a client through the enquiry process" fill sizes="(max-width:900px) 100vw, 50vw" /></div></div></section>
      <section className="dark-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">The LPI standard</div><h2>Clear. Considered. Client-focused.</h2></div><p>A professional relationship shaped by understanding, structure and honest communication.</p></div><div className="process"><div className="step"><span>01</span><h3>Clarity before action</h3><p>Complex financial subjects are discussed in clear, practical language.</p></div><div className="step"><span>02</span><h3>Planning before products</h3><p>Your goals, needs and circumstances create the context for any discussion.</p></div><div className="step"><span>03</span><h3>Relationships over time</h3><p>Your plan can evolve as your life and financial priorities change.</p></div></div></div></section>
      <div className="wide-story-image"><Image src="/images/brand-5.png" alt="A Legacy Planning Institute planning session" fill sizes="100vw" /></div>
    </main>
  );
}
