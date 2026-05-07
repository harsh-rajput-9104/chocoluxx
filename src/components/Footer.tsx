import Link from 'next/link';
import { PhoneIcon, WhatsAppIcon, InstagramIcon } from '@/src/components/icons/Icons';
import styles from '@/src/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div>
            <div className={styles.brandName}>House of Bakes</div>
            <div className={styles.brandSub}>BY Shah</div>
          </div>
          <div className={styles.brandTagline}>Baked with Love, Served with Joy</div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(245,229,177,0.5)', marginTop: '0.5rem' }}>
            Custom cakes, cookies & chocolate gifts —<br />
            crafted with love in Vadodara.
          </p>
        </div>

        {/* Nav */}
        <div className={styles.nav}>
          <div className={styles.navTitle}>Explore</div>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <div className={styles.contactTitle}>Connect</div>
          <a href="tel:+919974358384" className={styles.contactLink}>
            <span className="sr-only">Call us</span>
            <PhoneIcon size={20} color="#DEC882" />
            <span>+91 99743 58384</span>
          </a>
          <a
            href="https://wa.me/919974358384?text=Hi!%20I'd%20like%20to%20place%20a%20cake%20order."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <span className="sr-only">WhatsApp us</span>
            <WhatsAppIcon size={20} color="#DEC882" />
            <span>WhatsApp Us</span>
          </a>
          <a
            href="https://www.instagram.com/house_of_bakes__"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon size={20} color="#DEC882" />
            <span>@house_of_bakes__</span>
          </a>
        </div>
      </div>

      <div className={`container ${styles.bar}`}>
        © 2025 House of Bakes by Diya Shah. All rights reserved.
      </div>
    </footer>
  );
}
