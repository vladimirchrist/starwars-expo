import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Film } from './models/film';

type RootStackParamList = {
    Home: undefined;
    FilmScreen: {
        film: Film
    };
};

type FilmScreenRouteProp = RouteProp<RootStackParamList, 'FilmScreen'>;

type FilmScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'FilmScreen'
>;

type Props = {
    route: FilmScreenRouteProp;
    navigation: FilmScreenNavigationProp;
};