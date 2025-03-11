import { View, Text, Pressable, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TextInputField from '../../components/shared/TextInputField';
import Button from './../../components/shared/Button';
import * as ImagePicker from 'expo-image-picker';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig';
import { upload } from 'cloudinary-react-native';
import { cld } from '../../config/CouldinaryConfig';


//To pick the image from your device you need "Expo image picker"

export default function SignUp() {
  const [profileImg, setProfileImg] = React.useState()
  const [fullName, setFullName] = React.useState()
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()

  const onBtnPress = () => {
    if (!email||!password||!fullName) {
      ToastAndroid.show("Please complete the details!", ToastAndroid.BOTTOM)
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredentials)=>{
      console.log(userCredentials)

      //Full name John Doe
      //Email mohonrey@gmail.com
      //pass johnDoe$$$

      //Upload profile image
      await upload(cld, {
        file:profileImg,
        options:options,
        callback: async(error, response) => {
          if (error) {
            console.log(error)
          }
          
          if (response) {
            console.log(response)
          }
        }
      })

      //Save to database
    }).catch((error)=>{
      const errorMsg=error?.message
      ToastAndroid.show(errorMsg, ToastAndroid.BOTTOM)
    })
  }

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


  const userInput = (title, setFunc) => {
    return (
      <>
        <Text className="text-start w-[90%] mt-5 text-2xl">{title}:</Text>
        <TextInput 
        className="border-2 border-black w-[90%] rounded-md p-3 text-2xl"
        placeholder={`Your ${title}`}
        onChangeText={user=>{setFunc(user)}}
        />
      </>
    )
  }

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

      {userInput("Full Name", setFullName)}
      {userInput("Email", setEmail)}
      {userInput("Password", setPassword)}
    

      <TouchableOpacity
      onPress={()=>onBtnPress()}
      className="w-[90%] my-5 flex items-center justify-center bg-gray-700 rounded-lg">
        <Text className="font-bold text-white text-center my-5 text-2xl">Submit</Text>
      </TouchableOpacity>
    </View>
  )
}