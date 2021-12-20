import React , {Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ListItem, Avatar, Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Entypo,
  Fontisto,
  FontAwesome5,
  Octicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import db from "../config"
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.uid,
      email: firebase.auth().currentUser.email,
      allMessages: [],
      userName        : "",
    };
  }

  getMessages = () => {
    
  };

  getUserDetails() {
    db.collection('users')
      .where('name', '==', this.state.profilename)
      .get()
      .then(() => {});
  }

  componentDidMount() {
    this.getMessages();
    this.getUserDetails();
  }
  renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => {
        
      }}>
      <ListItem.Content>
        <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
          
        </ListItem.Title>
        <ListItem.Subtitle></ListItem.Subtitle>
      </ListItem.Content>

      <Feather
        name="arrow-right"
        size={25}
        color="#60CC9A"
        style={{ alignSelf: 'center' }}
      />
    </ListItem>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
         <View style={{flex:0.3, backgroundColor:"green", justifyContent:"center", alignItems:"center"}}>
         <Text>Welcome {this.state.name}</Text>
         </View>

          <View style={{ flex: 0.7 }}>
            <FlatList
              data={this.state.allMessages}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
});
