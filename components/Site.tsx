'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { nav } from '@/lib/data';
import { trackEvent } from '@/lib/tracking';

const wa = 'https://wa.me/?text=' + encodeURIComponent('Hello Legacy Planning Institute, I would like to enquire about financial planning services.');

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="wrap nav">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Legacy Planning Institute" width={246} height={89} priority />
        </Link>
        <button className="menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`links${open ? ' open' : ''}`} aria-label="Main navigation">
          {nav.map(([name, href]) => (
            <Link className={pathname === href ? 'active' : ''} key={href} href={href} onClick={() => setOpen(false)}>
              {name}
            </Link>
          ))}
          <Link className="btn" href="/contact" onClick={() => setOpen(false)}>Book a consultation</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/"><Image src="/images/logo.png" alt="Legacy Planning Institute" width={246} height={89} /></Link>
            <p className="footer-intro">Professional financial planning support designed to help you plan, protect and build your financial legacy.</p>
          </div>
          <div className="footer-nav"><strong>Explore</strong>{nav.map(([name, href]) => <Link key={href} href={href}>{name}</Link>)}<Link href="/qualification-questionnaire">Check if you qualify</Link></div>
          <div className="footer-nav"><strong>Legal</strong><Link href="/privacy-policy">Privacy & POPIA</Link><Link href="/financial-services-disclaimer">Financial services disclaimer</Link><Link href="/terms-of-use">Terms of use</Link></div>
        </div>
        <div className="disclaimer">
          <p>Legacy Planning Institute (Pty) Ltd is an authorised financial services provider. Information on this website is for general information purposes only and should not be regarded as personal financial advice. A financial needs analysis should be completed before any recommendation is made.</p>
          <p>© {new Date().getFullYear()} Legacy Planning Institute (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /><a className="whatsapp" href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp Legacy Planning Institute" onClick={() => trackEvent('whatsapp_click')}><MessageCircle /></a><div className="mobile-cta"><Link href="/qualification-questionnaire">Check if you qualify</Link><Link href="/contact">Book a consultation</Link></div></>;
}
