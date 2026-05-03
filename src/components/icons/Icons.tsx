import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export function PhoneIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24
      c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 
      3 4.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.2z"/>
    </svg>
  );
}

export function WhatsAppIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 
      0 001.64 6.08L0 24l6.08-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 
      12-12a11.93 11.93 0 00-3.48-8.52z"/>
      <path d="M17.47 14.83c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.72.9-.88 
      1.08-.16.18-.33.2-.61.07a7.74 7.74 0 01-2.28-1.41 8.54 8.54 0 01-1.58-1.96c-.16-.28 
      0-.43.13-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47H8.5c-.18 
      0-.46.07-.7.34-.25.27-.94.92-.94 2.24s.96 2.6 1.1 2.78c.13.18 1.9 2.9 4.6 
      4.06.64.28 1.14.44 1.53.56.64.2 1.23.17 1.69.1.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.1-.25-.17-.53-.3z"/>
    </svg>
  );
}

export function InstagramIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill={color}/>
    </svg>
  );
}

export function CakeIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <path d="M12 2c0 0 0 3-3 3H7a1 1 0 000 2h10a1 1 0 000-2h-2c-3 
      0-3-3-3-3z"/>
      <path d="M3 9h18v3c0 0-1.5 1.5-3 0s-3 0-3 0-1.5 1.5-3 0-3 0-3 
      0-1.5 1.5-3 0V9z"/>
      <rect x="3" y="12" width="18" height="9" rx="1"/>
      <line x1="7" y1="12" x2="7" y2="21"/>
      <line x1="12" y1="12" x2="12" y2="21"/>
      <line x1="17" y1="12" x2="17" y2="21"/>
    </svg>
  );
}

export function CookieIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9"/>
      <circle cx="9" cy="10" r="1" fill={color}/>
      <circle cx="14" cy="14" r="1" fill={color}/>
      <circle cx="10" cy="15" r="0.5" fill={color}/>
      <circle cx="15" cy="9" r="0.5" fill={color}/>
      <path d="M8 13c.5-.5 1-1 2-1"/>
      <path d="M13 8c.5.5.5 1.5 0 2"/>
    </svg>
  );
}

export function GiftBoxIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <rect x="3" y="10" width="18" height="11" rx="1"/>
      <path d="M3 10h18V7a1 1 0 00-1-1H4a1 1 0 00-1 1v3z"/>
      <line x1="12" y1="6" x2="12" y2="21"/>
      <path d="M12 6S9 3 7 4s-1 4 5 2z"/>
      <path d="M12 6s3-3 5-2 1 4-5 2z"/>
    </svg>
  );
}

export function StarIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 
      12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>
  );
}

export function ArrowRightIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>
  );
}

export function CloseIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

export function ChevronLeftIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <polyline points="15,18 9,12 15,6"/>
    </svg>
  );
}

export function ChevronRightIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  );
}

export function MenuIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

export function HeartIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 
      5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 
      5.5 0 000-7.78z"/>
    </svg>
  );
}

export function SparkleIcon({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className} aria-hidden="true" {...props}>
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75z"/>
      <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z"/>
    </svg>
  );
}
