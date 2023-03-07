import http from '@/utils/http'
import { useState } from 'react'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import style from './index.module.scss'
import Button from '@/components/Button'

export default function Chatgpt() {
  const [questionStr, setQuestionStr] = useState<string>('')
  const [answerStr, setAnswerStr] = useState<string>('')
  const search = () => {
    http({
      method: 'post',
      url: 'https://api.aioschat.com/',
      data: {
        messages: [
          {
            role: 'user',
            content: questionStr,
          },
        ],
        tokensLength: 10,
        model: 'gpt-3.5-turbo',
      },
    }).then(res => {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, lang) {
          return hljs.highlightAuto(code).value
        },
        // pedantic: false,
        // gfm: true,
        // breaks: false,
        // sanitize: false,
        // smartLists: true,
        // smartypants: false,
        // xhtml: false,
      })
      console.log(marked.parse(res.choices[0].text))
      setAnswerStr(marked.parse(res.choices[0].text))
    })
  }
  return (
    <div className={style.chatgpt}>
      <input
        type='text'
        value={questionStr}
        onChange={e => {
          setQuestionStr(e.target.value)
        }}
      />
      <Button onClick={search}>Search</Button>
      <h2>结果</h2>
      <div
        className={`hljs ${style.markdown}`}
        dangerouslySetInnerHTML={{ __html: answerStr }}
      ></div>
    </div>
  )
}
