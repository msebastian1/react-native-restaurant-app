import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ResultType } from '../../screens/SearchScreen';
import ResultsDetail from '../ResultsDetail';
import { useNavigation } from '@react-navigation/native';

type ResultsListProps = {
    title: string,
    results: Array<ResultType>,
}

const ResultsList = (props: ResultsListProps) => {
    const { title, results } = props;
    const { containerStyle, titleStyle } = styles;
    
    const {navigate} = useNavigation();

    !results.length && <Text>No results found</Text>

    return (<View style={containerStyle}>
        <Text style={titleStyle}>{title} ({results.length})</Text>
        {!!results.length?<FlatList horizontal showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={()=>navigate("Results", {...item})}>
                        <ResultsDetail result={{ ...item }} />
                    </TouchableOpacity>
                )
            }}
        />:
        <Text>No results found</Text>
        }
    </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;