import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
      },
   
      containerTop: {
        flex: 2,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        textAlign:'center',
        marginTop: 20,
        width: 150,
        height:50
        
      },

      buttonTop: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        width: 150,
        height:50
      },

      entryContainer: {
        flex: 8,
        
        backgroundColor: '#fff',
        width: `100%`, 
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        padding : 10
      },

      mapContainer: {
        backgroundColor: '#fff',
        width: `100%`, 
        height: `100%`, 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        marginTop: 10
      },

      mapView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: `100%`, 
        height: `100%`,
      
      },


      entry: {
        borderWidth: 1,
        backgroundColor: '#fff',
        width: `90%`, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign:'center',
      },

      entryTop: {
        borderWidth: 1,
        backgroundColor: '#BFCAD0', 
        width: `100%`, 
        textAlign:'center',
        alignItems: 'center',
        height: 30,
        padding : 0  
      },
    
      topTitle:{
        backgroundColor: `#FF0000`,
        color: '#fff',
        width: `100%` ,
        margin: 10,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        fontWeight: "bold"
    },
    textFont: {
      fontSize:  25
    },

    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },

    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },

    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },

    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },

    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },

    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },

    Title:{

      textTransform: 'uppercase',
      color: '#FF0000',
      padding: 5,
      width: 300,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      textAlign: 'center',
      fontWeight: "bold",
      fontSize:  20
  }

  });