import { memo } from 'react'

import { Logo } from '@components/Logo'

import styles from './Header.module.css'

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
})

Header.displayName = 'Header'
