'use client';

import { motion } from 'framer-motion';
import { SparkleIcon, PhoneIcon, WhatsAppIcon, InstagramIcon } from '@/src/components/icons/Icons';
import styles from '@/src/styles/contact.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <span className={styles.scriptTag}>Let&apos;s create something sweet</span>
        <h1>Get in Touch</h1>
        <p>Ready to order your dream cake? Let&apos;s talk!</p>
      </div>

      {/* Owner Card */}
      <motion.div
        className={styles.ownerCard}
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className={styles.ownerAvatar} aria-hidden="true"><SparkleIcon size={40} color="#DEC882" /></div>
        <div className={styles.ownerName}>Diya Shah</div>
        <div className={styles.ownerRole}>Founder &amp; Baker — House of Bakes</div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className={styles.ctaGroup}
        custom={1}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <a
          href="tel:+919999999999"
          className={`${styles.ctaBtn} ${styles.ctaBtnCall}`}
        >
          <span className="sr-only">Call Diya Shah</span>
          <PhoneIcon size={22} color="#F5E5B1" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20place%20a%20cake%20order."
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.ctaBtn} ${styles.ctaBtnWhatsApp}`}
        >
          <span className="sr-only">Message on WhatsApp</span>
          <WhatsAppIcon size={22} color="#F5E5B1" />
          <span>WhatsApp Us</span>
        </a>
      </motion.div>

      {/* Info Block */}
      <motion.div
        className={styles.infoBlock}
        custom={2}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p>
          <SparkleIcon size={20} color="currentColor" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          We take custom orders <strong>7 days a week</strong>.<br />
          Reach out for pricing, availability, and design consultations.<br />
          Minimum 3–5 days notice required for custom cakes.
        </p>
      </motion.div>

      {/* Instagram */}
      <motion.div
        className={styles.igBlock}
        custom={3}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <a
          href="https://www.instagram.com/house_of_bakes__"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.igLink}
        >
          <span className="sr-only">Follow us on Instagram</span>
          <InstagramIcon size={20} color="currentColor" />
          <span>Follow us @house_of_bakes__</span>
        </a>
      </motion.div>
    </div>
  );
}
