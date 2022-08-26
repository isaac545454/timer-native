import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useState, Component } from 'react'


class App extends Component{
  constructor(props) {
    super(props)
    this.state={
      numero: 0,
      botao: "vai",
      ultimo: null
    }
    this.timer = null
    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  iniciar(){
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
      this.setState({botao: 'vai'})
    }else{
    this.timer = setInterval(() => {
      this.setState({numero: this.state.numero + 0.1})
    }, 100);
    this.setState({botao: "PARAR"})
    }
  }
  limpar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({numero: 0, botao: 'vai'})
  }
   
render(){
  return (
    <View style={styles.container}>
    <Image 
    source={require("./src/cronometro.png")}
    style={styles.cronometro}
    />
    <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

      <View style={styles.areaBtn}>

        <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
          <Text style={styles.textBtn}>{this.state.botao}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.textBtn}>limpar</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
}
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AEEF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  areaBtn: {
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#00aeef",

  }
});
