import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Button from '../components/shared/Button.jsx'
import { useRouter } from 'expo-router'
import SignUp from './(auth)/SignUp.jsx'


export default function LandingScreen() {

  const router = useRouter();

  return (
    <View className="h-full relative">
        <Image
        className="w-full h-[50%]"
        source={require('./../assets/images/login.png')} />

        <View className="bg-white
        rounded-s-3xl absolute left-0 right-0 top-[48%] bottom-0
        p-4">
            <Text
            className="text-[9vw] font-bold text-center"
            >Welcome to AMA Computer College</Text>

            <Text
            className="text-center text-gray-500 my-3 text-xl"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste tempora labore eius, minima porro ullam officiis quos dolores!</Text>

            {/* <TouchableOpacity 
            className="bg-[#2a9d8f] rounded-full py-4 px-2 my-5
            active:opacity-90 ">
                <Text className="text-center text-white text-2xl"
                >Get Started</Text>
            </TouchableOpacity> */}

            <Button 
            BtnName="Get started" 
            click={() => router.push('/(auth)/SignUp')} 
            round={10} />

            <Pressable 
            onPress={()=>router.push('/(auth)/SignIn')}
            ><Text className="text-xl text-gray-500 text-center font-medium"
            >Already have an account? Sign in Here</Text></Pressable>
        </View>
    </View>
  )
}