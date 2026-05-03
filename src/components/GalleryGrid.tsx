'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { MediaItem, FilterCategory } from '@/src/types';
import Lightbox from './Lightbox';
import styles from '@/src/styles/gallery.module.css';

interface GalleryGridProps {
  items: MediaItem[];
  activeFilter: FilterCategory;
}

export default function GalleryGrid({ items, activeFilter }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === 'all'
    ? items
    : items.filter((m) => m.category === activeFilter);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className={styles.grid}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.src}
              className={styles.gridItem}
              data-label={item.alt}
              onClick={() => open(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 8) * 0.06 }}
              aria-label={`Open ${item.alt}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') open(i); }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={450}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
