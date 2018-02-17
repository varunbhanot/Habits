import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer:{
    height: 50,
    marginTop: 10,
    backgroundColor: '#303030',
    borderRadius: 2,
    alignItems: 'center',
    flexDirection: 'row'
  },
  nameContainer:{
    flex: 2, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  name:{
    fontFamily: 'Lato-Regular',
    fontSize: 17,
    marginLeft: 10,
    color: '#26A69A'
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 15,
    backgroundColor: '#303030',
    width: 23,
    height: 23,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  }
})
