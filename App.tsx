import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LeaderBoardScreen } from 'screen/LeaderBoard'
import { LoginScreen } from 'screen/Login'
import { QuestionScreen } from 'screen/Question'

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Join' component={LoginScreen} />
          <Stack.Screen name='Question' component={QuestionScreen} />
          <Stack.Screen
            name='LeaderBoard'
            component={LeaderBoardScreen}
            options={{ title: 'Ranking' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
