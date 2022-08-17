import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css'

export const Button = () => (
  <button>
    Criar{' '}
    <PlusCircle
      size={16}
      className={styles.icon}
    />
  </button>
)
