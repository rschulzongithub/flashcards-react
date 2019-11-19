import React from 'react'
import styled from 'styled-components/macro'

const CardStyled = styled.section`
  position: relativ;
  padding: 20px;
  background: mistyrose;
  font-size: 16px;
  color: #333;
  border-radius: 6px;
  box-shadow: 0 10px 10px #0002;
  margin: 10px;
`

const QuestionStyled = styled.h2`
  font-size: 20px;
  color: purple;
`

const AnswerStyled = styled.p`
  font-size: 18px;
  padding: 10px;
  color: cornflowerblue;
`

export default function Card({ question, answer }) {
  return (
    <CardStyled>
      <QuestionStyled>
        <p>{question}</p>
      </QuestionStyled>
      <AnswerStyled>
        <p>{answer}</p>
      </AnswerStyled>
    </CardStyled>
  )
}
