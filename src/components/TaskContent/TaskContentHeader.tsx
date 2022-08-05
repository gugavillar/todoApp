import styles from './TaskContentHeader.module.css'

interface TaskContentHeaderProps {
  concludedTask: number
  createdTask: number
}

export const TaskContentHeader = ({
  concludedTask,
  createdTask,
}: TaskContentHeaderProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.created}>
        <strong>Tarefas criadas</strong>
        <span>{createdTask}</span>
      </div>
      <div className={styles.concluded}>
        <strong>Concluídas</strong>
        <span>{`${concludedTask} de ${createdTask}`}</span>
      </div>
    </div>
  )
}
