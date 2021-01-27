import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, Image } from 'react-native';

export default function App() {
  const [ingredients, setIngredients] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);

  const getRecipes = () => {
    const url = 'http://www.recipepuppy.com/about/api/?i='+ ingredients;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      setRecipes(responseJson);
    })
  
  .catch((error) => {
    Alert.alert('Error', error);
  })
}

const listSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "80%",
        backgroundColor: "#CED0CE",
        marginLeft: "10%"
      }}
    />
  );
};



  return (
    <View style={styles.container}>
      <FlatList>
        keyExtractor={item => item.id}
        renderItem{({item}) => 
        
  
      </FlatList>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
