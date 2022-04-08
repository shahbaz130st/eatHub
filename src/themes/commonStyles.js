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
    textFont: {
      fontSize:  25
    },

    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: '#fcf1f0',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },

    buttonContainer: {
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },

    button: {
      backgroundColor: '#FF4500',
      width: '100%',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },

    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#FF4500',
      borderWidth: 2,
    },

    buttonText: {
      color: 'white',
      fontWeight: '600',
      fontSize: 14,
      textTransform: 'uppercase',
        },

    buttonOutlineText: {
      color: '#FF4500',
      fontWeight: '600',
      fontSize: 14,
      textTransform: 'uppercase',
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
  },
  mainViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white"
  },
  buttonStyle: {
    borderColor: "#FF4500",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  quantityButton: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }


  });