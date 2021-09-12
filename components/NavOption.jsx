import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Icon} from "react-native-elements"
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
]

const NavOption = () => {
    const navigation = useNavigation()
    return (
        <FlatList 
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item }) => (
            <TouchableOpacity
            style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-200 w-40 m-2`}
            onPress={() => navigation.navigate(item.screen)}
            >
                <View>
                    <Image
                    style={{width: 120, height: 120, resizeMode: "contain"}}
                    source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                    type="antdesign"
                    color="white"
                    name="arrowright"
                    style={tw`p-2 bg-black rounded-full mt-4 w-10`}
                    />
                </View>
            </TouchableOpacity>
        )}
        />

    )
}

export default NavOption

const styles = StyleSheet.create({})
