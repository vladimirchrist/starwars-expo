import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: Colors.LIGHTGRAY
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  film: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: Colors.DARK,
    marginBottom: 15,
    marginTop: 5
  },

  filmProperty: {
    fontSize: 14,
    color: Colors.YELLOW,
    fontWeight: 'bold',
    marginTop: 24
  },

  filmValue: {
    marginTop: 8,
    fontSize: 15,
    color: Colors.WHITE
  },

  containerPer: {
    flex:1,
    marginTop: 5,
   }
})