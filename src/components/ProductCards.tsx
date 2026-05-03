'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { getProductCardImages } from '@/src/lib/getLocalMedia';

import { CakeIcon, CookieIcon, GiftBoxIcon } from '@/src/components/icons/Icons';

const CARDS = [
  {
    key: 'cakes',
    title: 'Custom Cakes',
    desc: 'Bespoke cakes crafted for every occasion — birthdays, weddings, and beyond.',
    Icon: CakeIcon,
  },
  {
    key: 'cookies',
    title: 'Cookies & Treats',
    desc: 'Beautifully decorated cookies and sweet treats, perfect for gifting.',
    Icon: CookieIcon,
  },
  {
    key: 'chocolates',
    title: 'Chocolate Gift Boxes',
    desc: 'Handcrafted chocolate gifts and premium hampers for every celebration.',
    Icon: GiftBoxIcon,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  }),
};

const images = getProductCardImages();

export default function ProductCards() {
  return (
    <section style={{
      padding: 'clamp(4rem, 8vw, 6rem) 0',
      background: 'linear-gradient(180deg, var(--cedar-dark) 0%, rgba(59,31,14,0.95) 100%)',
    }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Make
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Every bite tells a story
        </motion.p>

        {/* Horizontal scroll container on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
          className="product-grid"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.key}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              style={{
                background: 'rgba(245,229,177,0.06)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(245,229,177,0.18)',
                borderRadius: '24px',
                overflow: 'hidden',
                scrollSnapAlign: 'center',
                minWidth: '260px',
                cursor: 'default',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image
                  src={images[card.key as keyof typeof images]}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 80vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="card-img"
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '0.5rem', display: 'flex' }}>
                  <card.Icon size={32} color="#DEC882" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--silk)',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(245,229,177,0.65)', lineHeight: 1.65 }}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(3, 280px) !important;
            padding-bottom: 1rem;
          }
        }
        .card-img:hover { transform: scale(1.06); }
      `}</style>
    </section>
  );
}
