import type { MediaItem, FilterCategory } from '@/src/types';

// All images from public/images/ — statically defined (no fs access in browser)
const ALL_IMAGES: Array<{ src: string; category: FilterCategory; label: string }> = [
  { src: '/images/cake1.jpg',  category: 'cakes',      label: 'Custom Birthday Cake' },
  { src: '/images/cake2.jpg',  category: 'cakes',      label: 'Floral Cake Design' },
  { src: '/images/cake3.jpg',  category: 'cakes',      label: 'Tiered Wedding Cake' },
  { src: '/images/cake4.jpg',  category: 'cakes',      label: 'Chocolate Drip Cake' },
  { src: '/images/cake5.jpg',  category: 'cakes',      label: 'Fondant Art Cake' },
  { src: '/images/cake6.jpg',  category: 'cakes',      label: 'Anniversary Cake' },
  { src: '/images/cake7.jpg',  category: 'cakes',      label: 'Baby Shower Cake' },
  { src: '/images/cake8.jpg',  category: 'cakes',      label: 'Red Velvet Cake' },
  { src: '/images/cake9.jpg',  category: 'cakes',      label: 'Naked Rustic Cake' },
  { src: '/images/cake10.jpg', category: 'cakes',      label: 'Pinata Smash Cake' },
  { src: '/images/cake11.jpg', category: 'cakes',      label: 'Ombre Rosette Cake' },
  { src: '/images/p1.jpg',     category: 'cookies',    label: 'Royal Icing Cookies' },
  { src: '/images/p2.jpg',     category: 'cookies',    label: 'Decorated Sugar Cookies' },
  { src: '/images/p3.jpg',     category: 'cookies',    label: 'Cookie Gift Box' },
  { src: '/images/p4.jpg',     category: 'cookies',    label: 'Personalised Cookies' },
  { src: '/images/p6.jpg',     category: 'chocolates', label: 'Chocolate Gift Box' },
  { src: '/images/p7.jpg',     category: 'chocolates', label: 'Truffle Collection' },
  { src: '/images/p8.jpg',     category: 'chocolates', label: 'Dark Chocolate Bark' },
  { src: '/images/p9.jpg',     category: 'chocolates', label: 'Premium Gift Hamper' },
  { src: '/images/p10.jpg',    category: 'chocolates', label: 'Celebration Box' },
];

const ALL_VIDEOS: Array<{ src: string; category: FilterCategory; label: string }> = [
  { src: '/images/vid1.mp4',  category: 'cakes',      label: 'Cake Decorating' },
  { src: '/images/vid2.mp4',  category: 'cakes',      label: 'Fondant Work' },
  { src: '/images/vid3.mp4',  category: 'cakes',      label: 'Frosting Time-lapse' },
  { src: '/images/vid4.mp4',  category: 'cakes',      label: 'Custom Order' },
  { src: '/images/vid5.mp4',  category: 'cookies',    label: 'Cookie Decorating' },
  { src: '/images/vid6.mp4',  category: 'cookies',    label: 'Icing Art' },
  { src: '/images/vid7.mp4',  category: 'chocolates', label: 'Chocolate Tempering' },
  { src: '/images/vid8.mp4',  category: 'chocolates', label: 'Gift Box Assembly' },
  { src: '/images/vid9.mp4',  category: 'cakes',      label: 'Birthday Surprise' },
  { src: '/images/vid10.mp4', category: 'chocolates', label: 'Truffle Making' },
];

export function getAllMedia(): MediaItem[] {
  const images: MediaItem[] = ALL_IMAGES.map((img) => ({
    src: img.src,
    type: 'image',
    alt: img.label,
    category: img.category,
  }));

  const videos: MediaItem[] = ALL_VIDEOS.map((vid) => ({
    src: vid.src,
    type: 'video',
    alt: vid.label,
    category: vid.category,
  }));

  // Interleave videos amongst images for visual variety
  const result: MediaItem[] = [];
  let vi = 0;
  images.forEach((img, i) => {
    result.push(img);
    if ((i + 1) % 4 === 0 && vi < videos.length) {
      result.push(videos[vi++]);
    }
  });
  while (vi < videos.length) result.push(videos[vi++]);
  return result;
}

export function getMediaByCategory(category: FilterCategory): MediaItem[] {
  const all = getAllMedia();
  if (category === 'all') return all;
  return all.filter((m) => m.category === category);
}

export function getHeroImages(): string[] {
  return ['/images/cake1.jpg', '/images/cake2.jpg', '/images/cake5.jpg'];
}

export function getFeaturedImages(): Array<{ src: string; label: string; span?: boolean }> {
  return [
    { src: '/images/cake3.jpg',  label: 'Tiered Wedding Cake', span: true },
    { src: '/images/cake4.jpg',  label: 'Chocolate Drip Cake' },
    { src: '/images/cake7.jpg',  label: 'Baby Shower Cake' },
    { src: '/images/cake9.jpg',  label: 'Naked Rustic Cake', span: true },
    { src: '/images/cake10.jpg', label: 'Pinata Smash Cake' },
    { src: '/images/p9.jpg',     label: 'Premium Gift Hamper' },
    { src: '/images/cake11.jpg', label: 'Ombre Rosette Cake' },
    { src: '/images/p7.jpg',     label: 'Truffle Collection' },
  ];
}

export function getProductCardImages(): Record<string, string> {
  return {
    cakes: '/images/cake2.jpg',
    cookies: '/images/p2.jpg',
    chocolates: '/images/p9.jpg',
  };
}
