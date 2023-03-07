import { MouseEventHandler, ReactNode } from 'react'
import style from './index.module.scss'

export default function Button(props: {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  const { children, onClick } = props
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  )
}
