import { ChangeEvent, FormEvent, useState } from 'react'

import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import { TodoList } from '../../@types/data'
import styles from './InputTask.module.css'

interface InputTaskProps {
  onAddTodoTask: (todo: TodoList) => void
}

export const InputTask = ({ onAddTodoTask }: InputTaskProps) => {
  const [todoText, setTodoText] = useState('')

  const handleSetTodoText = (event: ChangeEvent<HTMLInputElement>) =>
    setTodoText(event?.target?.value)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const newTodo = {
      id: uuidv4(),
      isChecked: false,
      content: todoText
    }
    setTodoText('')
    onAddTodoTask(newTodo)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={todoText}
        onChange={handleSetTodoText}
      />
      <button disabled={!todoText?.length}>
        Criar <PlusCircle size={16} className={styles.icon} />
      </button>
    </form>
  )
}
