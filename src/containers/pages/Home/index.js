import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import GoBannerFeature from '../../../components/moleculs/GoBannerFeature';
import GoInfoFeature from '../../../components/moleculs/GoInfoFeature';
import GoNewsFeature from '../../../components/moleculs/GoNewsFeature';
import SearchFeature from '../../../components/moleculs/SearchFeature';

import HomeGoPay from '../../organisms/HomeGoPay';
import HomeMainFeature from '../../organisms/HomeMainFeature';
import NavBar from '../../organisms/NavBar';
import ScrollableProducts from '../../organisms/ScrollableProducts';



class Home extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1,backgroundColor: 'white',paddingTop: 15}}>
                {/* Header bar */}
                <SearchFeature />

                {/* Gopay */}
                <HomeGoPay />

                {/* Main feature */}
                <HomeMainFeature />
                <View style={{height: 17,backgroundColor: 'F2F2F4',marginTop: 20}}></View>
                
                {/* news */}
                <GoNewsFeature onPress={() => this.props.navigation.navigate('NewsDetail')} />
 
                {/* Internal information */}
                <GoInfoFeature />

                {/* Go-food banner section */}
                <GoBannerFeature />

                {/* Nearby Go-food */}
                <ScrollableProducts />
                </ScrollView>

                {/* Bottom Navbar */}
                <NavBar />
            </View>
        )
    }
}

export default Home;