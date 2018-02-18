import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  button: {    
    margin: 16,
    fontFamily: 'Lato-Regular',
    fontSize:15,
    color:'#ffffff'
  },
  headerText:{
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    color: '#ffffff'
  },
  headerContainer:{
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    marginBottom:10

  },
  inputContainer:{
    justifyContent: 'center',
    alignItems: 'center'  
  },
  buttonContainer:{    
    flexDirection: 'row',    
    justifyContent: 'flex-end',
    alignItems: 'flex-end'        

  },
  modalContent: {
    backgroundColor: '#282727',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalData :{
    justifyContent: 'flex-start',    
    marginLeft:10
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  }
})
