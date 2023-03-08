import { ChangeEvent, useState } from 'react'
import style from './index.module.scss'
export default function Input(props: {
  value?: string
  label?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const { label, value, onChange } = props

  const [isFocus, setIsFocus] = useState(false)
  // const [value, setValue] = useState('')
  return (
    <div className={style.input}>
      <label
        className={
          isFocus
            ? style.inputFocusLabel
            : '' + value
            ? style.inputHasValueLabel
            : ''
        }
      >
        {label}
      </label>
      <div className={style.inputDiv}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          onFocus={() => {
            setIsFocus(true)
          }}
          onBlur={() => {
            setIsFocus(false)
          }}
        />
        <fieldset className={isFocus ? style.inputFocusFieldset : ''}>
          <legend className={isFocus || value ? style.inputFocusLegend : ''}>
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  )
}
