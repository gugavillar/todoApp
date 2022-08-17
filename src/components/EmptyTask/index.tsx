import { memo } from 'react'

import { Clipboard } from '@components/Icons/Clipboard'

import styles from './EmptyTask.module.css'

const HeaderEmptyTask = () => (
  <strong>Você ainda não tem tarefas cadastradas</strong>
)

const TextEmptyTask = () => <p>Crie tarefas e organize seus itens a fazer</p>

export const EmptyTask = memo(() => {
  return (
    <div className={styles.container}>
      <Clipboard />
      <HeaderEmptyTask />
      <TextEmptyTask />
    </div>
  )
})

EmptyTask.displayName = 'EmptyTask'
