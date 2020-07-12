import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

type APIBusinessResult = {
    photos: Array<string> | undefined
}
type ResultsShowScreenPropsType = {
    route: {
        params: ResultsShowScreenParamsListType
    }
}
type ResultsShowScreenParamsListType = {
    id: string,
    name: string
}

const ResultsShowScreen = ({ route: { params } }: ResultsShowScreenPropsType) => {
    const { id, name } = params;
    const { imageStyle, contentStyle, headerStyle } = styles;

    const [result, setResult] = useState<APIBusinessResult>();

    const getResult = async (id: string) => {
        const { data } = await yelp.get(`/${id}`);
        setResult(data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    return (
        <View style={contentStyle}>
            <Text style={headerStyle}>{name}</Text>
            {!!result &&
                <FlatList data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image source={{ uri: item }} style={imageStyle} />
                    }}
                />}
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: "100%",
        height: 200,
        borderRadius: 4,
        marginVertical: 14,
    },
    contentStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
        flex: 1,
    },
    headerStyle: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 18

    }
});

export default ResultsShowScreen;