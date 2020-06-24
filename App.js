import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      vowelsArray: ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
      vowels: 0,
      consonants: 0,
      words: 0,
      huruf: '',
    };
  }

  analyzeword = () => {

     let addVowels = 0;
     let addConsonants = 0;
     let wordcount = this.state.huruf.length;
     let cha = this.state.huruf.split('');
     //alert(cha.length)
     //alert(this.state.huruf)
     for (var index = 0; index < cha.length; index++){
       if (this.state.vowelsArray.includes(cha[index])){
         addVowels++
         this.setState({vowels:addVowels});
       }
       else{
         addConsonants++;
         this.consonants++;
       }
     }
     this.setState({words:wordcount});
     this.setState({consonants:addConsonants});
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(huruf) => this.setState({huruf})} style={Styles.instructions} placeholder='Analyze a word'/>
        <Text></Text>
        
        </View>
        <View style={Styles.container}>
        <Button color="#841584" onPress={this.analyzeword} title='Analyze'/>
        <Text></Text>
        <Text style={Styles.instructions}>Word: {this.state.huruf}</Text>
        <Text style={Styles.instructions}>Length: {this.state.words}</Text>
        <Text style={Styles.instructions}>Vowels: {this.state.vowels}</Text>
        <Text style={Styles.instructions}>Consonants: {this.state.consonants}</Text>
        </View>
      </View>
    );
  }
}