import styles from './TaskContentHeader.module.css'

interface TaskContentHeaderProps {
  concludedTask: number
  createdTask: number
}

interface CreatedTaskProps {
  createdTask: number
}

const CreatedTask = ({ createdTask }: CreatedTaskProps) => (
  <div className={styles.created}>
    <strong>Tarefas criadas</strong>
    <span>{createdTask}</span>
  </div>
)

const ConcludedTask = ({
  concludedTask,
  createdTask
}: TaskContentHeaderProps) => (
  <div className={styles.concluded}>
    <strong>Concluídas</strong>
    <span>{`${concludedTask} de ${createdTask}`}</span>
  </div>
)

export const TaskContentHeader = ({
  concludedTask,
  createdTask
}: TaskContentHeaderProps) => {
  return (
    <div className={styles.content}>
      <CreatedTask createdTask={createdTask} />
      <ConcludedTask
        concludedTask={concludedTask}
        createdTask={createdTask}
      />
    </div>
  )
}
