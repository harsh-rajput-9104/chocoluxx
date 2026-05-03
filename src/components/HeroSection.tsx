'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from '@/src/components/icons/Icons';
import styles from '@/src/styles/hero.module.css';

const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section className={styles.hero} ref={ref}>
      {/* Three.js Background (desktop only — handled inside component) */}
      <div className={styles.canvas}>
        <ThreeBackground />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: Text */}
        <div className={styles.textBlock}>
          <motion.span
            className={styles.scriptLabel}
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
          >
            Baked with Love, Served with Joy
          </motion.span>

          <motion.h1
            className={styles.headline}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
          >
            House of Bakes
          </motion.h1>

          <motion.p
            className={styles.subHeadline}
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            BY Shah
          </motion.p>

          <motion.p
            className={styles.tagline}
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
          >
            Custom cakes crafted for your most precious moments.
            From birthdays to weddings — every order is made with love.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
          >
            <Link href="/gallery" className="btn btn-primary">
              View Gallery
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20place%20a%20cake%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <WhatsAppIcon size={20} color="currentColor" />
              <span>Order on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Logo / Image */}
        <motion.div
          className={styles.imageBlock}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className={styles.imageRing}>
            <Image
              src="/images/logo.jpg"
              alt="House of Bakes — BY Shah"
              fill
              sizes="(max-width: 768px) 220px, 40vw"
              className={styles.heroImg}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.ringDeco} />
          <div className={styles.ringDeco} />
        </motion.div>
      </div>
    </section>
  );
}
