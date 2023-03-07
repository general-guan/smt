import Menu from '@/components/Menu'
import { useRouter } from 'next/router'
import { useState } from 'react'
import style from './index.module.scss'

const items = [
  {
    label: 'Home',
    key: '/',
    icon: 'dashboard',
  },
  {
    label: 'Chatgpt',
    key: '/chatgpt',
    icon: 'analytics',
  },
  {
    label: 'Music',
    key: '/music',
    icon: 'file',
  },
]

export default function Sider() {
  const router = useRouter()
  const [selectedKey, setSelectedKey] = useState(router.pathname)

  return (
    <div className={style.sider}>
      <Menu
        items={items}
        selectedKey={selectedKey}
        onClick={({ key }) => {
          setSelectedKey(key)
          router.push(key)
        }}
      />
    </div>
  )
}
