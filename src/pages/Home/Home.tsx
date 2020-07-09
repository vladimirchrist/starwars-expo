import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Film } from '../../models/film';
import styles from './styles';
import api from '../../services/api';
import { FilmScreenNavigationProp } from '../Film/Film';

const Home = () => {

  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<FilmScreenNavigationProp>();

  function navigateToDetail(film: Film) {
    navigation.navigate('FilmScreen', { film });
  }

  async function loadFilms() {
    if (loading) {
      return;
    }

    setLoading(true);

    await api.get('films/')
    .then(response => {
      setFilms([...films, ...response.data.results]);
      setLoading(false);
    });
  }

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{films.length} Filmes</Text>
        </Text>
      </View>

      <FlatList
        data={films}
        style={styles.filmList}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: film }) => (
          <View style={styles.film}>

            <Text style={styles.filmProperty}>Titulo:</Text>
            <Text style={styles.filmValue}>{film.title}</Text>

            <Text style={styles.filmProperty}>Diretor:</Text>
            <Text style={styles.filmValue}>{film.director}</Text>

            <Text style={styles.filmProperty}>Lançamento:</Text>
            <Text style={styles.filmValue}>{film.release_date}</Text>

            <Text style={styles.filmProperty}>Opening:</Text>
            <Text style={styles.filmValue}>{film.opening_crawl}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(film)}
            >
              <Text style={styles.detailsButtonText}>Detalhes sobre o filme</Text>
              <Feather name="arrow-right" size={16} color="#f7ec12" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Home;