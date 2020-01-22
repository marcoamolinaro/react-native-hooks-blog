import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {

    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content} numberOfLines={20} >{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity >
                <EvilIcons
                    onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}
                    name="pencil" 
                    size={35}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 10
    },
    container: {
        paddingHorizontal: 15
    }, 
    content: {
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5
    }
});

export default ShowScreen;