import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';

const SearchBar = ({ onChangeText, valueInput }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={valueInput}
                onChangeText={onChangeText}
                placeholder="Search Note"
                placeholderTextColor="grey"
                style={styles.searchInput}
            />
        </View>
    );
};

export { SearchBar };
