import React, { Component } from "react";
import { Image, ScrollView, Text, View } from 'react-native';
import ScrollableItem from "../../../components/moleculs/ScrollableItem";

class ScrollableProducts extends Component {
    render() {
        return (
            <View>
                <View style={{height: 15,width: 80,marginLeft: 16}}>
                    <Image source={require('../../../assets/icon/gopay-icon.png')} style={{height: undefined,width: undefined,resizeMode: 'contain',flex: 1}}/>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom: 16,paddingHorizontal: 16}}>
                    <Text style={{fontSize: 17,fontWeight: 'bold',color: '#1C1C1C'}}>Nearby restaurant</Text>
                    <Text style={{fontSize: 17,fontWeight: 'bold',color: '#61A756'}}>See All</Text>
                </View>
                <ScrollView horizontal={true} style={{flexDirection: 'row',paddingLeft: 16}}>
                    <ScrollableItem label="Sederhana Minang" img={require('../../../assets/img/sprint.jpg')} />
                    <ScrollableItem label="KFC Mirota" img={require('../../../assets/img/sprint.jpg')} />
                    <ScrollableItem label="MCD Sudirman" img={require('../../../assets/img/sprint.jpg')} />
                    <ScrollableItem label="Preksu Pandega" img={require('../../../assets/img/sprint.jpg')} />
                </ScrollView>
                <View style={{borderBottomColor: 'E8E9ED',borderBottomWidth: 1,marginTop: 16,marginBottom: 20, marginHorizontal: 16}}></View>
            </View>
        )
    }
}

export default ScrollableProducts;