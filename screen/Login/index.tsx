import { useState } from 'react'
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useUserStore } from 'store/userStore'
import type { RootStackParamList } from 'types'

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Question'>
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('')
  const { join, name: userExist } = useUserStore()

  const handleSubmit = () => {
    if (name) {
      join(name)
      navigation.navigate('LeaderBoard')
    } else {
      Alert.alert('Please type your name!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, alignSelf: 'center', marginTop: 32 }}>
        {userExist ? 'UPDATE YOUR NAME' : 'JOIN'}
      </Text>
      <Text style={styles.text}>Name: </Text>
      <TextInput
        style={{
          margin: 10,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          backgroundColor: 'white',
        }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>{`${userExist ? 'UPDATE' : 'SUBMIT'}`}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    backgroundColor: '#33CCCC',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    margin: 10,
  },
})
