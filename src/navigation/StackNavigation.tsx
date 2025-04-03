import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { RootParams } from '../types';
import Profile from '../screens/Profile';
import CreateTodo from '../screens/CreateTodo';


const Stack = createNativeStackNavigator<RootParams>();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='profile' component={Profile} />
            <Stack.Screen name='createTodo' component={CreateTodo} />
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})