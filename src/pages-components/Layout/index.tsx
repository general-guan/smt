import { ReactNode } from 'react'
import style from './index.module.scss'
import Sider from './Sider'
import Content from './Content'

export default function Layout(props: { children: ReactNode }) {
  const { children } = props

  return (
    <div className={style.layout}>
      <Sider />
      <Content>{children}</Content>
    </div>
  )
}
