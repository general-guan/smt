import Menu from "@/components/Menu"
import { useRouter } from "next/router"
import { useState } from "react"

const items = [
  {
    label: "首页",
    key: "/",
  },
  {
    label: "Chatgpt",
    key: "/chatgpt",
  },
  {
    label: "Music",
    key: "/music",
  },
]

export default function Sider() {
  const router = useRouter()
  const [selectedKey, setSelectedKey] = useState(router.pathname)

  return (
    <Menu
      items={items}
      selectedKey={selectedKey}
      onClick={({ key }) => {
        setSelectedKey(key)
        router.push(key)
      }}
    />
  )
}
