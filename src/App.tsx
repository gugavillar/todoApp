import { Fragment, useState } from 'react'

import { Header } from '@components/Header'
import { InputTask } from '@components/InputTask'
import { TaskContent } from '@components/TaskContent'
import { TodoList } from '@typesData'

export const App = () => {
  const [todoList, setTodoList] = useState<Array<TodoList>>([])

  const handleAddTodoTask = (todo: TodoList) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo])
  }

  const handleCheckedOrUncheckedTask = (id: string) => {
    const todoListWithCheckedItens = todoList.map((todo) =>
      id === todo.id ? { ...todo, isChecked: !todo?.isChecked } : todo
    )
    setTodoList(todoListWithCheckedItens)
  }

  const handleDeleteTask = (id: string) => {
    const todoListWithoutDeleteTask = todoList.filter((todo) => id !== todo.id)
    setTodoList(todoListWithoutDeleteTask)
  }

  return (
    <Fragment>
      <Header />
      <InputTask onAddTodoTask={handleAddTodoTask} />
      <TaskContent
        todoList={todoList}
        onCheckedOrUncheckedTask={handleCheckedOrUncheckedTask}
        onDeleteTask={handleDeleteTask}
      />
    </Fragment>
  )
}
