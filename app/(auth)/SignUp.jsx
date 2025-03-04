import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TextInputField from '../../components/shared/TextInputField';
import Button from './../../components/shared/Button';
import * as ImagePicker from 'expo-image-picker';

//To pick the image from your device you need "Expo image picker"

export default function SignUp() {
  const [profileImg, setProfileImg] = React.useState()
  const [fullName, setFullName] = React.useState()
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImg(result.assets[0].uri);
    }
  };

  return (
    <View className="w-full h-full
    flex items-center 
    ">
      <Text className="text-center font-bold"
      style={{marginVertical:20, marginTop:50, fontSize:25}}
      >Create New Account</Text>

      <TouchableOpacity onPress={() => pickImage()} className=" flex items-center relative "
      style={{marginVertical:10}} 
      >
        {profileImg? 
        <Image 
        className="rounded-full" 
        style={{width:100, height:100}} 
        source={{uri:profileImg}} /> 
        :<Image 
        style={{width:100, height:100}}
        className="rounded-full "
        source={require('./../../assets/images/profile.png')} />}
   
        <FontAwesome className="absolute bottom-0 right-0" name="camera" size={25} color="#2a9d8f" />
      </TouchableOpacity>

      <TextInputField label="Full name" isPass={false} onChange={(v)=>setFullName(v)} />
      <TextInputField label="Email Address" isPass={false} onChange={(v)=>setEmail(v)} />
      <TextInputField label="Password" isPass={true} onChange={(v)=>setPassword(v)} />

      <Button 
      BtnName="Submit" 
      round={10} 
      click={()=>console.log()} 
      width="90%" />
    </View>
  )
}