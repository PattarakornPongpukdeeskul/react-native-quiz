import { useMemo } from 'react'
import { shuffle } from 'lodash'
import { Alert, Button, FlatList, View } from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { QUESTIONS } from 'config/constant'
import { QuestionCard } from 'screen/Question/components'
import { useUserStore } from 'store/userStore'
import type { Choice, IQuestion, RootStackParamList } from 'types'

type QuestionScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LeaderBoard'>
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  navigation,
}) => {
  const { increaseScore } = useUserStore()

  const handleAnswer = (question: IQuestion, selectedAnswer: Choice) => {
    if (question.answer === selectedAnswer) {
      Alert.alert('Correct!')
      increaseScore()
    } else {
      Alert.alert('Wrong Answer!')
    }
  }
  const renderItem = ({ index, item }: { item: IQuestion; index: number }) => (
    <QuestionCard
      index={index}
      question={item}
      onSelectAnswer={(selectedAnswer) => handleAnswer(item, selectedAnswer)}
    />
  )

  const quiz = useMemo(
    () =>
      shuffle(QUESTIONS)
        .slice(0, 20)
        .map((question, index) => ({ ...question, index })),
    [],
  )

  return (
    <View style={{ paddingBottom: 32 }}>
      <Button
        title='Go to Leader Board'
        onPress={() => navigation.navigate('LeaderBoard')}
      />
      <FlatList
        data={quiz}
        renderItem={renderItem}
        keyExtractor={(_, index) => `question-${index}`}
      />
    </View>
  )
}
