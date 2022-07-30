import { memo } from 'react'
import { Trash } from 'phosphor-react'

import { TodoList } from '../../@types/data'
import { Checkbox } from '../Checkbox'

import styles from './Task.module.css'

interface TaskProps {
  todo: TodoList
  onCheckedOrUncheckedTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export const Task = memo(
  ({
    todo: { content, id, isChecked },
    onCheckedOrUncheckedTask,
    onDeleteTask,
  }: TaskProps) => {
    const handleDeleteTask = () => onDeleteTask(id)

    return (
      <section className={styles.taskBlock}>
        <div className={styles.taskContainer}>
          <Checkbox
            label={content}
            taskId={id}
            onCheckedOrUncheckedTask={onCheckedOrUncheckedTask}
            isChecked={isChecked}
          />
          <button onClick={handleDeleteTask}>
            <Trash size={16} />
          </button>
        </div>
      </section>
    )
  }
)
