import Image from 'next/image';
import { QualificationForm } from '@/components/Forms';

export const metadata = { title: 'Check If You Qualify' };

export default function Qualification() {
  return (
    <main>
      <div className="page-hero page-hero-split">
        <div className="page-hero-copy"><div className="eyebrow">Short qualification</div><h1>Find out which planning solution may suit you.</h1><p>Complete this short questionnaire and our team will review your information before contacting you for the next step.</p></div>
        <div className="page-hero-media"><Image src="/images/brand-8.png" alt="A client completing the Legacy Planning Institute enquiry process" fill priority sizes="(max-width:900px) 100vw, 48vw" /></div>
      </div>
      <section><div className="wrap content-grid questionnaire-grid"><div className="questionnaire-intro"><div className="eyebrow">Your starting point</div><h2>A few details. A clearer starting point.</h2><p>This questionnaire helps us understand the broad area you would like to discuss. It is not a financial needs analysis and no recommendation is made from these answers alone.</p><ul className="checklist"><li>Takes approximately three minutes</li><li>Your details are handled securely</li><li>No obligation to proceed</li></ul><div className="mini-image"><Image src="/images/service-financial-planning.png" alt="A structured financial planning review" fill sizes="(max-width:900px) 100vw, 40vw" /></div></div><div className="form-card"><QualificationForm /></div></div></section>
    </main>
  );
}
