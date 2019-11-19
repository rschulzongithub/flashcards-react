import React from 'react'
import Card from './Card'
import cardData from './cards.json'
import styled from 'styled-components/macro'

export default function App() {
  const cards = cardData

  return cards.map(card => (
    <Card question={card.question} answer={card.answer} />
  ))
}
