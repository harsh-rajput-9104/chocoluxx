'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@/src/components/icons/Icons';
import type { MediaItem } from '@/src/types';
import styles from '@/src/styles/gallery.module.css';

interface LightboxProps {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.lightboxOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Viewing ${item.alt}`}
      >
        {/* Inner — stop propagation so clicking media doesn't close */}
        <motion.div
          className={styles.lightboxInner}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <AnimatePresence mode="wait">
            {item.type === 'video' ? (
              <motion.video
                key={item.src}
                src={item.src}
                className={styles.lightboxMedia}
                autoPlay
                muted
                loop
                playsInline
                controls
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.div
                key={item.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ position: 'relative', maxWidth: '85vw', maxHeight: '85vh' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className={styles.lightboxMedia}
                  style={{ width: 'auto', height: 'auto', maxWidth: '85vw', maxHeight: '85vh' }}
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Close */}
        <button className={styles.lightboxClose} onClick={onClose}>
          <span className="sr-only">Close lightbox</span>
          <CloseIcon size={28} color="#F5E5B1" />
        </button>

        {/* Prev */}
        <button
          className={`${styles.lightboxArrow} ${styles.lightboxPrev}`}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <span className="sr-only">Previous image</span>
          <ChevronLeftIcon size={32} color="#F5E5B1" />
        </button>

        {/* Next */}
        <button
          className={`${styles.lightboxArrow} ${styles.lightboxNext}`}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <span className="sr-only">Next image</span>
          <ChevronRightIcon size={32} color="#F5E5B1" />
        </button>

        {/* Caption */}
        <div className={styles.lightboxLabel}>
          {item.alt} &nbsp;·&nbsp; {index + 1} / {items.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
