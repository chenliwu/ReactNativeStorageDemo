/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import storage from './storage/index';

/**
 * 使用自己封装的storage
 */
export default class ReactNativeStorageBasics extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="存储数据" onPress={() => {
                    this._saveData();
                }}></Button>
                <Button title="取数据" onPress={() => {
                    this._loadData();
                }}></Button>
                <Button title="删除数据" onPress={() => {
                    this._removeData();
                }}></Button>
            </View>
        );
    }

    /**
     * 存储数据
     */
    _saveData = () => {
        storage.save("user",{
            username:"chenliwu",
            university:"贺州学院",
        });
        alert("存储成功");
    }

    /**
     * 读取数据
     */
    _loadData = () => {
        storage.load("user",function(data){
            alert("username:"+data.username+"\nuniversity:"+data.university);
        });
    }

    /**
     * 删除单个数据
     */
    _removeData = () => {
        storage.remove("user");
    }

}
