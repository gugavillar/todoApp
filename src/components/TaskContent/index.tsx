import { useMemo } from 'react'

import { EmptyTask } from '@components/EmptyTask'
import { Task } from '@components/Task'
import { TodoList } from '@typesData'

import styles from './TaskContent.module.css'
import { TaskContentHeader } from './TaskContentHeader'

interface TaskContentProps {
  todoList: Array<TodoList>
  onCheckedOrUncheckedTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export const TaskContent = ({
  todoList,
  onCheckedOrUncheckedTask,
  onDeleteTask
}: TaskContentProps) => {
  const createdTaskNumber = todoList?.length

  const concludedTaskNumber = useMemo(
    () =>
      todoList.reduce((acc, task) => {
        if (task.isChecked) {
          acc += 1
        }
        return acc
      }, 0),
    [todoList]
  )

  const hasTask = todoList?.length

  return (
    <main className={styles.container}>
      <TaskContentHeader
        concludedTask={concludedTaskNumber}
        createdTask={createdTaskNumber}
      />
      {!hasTask ? (
        <EmptyTask />
      ) : (
        todoList
          ?.sort((todo) => (todo.isChecked === false ? -1 : 1))
          ?.map((todo) => (
            <Task
              key={todo.id}
              todo={todo}
              onCheckedOrUncheckedTask={onCheckedOrUncheckedTask}
              onDeleteTask={onDeleteTask}
            />
          ))
      )}
    </main>
  )
}
