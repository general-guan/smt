import http from '@/utils/http'
import { useState } from 'react'
import Button from '@/components/Button'
export default function Chatgpt() {
  const [questionStr, setQuestionStr] = useState<string>('')
  const [answerStr, setAnswerStr] = useState<string>('')
  const search = () => {
    http({
      method: 'get',
      url: '',
    }).then(res => {
      console.log(res)
    })
  }
  return (
    <div>
      <input
        type='text'
        value={questionStr}
        onChange={e => {
          setQuestionStr(e.target.value)
        }}
      />
      <Button onClick={search}>查询</Button>
    </div>
  )
}
