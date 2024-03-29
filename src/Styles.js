import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width // full width
const height = Dimensions.get('window').height // full height
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const Styles = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {
    width: wp('80%'),
    alignSelf: 'center',
  },

  // Loading
  loadingWrapper: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 152, 219, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    alignSelf: 'center',
    zIndex: 10,
  },

  // Auth
  authTitle: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  authTitleWrapper: {
    marginTop: hp('20%'),
    marginBottom: hp('8%'),
  },
  submitButton: {
    backgroundColor: '#3498db',
  },
  submitButtonText: {
    color: '#fff',
  },
})

module.exports = Styles
