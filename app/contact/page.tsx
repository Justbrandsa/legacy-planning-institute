import Image from 'next/image';
import { ContactForm } from '@/components/Forms';

export const metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <main>
      <div className="page-hero page-hero-split">
        <div className="page-hero-copy"><div className="eyebrow">Start a conversation</div><h1>What would you like clarity on?</h1><p>Tell us a little about what you need. Our team will review your enquiry and contact you.</p></div>
        <div className="page-hero-media"><Image src="/images/brand-4.png" alt="A warm welcome at Legacy Planning Institute" fill priority sizes="(max-width:900px) 100vw, 48vw" /></div>
      </div>
      <section><div className="wrap content-grid contact-grid"><div><div className="contact-image"><Image src="/images/brand-3.png" alt="The Legacy Planning Institute reception" fill sizes="(max-width:900px) 100vw, 42vw" /></div><div className="contact-copy"><div className="eyebrow">Contact Legacy Planning Institute</div><h2>A considered next step starts here.</h2><p>Complete the secure enquiry form or use WhatsApp to start the conversation.</p><h3>What happens next?</h3><ul className="checklist"><li>Your enquiry is reviewed</li><li>We contact you using your preferred details</li><li>We discuss your needs and an appropriate next step</li></ul></div></div><div className="form-card"><ContactForm /></div></div></section>
    </main>
  );
}
