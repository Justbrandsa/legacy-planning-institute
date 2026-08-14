import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

const items = [
  { title: 'Why Financial Planning Matters', desc: 'A connected plan can help you see trade-offs, priorities and gaps more clearly.', image: '/images/service-financial-planning.png' },
  { title: 'How to Prepare for Retirement', desc: 'Five practical areas to understand before deciding what retirement readiness means for you.', image: '/images/service-retirement-planning.png' },
  { title: 'Understanding Life Cover', desc: 'A plain-language introduction to protection needs, responsibilities and review points.', image: '/images/service-life-cover-protection.png' },
  { title: 'Planning Your Legacy', desc: 'Questions that can help frame your wishes, beneficiaries and family responsibilities.', image: '/images/service-estate-legacy-planning.png' },
  { title: 'Questions to Ask Before Investing', desc: 'Understand your goal, timeframe, liquidity needs and tolerance for risk before you begin.', image: '/images/service-investments.png' },
];

export const metadata = { title: 'Financial Planning Resources' };

export default function Resources() {
  return (
    <main>
      <div className="page-hero page-hero-split">
        <div className="page-hero-copy"><div className="eyebrow">Resources</div><h1>Better questions lead to better conversations.</h1><p>General educational resources to help you prepare for a financial planning discussion.</p></div>
        <div className="page-hero-media"><Image src="/images/brand-2.png" alt="Financial planning research and working notes" fill priority sizes="(max-width:900px) 100vw, 48vw" /></div>
      </div>
      <section><div className="wrap"><div className="section-head"><div><div className="eyebrow">Planning library</div><h2>Ideas worth exploring.</h2></div><p>Practical starting points designed to help you arrive at your next conversation better informed.</p></div><div className="resources">{items.map((item, index) => <article className="resource" key={item.title}><div className="resource-image"><Image src={item.image} alt="" fill sizes="(max-width:700px) 100vw, (max-width:1000px) 50vw, 33vw" /></div><div className="resource-copy"><span>GUIDE 0{index + 1}</span><BookOpen size={22} /><h3>{item.title}</h3><p>{item.desc}</p><strong>Coming soon</strong></div></article>)}</div></div></section>
      <section className="resource-cta"><div className="wrap split"><div><div className="eyebrow">Prefer a conversation?</div><h2>Bring your questions. We’ll help create context.</h2></div><div><p>General information is useful, but your goals and circumstances are personal. Start a conversation when you are ready to explore what applies to you.</p><Link className="btn" href="/contact">Book a consultation <ArrowRight size={17} /></Link></div></div></section>
    </main>
  );
}
