import React, {Component} from 'react';
import { View } from 'react-native';
import MainFeature from '../../../components/moleculs/MainFeature';

class HomeMainFeature extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',flexWrap: 'wrap',marginTop: 18}}>
                <View style={{justifyContent: 'space-between',flexDirection: 'row',width: '100%',flexWrap: 'wrap'}}>
                <MainFeature label="GO-RIDE" img={require('../../../assets/icon/hard-work.png')} />
                <MainFeature label="GO-RIDE" img={require('../../../assets/icon/hard-work.png')} />
                <MainFeature label="GO-RIDE" img={require('../../../assets/icon/hard-work.png')} />
                <MainFeature label="GO-RIDE" img={require('../../../assets/icon/hard-work.png')} />

                <MainFeature label="GO-RIDE" img={require('../../../assets/icon/hard-work.png')} />
                <MainFeature label="GO-RIDE" img={require('../../../assets/icon/hard-work.png')} />
                <MainFeature label="GO-RIDE" img={require('../../../assets/icon/hard-work.png')} />
                <MainFeature label="GO-RIDE" img={require('../../../assets/icon/hard-work.png')} />
                </View>
            </View>
        )
    }
}

export default HomeMainFeature;