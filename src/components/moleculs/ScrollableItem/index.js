import React from 'react';
import { Image, Text, View, ShadowPropTypesIOS } from 'react-native';

const ScrollableItem = (props) => {
    return (
        <View style={{marginRight: 16}}>
            <View style={{width: 150,height: 150,borderRadius: 10}}>
                <Image source={ props.img } style={{height: undefined,width: undefined,resizeMode: 'cover',flex: 1}} />
            </View>
    <Text style={{fontSize: 16,fontWeight: 'bold',color: '#1C1C1C',marginTop: 12}}>{ props.label }</Text>
        </View>

    )
}

export default ScrollableItem;