import { memo } from 'react'

import styles from './Checkbox.module.css'

interface CheckboxProps {
  label: string
  isChecked: boolean
  taskId: string
  onCheckedOrUncheckedTask: (id: string) => void
}

export const Checkbox = memo(({ label, isChecked, taskId, onCheckedOrUncheckedTask }: CheckboxProps) => {
  const handleCheckedOrUncheckedTask = () => onCheckedOrUncheckedTask(taskId)

  return (
    <label className={styles.container}>
      <span className={isChecked ? styles.checked : ''}>{label}</span>
      <input type='checkbox' onChange={handleCheckedOrUncheckedTask} checked={isChecked} />
      <span className={styles.checkmark}></span>
    </label>
  )
})
