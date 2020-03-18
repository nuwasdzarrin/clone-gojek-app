import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';
import GopayFeature from '../../../components/moleculs/GopayFeature';
import { withNavigation } from 'react-navigation';

class HomeGoPay extends Component {
    render() {
        return (
            <View style={{marginHorizontal: 17,marginTop: 8}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',backgroundColor: '#2C5FB8',borderTopLeftRadius: 4,borderTopRightRadius: 4,padding: 14}}>
                    <Image source={require('../../../assets/icon/gopay-icon.png')} style={{width: 100,height: 20}} />
                    <Text style={{fontSize: 17,fontWeight: 'bold',color: 'white'}}>Rp 50.000</Text>
                </View>
                <View style={{flexDirection: 'row',paddingTop: 20,paddingBottom: 12,backgroundColor: '#2F65BD',borderBottomLeftRadius: 4,borderBottomRightRadius: 4}}>
                    <GopayFeature onPress={() => this.props.navigation.navigate('ScanQRCode')} label="Pay" img={require('../../../assets/icon/top-up.png')} />
                    <GopayFeature label="Nearby" img={require('../../../assets/icon/nearby.png')} />
                    <GopayFeature label="Top Up" img={require('../../../assets/icon/plus.png')} />
                    <GopayFeature label="More" img={require('../../../assets/icon/more.png')} />
                </View>
            </View>
        )
    }
}

export default withNavigation(HomeGoPay);