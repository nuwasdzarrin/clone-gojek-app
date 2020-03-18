import React from 'react';
import { Image, Text, View } from 'react-native';

const MainFeature = (props) => {
    return (
        <View style={{width: `${100/4}%`,alignItems: 'center',marginBottom: 18}}>
            <View style={{width: 58,height: 58,borderWidth: 1,borderColor: '#EFEFEF',borderRadius: 18}}>
                <Image source={ props.img } style={{width: 60,height: 60}}/>
            </View>
            <Text style={{fontSize: 11,fontWeight: 'bold',textAlign: 'center',marginTop: 6}}>{ props.label }</Text>
        </View>
    )
}

export default MainFeature;