import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

const PrioritiesScreen = props => {

    const navigation = useNavigation();

    const [priorities, setPriorities] = useState([]);

    return (
        <View style={styles.container}>
            <View style={styles.bottom}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => console.log('Add Priorities')}
                    >
                    <Text style={styles.buttonText}>Add Priority</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
};

export default PrioritiesScreen;