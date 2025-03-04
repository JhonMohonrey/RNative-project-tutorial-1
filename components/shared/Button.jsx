import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'

export default function Button(props) {
    
  return (
    <TouchableOpacity onPress={props.click}
    style={{borderRadius: props.round, padding:20, width:props.width, }}
    className={` bg-[#2a9d8f] my-5`}>
        <Text className="text-center text-white text-2xl"
        >{props.BtnName}</Text>
    </TouchableOpacity>
  )
}