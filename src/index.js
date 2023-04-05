import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


const iaChatGpt = () => {
  const [data, setData] = useState([])
  const apiKey = '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'
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    const prompt = textInput
    const response = await axios.post(apiUrl, {
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ${apiKey}'
      }
    });
    const text = response.data.choices[0].text;
    setData(...data, { type: 'user', 'text': textInput }, { type: 'bot', 'text': text });
    setTextInput('');
  }
  return (
    <view style={styles.container}>
      <Text style={styles.title}>AI ChatBot</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'green' : 'red' }}>{item.type === 'user' ? 'Ninza' : 'Bot'}</Text>
            <Text style={styles.bot}>{item.text}</Text>
          </View>
      )}/>
      <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={Text => setTextInput(text)}
          placeholder= "Ask me anything"
      />
      <TouchableOpacity>
        style={styles.button}
        onPress={handleSend}

        <text style={styles.buttonText}>Let's Go</text>
      </TouchableOpacity>
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
  },
  body: {
      backgroundColor: '#fffcc9',
      width: '102%',
      margin: 70
  },
  bot: {
      fontSize: 16
  },
  input:  {
      borderwidth: 1,
      bordercolor: 'black',
      width: '90%',
      height: 60,
      marginBottom: 10,
      borderRadius:10
  },
  button: {
      backgroundColor: 'yellow',
      width: '90',
      height: 60,
      borderRadius:10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
  },
  buttonText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'blue'
  }
});