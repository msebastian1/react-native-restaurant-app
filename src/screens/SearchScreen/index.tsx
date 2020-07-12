import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../components/SearchBar';
import useResults from '../../hooks/useResults';
import ResultsList from '../../components/ResultsList';

const PRICE_RESULTS = {
    LOW : {filterTag:"$", label: "Cost Effective"},
    MEDIUM :{ filterTag: "$$", label: "Bit Pricier"},
    HIGH : {filterTag: "$$$", label: "Big Spender"}
}

export type ResultType = {
    price: string,
    id: string,
    name: string,
}

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchAPI, results, errMessage] = useResults();
    
    const filterResultsByPrice = (filterTag:string, results: Array<ResultType>) => {
        // Price types: "$" | "$$" | "$$$"
        return results.filter(result => filterTag === result.price)
    };

    return (
        <View>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onTermSubmit={() => searchAPI("pizza")} />
            <Text>
                Search Screen
            </Text>
            {!!errMessage && <Text>
                {errMessage}
            </Text>}
            <Text>Found {results.length} restaurants</Text>
            <ResultsList results={filterResultsByPrice(PRICE_RESULTS.LOW.filterTag
                ,results)} title={PRICE_RESULTS.LOW.label} />
            <ResultsList results={filterResultsByPrice(PRICE_RESULTS.MEDIUM.filterTag,results)} title={PRICE_RESULTS.MEDIUM.label}/>
            <ResultsList results={filterResultsByPrice(PRICE_RESULTS.HIGH.filterTag, results)} title={PRICE_RESULTS.HIGH.label} />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default SearchScreen;