import React from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = ({ onChangeText, valueInput }) => {
    return (
        <View>
            <TextInput
                value={valueInput}
                onChangeText={onChangeText}
                placeholder="Search Note"
                placeholderTextColor="grey"
            />
        </View>
    );
};

export { SearchBar };
