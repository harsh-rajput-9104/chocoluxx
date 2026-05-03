'use client';

import { motion } from 'framer-motion';
import { CakeIcon, InstagramIcon, SparkleIcon } from '@/src/components/icons/Icons';

export default function InstagramCTA() {
  return (
    <section style={{
      background: 'var(--silk-light)',
      padding: 'clamp(4rem, 8vw, 6rem) 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative floating cake */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '12%',
          left: '8%',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CakeIcon size={48} color="currentColor" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          opacity: 0.14,
          pointerEvents: 'none',
        }}
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        <SparkleIcon size={40} color="currentColor" />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            marginBottom: '1rem',
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <InstagramIcon size={64} color="#6B4226" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--cedar-dark)',
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            marginBottom: '0.5rem',
          }}
        >
          Follow Our Sweet Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-subhead)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'var(--cedar)',
            marginBottom: '2rem',
          }}
        >
          @house_of_bakes__
        </motion.p>

        <motion.a
          href="https://www.instagram.com/house_of_bakes__"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -3 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.85rem 2.2rem',
            borderRadius: '9999px',
            background: 'var(--cedar)',
            color: 'var(--silk)',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 6px 28px rgba(107,66,38,0.35)',
            transition: 'box-shadow 0.25s ease',
          }}
        >
          <InstagramIcon size={20} color="#F5E5B1" />
          <span>Follow on Instagram</span>
        </motion.a>
      </div>
    </section>
  );
}
