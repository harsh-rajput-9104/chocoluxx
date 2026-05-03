'use client';

import type { FilterCategory } from '@/src/types';
import styles from '@/src/styles/gallery.module.css';

const TABS: { label: string; value: FilterCategory }[] = [
  { label: 'All',               value: 'all' },
  { label: 'Cakes',             value: 'cakes' },
  { label: 'Cookies & Treats',  value: 'cookies' },
  { label: 'Chocolates & Gifts',value: 'chocolates' },
];

interface FilterTabsProps {
  active: FilterCategory;
  onChange: (cat: FilterCategory) => void;
}

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className={styles.filterBar} role="tablist" aria-label="Filter gallery">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={active === tab.value}
          className={`${styles.filterBtn} ${active === tab.value ? styles.active : ''}`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
