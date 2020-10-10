import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import menuImage from './../assets/media/cardapio.png';
import userImage from './../assets/media/beekeeper.png';

export class Head extends Component {
    render() {
        return (
            <View style={styles.head}>
                <View>
                    <Image
                        style={styles.imgHead}
                        source={menuImage}
                    />
                </View>
                <View style={styles.titleUser}>
                    <Text> Head </Text>
                </View>
                <View>
                    <Image
                        style={styles.imgHead}
                        source={userImage}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        backgroundColor: '#DBFF00',
        height: '64px',
    },
    imgHead: {
        height: '64px',
        width: '64px',
    },
    titleUser: {
        paddingTop: '3%',
    },
});

export default Head
