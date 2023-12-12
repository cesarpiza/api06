import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.25;
const ITEM_SIZE = width - 20;
const DETAILS_CONTAINER_SIZE = width * 0.5;
const SPACING = width * 0.03;

export const styles = StyleSheet.create({
    container: {
        width: ITEM_SIZE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        paddingVertical: SPACING * 2,
        columnGap: SPACING * 2,
        borderRadius: SPACING,
        marginBottom: SPACING,
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        resizeMode: 'cover',
        backgroundColor: '#fff',
        borderRadius: IMAGE_SIZE / 2,
    },
    text: {
        fontSize: 22,
        textTransform: 'capitalize',
    },
    detailsContainer: {
        width: DETAILS_CONTAINER_SIZE,
    },
    detail: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});