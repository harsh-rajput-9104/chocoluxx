'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon } from '@/src/components/icons/Icons';
import { getFeaturedImages } from '@/src/lib/getLocalMedia';

const items = getFeaturedImages();

function ParallaxImage({
  src,
  alt,
  label,
  speed,
  isMobile,
}: {
  src: string;
  alt: string;
  label: string;
  speed: number;
  isMobile: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -30, speed * 30]);

  return (
    <motion.div
      ref={ref}
      style={isMobile ? {} : { y }}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="feat-item"
      data-label={label}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, 33vw"
        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
      />
      <div className="feat-label">{label}</div>
    </motion.div>
  );
}

export default function FeaturedGrid() {
  // Simple mobile check (no SSR mismatch — only affects parallax)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section style={{ padding: 'clamp(4rem,8vw,6rem) 0', background: 'var(--cedar-dark)' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Recent Creations
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A glimpse inside our kitchen
        </motion.p>

        <div className="feat-grid">
          {items.map((item, i) => (
            <div
              key={item.src}
              className={`feat-wrapper ${item.span ? 'feat-span' : ''}`}
            >
              <ParallaxImage
                src={item.src}
                alt={item.label}
                label={item.label}
                speed={0.5 + (i % 3) * 0.25}
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/gallery" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span>See Full Gallery</span>
            <ArrowRightIcon size={18} color="currentColor" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 260px;
          gap: 1rem;
        }

        .feat-wrapper { position: relative; overflow: hidden; border-radius: 16px; }
        .feat-span { grid-row: span 2; }

        .feat-item {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 16px;
        }

        .feat-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.75rem 1rem;
          background: linear-gradient(to top, rgba(59,31,14,0.85) 0%, transparent 100%);
          font-family: var(--font-body);
          font-size: 0.82rem;
          color: var(--silk);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 0 0 16px 16px;
        }

        .feat-item:hover .feat-label { opacity: 1; }
        .feat-item:hover img { transform: scale(1.05); }

        @media (max-width: 768px) {
          .feat-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 180px;
          }
          .feat-span { grid-row: span 1; }
        }
      `}</style>
    </section>
  );
}
