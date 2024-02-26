import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

import { ANSWER_BUTTON_COLOR } from 'config/theme'
import type { Choice, IQuestion } from 'types'

type QuestionCardProps = {
  index: number
  question: IQuestion
  onSelectAnswer: (selectedAnswer: Choice) => void
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  index,
  question,
  onSelectAnswer,
}) => {
  const [display, setDisplay] = useState<'none' | 'flex'>('flex')

  function handleAnswer(answer: Choice) {
    setDisplay('none')
    onSelectAnswer(answer)
  }

  return (
    <View style={{ ...styles.card, display }}>
      <Text style={styles.questionText}>{`${index + 1}. ${
        question.question
      }`}</Text>
      <Pressable
        style={StyleSheetFactory.getStyle('A').answerButton}
        onPress={() => handleAnswer('A')}
      >
        <Text style={styles.answerText}>{question.A}</Text>
      </Pressable>
      <Pressable
        style={StyleSheetFactory.getStyle('B').answerButton}
        onPress={() => handleAnswer('B')}
      >
        <Text style={styles.answerText}>{question.B}</Text>
      </Pressable>
      <Pressable
        style={StyleSheetFactory.getStyle('C').answerButton}
        onPress={() => handleAnswer('C')}
      >
        <Text style={styles.answerText}>{question.C}</Text>
      </Pressable>
      <Pressable
        style={StyleSheetFactory.getStyle('D').answerButton}
        onPress={() => handleAnswer('D')}
      >
        <Text style={styles.answerText}>{question.D}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

class StyleSheetFactory {
  static getStyle(answer: 'A' | 'B' | 'C' | 'D') {
    return StyleSheet.create({
      answerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: ANSWER_BUTTON_COLOR[answer],
      },
    })
  }
}
