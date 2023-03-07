import { ReactNode } from 'react'
import style from './index.module.scss'
export default function Paper(props: { children: ReactNode }) {
  const { children } = props
  return <div className={style.paper}>{children}</div>
}
