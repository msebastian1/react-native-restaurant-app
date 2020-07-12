import React, { Dispatch, SetStateAction } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

type SearchBarPropType = {searchTerm:string, setSearchTerm: Dispatch<SetStateAction<string>>, onTermSubmit: ()=>void}

const SearchBar = (props:SearchBarPropType) => {
    const {searchTerm, setSearchTerm, onTermSubmit} = props
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput placeholder="Search" style={styles.inputStyle} 
            value={searchTerm} onChangeText={setSearchTerm} 
            autoCapitalize="none" autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 10,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    iconStyle:{
        alignSelf:'center',
        fontSize: 20,
        marginHorizontal: 10,
    }
    ,
    inputStyle:{
        flex: 1,
        fontSize: 16,
    }
});

export default SearchBar;