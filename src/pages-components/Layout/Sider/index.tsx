import Menu from '@/components/Menu'
import { useRouter } from 'next/router'
import { useState } from 'react'
import style from './index.module.scss'

const items = [
  {
    label: 'Home',
    key: '/',
  },
  {
    label: 'Chatgpt',
    key: '/chatgpt',
  },
  {
    label: 'Music',
    key: '/music',
  },
]

export default function Sider() {
  const router = useRouter()
  const [selectedKey, setSelectedKey] = useState(router.pathname)

  return (
    <Menu
      className={style.sider}
      items={items}
      selectedKey={selectedKey}
      onClick={({ key }) => {
        setSelectedKey(key)
        router.push(key)
      }}
    />
  )
}
