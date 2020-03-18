import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const GoInfoFeature = () => {
    return (
        <View style={{padding: 16}}>
            <View style={{height: 15,width: 80,position: 'absolute',top: 16,left: 16}}>
              <Image source={require('../../../assets/icon/gopay-icon.png')} style={{height: undefined,width: undefined,resizeMode: 'contain',flex: 1}}/>
            </View>
            <Text style={{fontSize: 17,fontWeight: 'bold',color: '#1C1C1C',marginTop: 15,marginBottom: 15}}>Complete your profile</Text>
            <View style={{flexDirection: 'row',marginBottom: 16}}>
              <View>
                <Image source={require('../../../assets/icon/facebook-logo.png')} style={{height: 50,width: 50,borderRadius: 6}} />
              </View>
              <View style={{marginLeft: 16,flex: 1}}>
                <Text style={{fontSize: 15,fontWeight: 'bold',color: '#4A4A4A'}}>Connect with facebook</Text>
                <Text style={{fontSize: 15,fontWeight: 'normal',color: '#4A4A4A', width: '70%'}}>Login faster without verification code</Text>
              </View>
            </View>
            <TouchableOpacity style={{backgroundColor: '#61A756',paddingHorizontal: 12,paddingVertical: 11,alignSelf: 'flex-end',borderRadius: 4}}>
              <Text style={{fontSize: 13,fontWeight: 'bold',color: 'white',textAlign: 'center'}}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{borderBottomColor: 'E8E9ED',borderBottomWidth: 1,marginTop: 16,marginBottom: 20}}></View>
        </View>
    )
}

export default GoInfoFeature;