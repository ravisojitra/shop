import {StyleSheet,Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#303034',
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    color:'#e2e3e5',
    fontWeight:'bold',
    fontSize:30,
    marginTop:100
  },
  headingView:{
    paddingBottom:20,
  },
  inputContainer:{
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'flex-start',
    marginTop:100
  },
  inputWrapper: {
    marginBottom:30
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  input: {
    width: DEVICE_WIDTH - 40,
    borderBottomColor:'#e2e3e5',
    borderBottomWidth:1,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#e2e3e5',
  },
  buttonContainer:{
    alignItems: 'center',
    marginBottom:10,
  },
  text:{
    color:"#303034"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e3e5',
    height: 40,
    borderRadius: 20,
    zIndex: 100,
  },
  loadingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#e2e3e5',
    height: 40,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: 40,
    width: 40,
    marginTop: -40,
    borderWidth: 1,
    borderColor: '#e2e3e5',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#e2e3e5',
  },
})