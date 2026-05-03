'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import ProductCards from '@/src/components/ProductCards';
import FeaturedGrid from '@/src/components/FeaturedGrid';
import InstagramCTA from '@/src/components/InstagramCTA';

// About Strip — inline since it's simple enough
function AboutStrip() {
  return (
    <section style={{
      background: 'var(--cedar)',
      padding: 'clamp(3rem, 7vw, 5rem) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container about-strip-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
      }}>
        {/* Left — decorative quote */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            color: 'rgba(245,229,177,0.12)',
            lineHeight: 0.8,
            marginBottom: '0.5rem',
            userSelect: 'none',
          }}>
            &quot;
          </div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            color: 'var(--silk)',
            lineHeight: 1.35,
          }}>
            Every cake tells a story.<br />Let us tell yours.
          </p>
        </motion.div>

        {/* Right — about text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--silk)',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            marginBottom: '0.75rem',
          }}>
            About Diya Shah
          </h3>
          <p style={{ color: 'rgba(245,229,177,0.82)', lineHeight: 1.8, marginBottom: '1rem' }}>
            House of Bakes is a passionate home bakery in Vadodara founded by Diya Shah.
            Every product is handcrafted, made-to-order, and baked with genuine love.
          </p>
          <p style={{ color: 'rgba(245,229,177,0.65)', lineHeight: 1.8 }}>
            From elaborate custom cakes to delicate cookies and premium chocolate gifts —
            we believe every celebration deserves something truly special.
          </p>
        </motion.div>
      </div>


    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutStrip />
      <ProductCards />
      <FeaturedGrid />
      <InstagramCTA />
    </>
  );
}
