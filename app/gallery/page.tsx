'use client';

import { useState } from 'react';
import { getAllMedia } from '@/src/lib/getLocalMedia';
import type { FilterCategory } from '@/src/types';
import FilterTabs from '@/src/components/FilterTabs';
import GalleryGrid from '@/src/components/GalleryGrid';
import styles from '@/src/styles/gallery.module.css';

const allMedia = getAllMedia();

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterCategory>('all');

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Hero */}
        <section className={styles.galleryHero}>
          <h1>Our Creations</h1>
          <p>Every order is made with love — here&apos;s a peek inside our kitchen.</p>
        </section>

        {/* Filter tabs */}
        <FilterTabs active={filter} onChange={setFilter} />

        {/* Masonry grid + lightbox */}
        <GalleryGrid items={allMedia} activeFilter={filter} />
      </div>
    </div>
  );
}
