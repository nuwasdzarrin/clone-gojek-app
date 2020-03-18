import React from 'react';
import { Button, Text, View } from 'react-native';
import NavBar from '../../organisms/NavBar';

const Orders = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text>Orders Page</Text>
                <Button title="Go to detail" onPress={() => props.navigation.navigate('OrderDetail')}/>
            </View>
            <NavBar/>
        </View>
    )
}

export default Orders;