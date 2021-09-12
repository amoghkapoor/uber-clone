import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOption from '../components/NavOption'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_API_KEY } from '@env'

const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
            <View style={tw`p-5 `}>
                <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain'
                }}
                source={{
                    uri: 'https://links.papareact.com/gzs'
                }}
                />
                <GooglePlacesAutocomplete
                nearbyPlacesAPI="GooglePlacesSearch"
                placeholder
                />
                <NavOption/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    },
});