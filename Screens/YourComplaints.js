import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
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
import db from '../config';
export default class YourComplaints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allComplaints: [],
      userId: '',
    };
  }
  getAllComplaints() {}

  componentDidMount() {
    this.getAllComplaints();
  }
  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          centerComponent={{
            text: 'Your Complaints',
            style: {
              fontWeight: 'bold',
              fontSize: 19,
              color: 'white',
            },
          }}
          backgroundColor={'green'}
        />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.allComplaints}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigation.navigate('AddComplaintsScreen');
            }}
            style={styles.touchableOpacityStyle}>
            <Text style={styles.fabText}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  fabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 25,
  },
});
