import React from 'react';
import { Image, TextInput, View } from 'react-native';

const SearchFeature = () => {
    return (
        <View style={{marginHorizontal: 17,flexDirection: 'row'}}>
            <View style={{position: 'relative', flex: 1}}>
                <TextInput placeholder="what do you want to eat?" style={{borderWidth: 1,borderColor: '#E8E8E8',borderRadius: 25,height: 40,fontSize: 13,paddingLeft: 45,paddingRight: 20,backgroundColor: 'white',marginRight: 18}}/>
                <Image source={require('../../../assets/icon/search.png')} style={{width: 20,height: 20,position: 'absolute',top: 10,left: 12}}/>
            </View>
            <View style={{width: 35,height: 40,alignItems: 'center',justifyContent: 'center'}}>
                <Image source={require('../../../assets/icon/hard-work.png')}/>
            </View>
        </View>
    )
}

export default SearchFeature;