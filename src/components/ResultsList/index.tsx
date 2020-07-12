import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ResultType } from '../../screens/SearchScreen';

type ResultsListProps = {
    title: string,
    results: Array<ResultType>
}

const ResultsList = (props: ResultsListProps) => {
    const { title, results } = props;
    return (<View>
        <Text style={style.title}>{title} ({results.length})</Text>
        <FlatList horizontal 
        data={results}
        keyExtractor={(result)=>result.id}
        renderItem = {({item}) =>{
            return <Text>{item.name}</Text>
        }}

        />
    </View>
    )
};

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;