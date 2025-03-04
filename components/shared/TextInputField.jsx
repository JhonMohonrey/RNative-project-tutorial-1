import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function TextInputField(props) {
  return (
    <View className="w-full " style={{paddingHorizontal:18, marginTop:15, marginBottom:10}}>
      <Text style={{marginBottom:5, color: "#0000005e" }} className="font-bold text-xl">{props.label}</Text>

      <TextInput 
      onChange={props.onChange}
      style={{borderRadius:10, borderWidth:1, borderColor: "#0000003f", padding:10}}
      className="text-xl overflow-hidden"
      secureTextEntry={props.isPass}
      placeholder='Enter Here'/>
    </View>
  )
}