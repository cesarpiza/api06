import React from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const SPACING = width * 0.03;

export default function Progress() {
    return (
        <ActivityIndicator size={'large'} color={'#fff'} style={{
            marginBottom: SPACING,
        }} />
    );
}