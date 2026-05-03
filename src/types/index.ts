export type MediaItem = {
  src: string;
  type: 'image' | 'video';
  alt: string;
  category: 'cakes' | 'cookies' | 'chocolates' | 'all';
};

export type LightboxState = {
  isOpen: boolean;
  index: number;
  items: MediaItem[];
};

export type FilterCategory = 'all' | 'cakes' | 'cookies' | 'chocolates';
