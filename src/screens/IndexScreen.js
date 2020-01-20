import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome, Feather } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    
    const {state, deleteBlogPost} = useContext(Context);

    return (
            <View>
                <FlatList 
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.row}>
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('Show', { id: item.id })}>
                                    <Text style={styles.title}>
                                        {item.title} - {item.id}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <FontAwesome style={styles.icon} name='trash'/>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <Feather 
                onPress={() => navigation.navigate('Create')}
                name="plus-square" 
                size={30}
            />
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;