import http from "@/utils/http"
import { useState } from "react"
import { marked } from "marked"
export default function Chatgpt() {
  const [questionStr, setQuestionStr] = useState<string>("")
  const [answerStr, setAnswerStr] = useState<string>("")
  const search = () => {
    http({
      method: "post",
      url: "https://api.aioschat.com/",
      data: {
        messages: [
          {
            role: "user",
            content: questionStr,
          },
        ],
        tokensLength: 10,
        model: "gpt-3.5-turbo",
      },
    }).then(res => {
      console.log(marked.parse(res.choices[0].text))
      setAnswerStr(marked.parse(res.choices[0].text))
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
      <button onClick={search}>查询</button>
      <h2>结果</h2>
      <div
        style={{ whiteSpace: "pre-line" }}
        dangerouslySetInnerHTML={{ __html: answerStr }}
      ></div>
    </div>
  )
}
