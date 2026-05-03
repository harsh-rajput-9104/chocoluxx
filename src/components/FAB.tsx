'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, WhatsAppIcon } from '@/src/components/icons/Icons';
import styles from '@/src/styles/fab.module.css';

export default function FAB() {
  return (
    <motion.div
      className={styles.fabGroup}
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 1 }}
    >
      <motion.a
        href="tel:+919999999999"
        className={`${styles.fab} ${styles.fabCall}`}
        data-tip="Call Now"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="sr-only">Call us</span>
        <PhoneIcon size={24} color="#F5E5B1" />
      </motion.a>

      <motion.a
        href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20place%20a%20cake%20order."
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.fab} ${styles.fabWa}`}
        data-tip="WhatsApp"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="sr-only">WhatsApp us</span>
        <WhatsAppIcon size={24} color="#F5E5B1" />
      </motion.a>
    </motion.div>
  );
}
