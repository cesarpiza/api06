import React from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { styles } from './styles';

export default function Pokemon(props) {

    const {
        name,
        base_experience,
        sprites,
    } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: sprites.front_default }}
            />
            <View style={styles.detailsContainer}>
                <Text
                    numberOfLines={1}
                    style={styles.text}
                >
                    name: <Text style={styles.detail}>
                        {name}
                    </Text>
                </Text>
                <Text style={styles.text}>
                    exp: <Text style={styles.detail}>
                        {base_experience}
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}