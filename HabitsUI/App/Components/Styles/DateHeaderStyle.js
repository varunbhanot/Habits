import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerView:{
    height: 50,  
    marginRight:15,  
    backgroundColor: '#282727',
    alignSelf: 'flex-end',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  dateText:{
    marginLeft:13,
    marginRight:5,
    alignItems:'center',
    flexDirection:'column'
  },text:{
    color: '#fff',        
    fontFamily:'Lato-Regular'
  }
})
