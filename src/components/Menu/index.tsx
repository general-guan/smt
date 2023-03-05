import style from "./index.module.scss"

export default function Menu(props: {
  items: { label: string; key: string }[]
  onClick: ({ key }: { key: string }) => void
  selectedKey?: string
}) {
  const { items, onClick, selectedKey } = props

  return (
    <ul className={style.menu}>
      {items.map(m => (
        <li
          className={`${style["menu-item"]} ${
            selectedKey === m.key ? style["menu-item-selected"] : ""
          }`}
          key={m.key}
          onClick={() => onClick({ key: m.key })}
        >
          {m.label}
        </li>
      ))}
    </ul>
  )
}
