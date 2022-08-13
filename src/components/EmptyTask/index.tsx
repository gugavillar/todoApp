import { Clipboard } from '../Icons/Clipboard'
import styles from './EmptyTask.module.css'

export const EmptyTask = () => {
  return (
    <div className={styles.container}>
      <Clipboard />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
