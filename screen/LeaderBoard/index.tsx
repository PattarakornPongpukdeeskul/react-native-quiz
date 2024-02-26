import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { otherUsers } from 'config/constant'
import { useUserStore } from 'store/userStore'
import type { IUser, RootStackParamList } from 'types'

type LeaderBoardScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Question'>
}

export const LeaderBoardScreen: React.FC<LeaderBoardScreenProps> = ({
  navigation,
}) => {
  const { id, score, name } = useUserStore()
  const thisUser = { id, score, name }
  const leaderBoardData = [...otherUsers, thisUser].sort(
    (a, b) => b.score - a.score,
  )

  return (
    <View style={styles.container}>
      <Button
        title='Go to Quiz'
        onPress={() => navigation.navigate('Question')}
      />
      <FlatList
        data={leaderBoardData}
        renderItem={renderItem}
        keyExtractor={(_, index) => `LeaderBoard-${index}`}
      />
    </View>
  )
}

const renderItem = ({ item, index }: { item: IUser; index: number }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{`Rank ${index + 1} is ${item.name} `}</Text>
      <Text style={styles.text}>{`Score: ${item.score}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
