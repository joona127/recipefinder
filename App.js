import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, Image } from 'react-native';

export default function App() {
  const [ingredients, setIngredients] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);

  const getRecipes = () => {
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}`;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      setRecipes(responseJson.results);
    })
  
  .catch((error) => {
    Alert.alert('Error', error.message);
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
      <FlatList
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: `${item.thumbnail}`,
              }}
              />
            </View>
          );
        }}
        ItemSeparatorComponent={listSeparator}
        data={recipes}
        />
        <View>
          <TextInput
            style={styles.textInputStyle}
            value={ingredients}
            placeholder="Ingredient"
            onChangeText={(text) => setIngredients(text)}
          />
          <View style={styles.button}>
          <Button title="Find" onPress={getRecipes} />
          </View>
        </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputStyle: {
    textAlign: 'center',
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    

  },
  button: {
    width: '100%',
    height: 40,
    

  },
});
