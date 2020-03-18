import React, {Component} from 'react';
import { View } from 'react-native';
import NavBarIcon from '../../../components/moleculs/NavBarIcon';
import IconHardWork from '../../../assets/icon/hard-work.png'
import { withNavigation } from 'react-navigation';

class NavBar extends Component {
    render() {
        return (
            <View style={{height: 54,flexDirection: 'row'}}>
                <NavBarIcon onPress={() => this.props.navigation.navigate('Home')} label="Home" img={IconHardWork} active />
                <NavBarIcon onPress={() => this.props.navigation.navigate('Orders')} label="Orders" img={require('../../../assets/icon/dolphin.png')} />
                <NavBarIcon onPress={() => this.props.navigation.navigate('')} label="Help" img={require('../../../assets/icon/dolphin.png')} />
                <NavBarIcon onPress={() => this.props.navigation.navigate('')} label="Inbox" img={require('../../../assets/icon/dolphin.png')} />
                <NavBarIcon onPress={() => this.props.navigation.navigate('')} label="Account" img={{uri: 'https://img.icons8.com/clouds/100/000000/cloud-network.png'}} />
            </View>
        )
    }
}

export default withNavigation(NavBar);