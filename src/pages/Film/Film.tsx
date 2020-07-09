import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

import { Film } from '../../models/film';
import Character from '../../models/character';
import CharacterScreen from '../Character';

import { AppStackParamList } from '../../routes';
import styles from './styles';

export type FilmScreenRouteProp = RouteProp<AppStackParamList, 'FilmScreen'>
export type FilmScreenNavigationProp = StackNavigationProp<
    AppStackParamList,
    'FilmScreen'>;

const FilmScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<FilmScreenRouteProp>();

    const navigateBack = () => navigation.goBack();

    const film: Film = route.params.film;
    const [characters, setCharacters] = useState<Character[]>([])

    const loadCharacters = () => {

        film.characters.map(async characterUrl => {
            const character = await getCharacter(characterUrl)
            setCharacters(characters => [...characters, character])
        })
    }

    const getCharacter = (url: string) => {
        return axios.get(url).then(
            (response: { data: Character; }) => response.data
        )
    }

    useEffect(() => {
        loadCharacters();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.film}>
                <Text style={[styles.filmProperty, { marginTop: 0 }]}>Title:</Text>
                <Text style={styles.filmValue}>{film.title}</Text>

                <Text style={styles.filmProperty}>Director:</Text>
                <Text style={styles.filmValue}>{film.director}</Text>

                <Text style={styles.filmProperty}>Characters:</Text>
             <FlatList
                data={characters}
                keyExtractor={(item, index) => String(index)}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                renderItem={({ item: character }) => (
                    <View style={styles.containerPer}>
                        <CharacterScreen
                            key={character.name}
                            name={character.name}
                            character={character}
                        ></CharacterScreen>
                    </View>
                )}
            />
            </View>
        </View>
    )
}

export default FilmScreen;
