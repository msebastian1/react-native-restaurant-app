import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ResultType } from '../../screens/SearchScreen';

type ResultsDetailType = {
    result: ResultType
}

const ResultsDetail = (props: ResultsDetailType) => {
    const { result: { name, image_url, rating, review_count } } = props;
    const { containerStyle, nameStyle, imageStyle } = styles;
    return (
        <View style={containerStyle}>
            <Image source={{ uri: image_url }} style={imageStyle} />
            <Text style={nameStyle}>{name}</Text>
            <Text>{rating} Stars, {review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 4,
    },
    nameStyle: {
        fontWeight: "bold",
        fontSize: 16
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginVertical: 8,

    }
});

export default ResultsDetail;