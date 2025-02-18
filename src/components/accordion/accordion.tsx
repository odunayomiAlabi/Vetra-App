import React, { useState } from 'react'
import styles from './accordion.module.css'
import { motion } from 'framer-motion'

function FAQAccordion({ question, answer, isTalent }: { question: string, answer: string | React.ReactNode, isTalent?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <div className={styles.accordion}>
      <motion.h3
        className={isOpen ? `${styles.question} ${styles.open}` : styles.question}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ color: isTalent ? '#3E54D3' : '#00B881' }}
        whileTap={{ scale: 0.995 }}
        transition={{ duration: 0.2 }}
        aria-expanded={isOpen}
        aria-controls="answer"
        tabIndex={0}
        id="question"
        animate={isOpen ? { color: isTalent ? '#3E54D3' : '#00B881', fontWeight: 600, marginBottom: '8px' } : { color: '#4B5563', fontWeight: 400, marginBottom: '0' }}
      >
        {question}
        <span className={!isOpen ? styles.arrowDown : isTalent ? styles.arrowUp : `${styles.arrowUp} ${styles.arrowUp2}`} />
      </motion.h3>
      {typeof answer === 'string' ? <motion.p
        className={styles.answer}
        animate={isOpen ? 'open' : 'closed'} variants={{ open: { height: 'auto', opacity: 1 }, closed: { height: 0, opacity: 0 } }} transition={{ duration: 0.3 }}
      >
        {answer}
      </motion.p> :
        <motion.div
          className={styles.answer}
          animate={isOpen ? 'open' : 'closed'} variants={{ open: { height: 'auto', opacity: 1 }, closed: { height: 0, opacity: 0 } }} transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.div>}

    </div>
  )
}

export default FAQAccordion