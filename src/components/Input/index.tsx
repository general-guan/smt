import style from './index.module.scss'
export default function Input(props: {}) {
  const {} = props
  return (
    <div className={style.input}>
      <label>Size</label>
      <input type='text' />
      <fieldset>
        <legend>
          <span>Size</span>
        </legend>
      </fieldset>
    </div>
  )
}
