import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../components/SearchBar';
import useResults from '../../hooks/useResults';
import ResultsList from '../../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const PRICE_RESULTS = {
    LOW : {filterTag:"$", label: "Cost Effective"},
    MEDIUM :{ filterTag: "$$", label: "Bit Pricier"},
    HIGH : {filterTag: "$$$", label: "Big Spender"}
}

export type ResultType = {
    price: string,
    id: string,
    name: string,
    image_url: string,
    rating: number,
    review_count: number,
}

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchAPI, results, errMessage] = useResults();
    const {containerStyle} = styles;
    
    const filterResultsByPrice = (filterTag:string, results: Array<ResultType>) => {
        // Price types: "$" | "$$" | "$$$"
        return results.filter(result => filterTag === result.price)
    };

    return (
        <View style={containerStyle}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onTermSubmit={() => searchAPI("pizza")} />
            {!!errMessage && <Text>
                {errMessage}
            </Text>}
            <Text>Found {results.length} restaurants</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice(PRICE_RESULTS.LOW.filterTag
                    ,results)} title={PRICE_RESULTS.LOW.label}/>
                <ResultsList results={filterResultsByPrice(PRICE_RESULTS.MEDIUM.filterTag,results)} title={PRICE_RESULTS.MEDIUM.label} />
                <ResultsList results={filterResultsByPrice(PRICE_RESULTS.HIGH.filterTag, results)} title={PRICE_RESULTS.HIGH.label} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        marginLeft:10,
        flex: 1, // To make scrollable view flex on screen
    }

})

export default SearchScreen;