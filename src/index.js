import {View, Text, StyleSheet} from 'react-native'
import React, {useState} from 'react'

const iaChatGpt = () => {
  const [data, setData] = useState([])
  const apiKey = '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'
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    const prompt = textInput
    const response = await axios.post(apiUrl, )
  }
    return (
        <view style={styles.container}>
        <Text style={styles.title}>Ai ChatBot</Text>
        </view>
    )
}

export default iaChatGpt

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffcc9',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 70
    }
  });