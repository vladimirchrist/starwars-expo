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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: Colors.WHITE
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  filmList: {
    marginTop: 10
  },

  film: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: Colors.DARK,
    marginBottom: 15
  },

  filmProperty: {
    fontSize: 14,
    color: Colors.WHITE,
    fontWeight: 'bold'
  },

  filmValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 20,
    color: Colors.WHITE
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: Colors.YELLOW,
    fontSize: 15,
    fontWeight: 'bold'
  }
})