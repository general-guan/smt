import { ReactNode } from "react"
import style from "./index.module.scss"

export default function Content(props: { children: ReactNode }) {
  const { children } = props

  return <div className={style.content}>{children}</div>
}
