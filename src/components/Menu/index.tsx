import style from './index.module.scss'

export default function Menu(props: {
  items: { label: string; key: string; icon: string }[]
  onClick: ({ key }: { key: string }) => void
  selectedKey?: string
  className?: string
}) {
  const { items, onClick, selectedKey, className } = props

  return (
    <ul className={`${style.menu} ${className}`} style={style}>
      {items.map(m => (
        <li
          className={`${style.menuItem} ${
            selectedKey === m.key ? style.menuItemSelected : ''
          }`}
          key={m.key}
          onClick={() => onClick({ key: m.key })}
        >
          <span
            className={style.menuItemIcon}
            style={{
              WebkitMask: `url(https://minimals.cc/assets/icons/navbar/ic_${m.icon}.svg)`,
            }}
          ></span>
          <span>{m.label}</span>
        </li>
      ))}
    </ul>
  )
}
