import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css'

interface ButtonProps {
  isDisabled: boolean
}

export const Button = ({ isDisabled }: ButtonProps) => (
  <button disabled={isDisabled}>
    Criar{' '}
    <PlusCircle
      size={16}
      className={styles.icon}
    />
  </button>
)
