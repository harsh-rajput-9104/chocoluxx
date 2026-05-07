'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon, PhoneIcon, WhatsAppIcon, MenuIcon, CloseIcon } from '@/src/components/icons/Icons';
import styles from '@/src/styles/navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label="House of Bakes home">
            <span className={styles.logoName}>House of Bakes</span>
            <span className={styles.logoSub}>BY Shah</span>
          </Link>

          {/* Desktop links */}
          <div className={styles.links}>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            {menuOpen ? <CloseIcon size={24} color="#F5E5B1" /> : <MenuIcon size={24} color="#F5E5B1" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  href={l.href}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className={styles.mobileSocial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://www.instagram.com/house_of_bakes__"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialIcon}
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon size={24} color="currentColor" />
              </a>
              <a
                href="tel:+919974358384"
                className={styles.mobileSocialIcon}
              >
                <span className="sr-only">Call us</span>
                <PhoneIcon size={24} color="currentColor" />
              </a>
              <a
                href="https://wa.me/919974358384?text=Hi!%20I'd%20like%20to%20place%20a%20cake%20order."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialIcon}
              >
                <span className="sr-only">WhatsApp</span>
                <WhatsAppIcon size={24} color="currentColor" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
