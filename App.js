import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react'

export default function App() {
  const [frase, setFrase] = useState("")
  const [imgB, setImgB] = useState(require('./src/biscoito.png'))

  const quebrarBiscoito = ()=>{
    const numeroAleatorio = Math.floor(Math.random() * frases.length)
    setFrase(`" ${frases[numeroAleatorio]} "`)
    setImgB(require('./src/biscoitoAberto.png'))
  }

   const frases = [
    'O que sabemos é uma gota; o que ignoramos é um oceano.',
    'Se eu vi mais longe, foi por estar sobre ombros de gigantes.',
    'Construímos muros demais e pontes de menos.',
    'Deve-se aprender sempre, até mesmo com um inimigo.',
    'Virtude sem caridade não passa de nome.',

   ]
  return (
    <View style={styles.container}>
      <Image 
      source={imgB}
      style={styles.img}
      />
      
      <Text style={styles.textFrase}>{frase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
      width: 250,
      height: 250
  },
  textFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
   width: 230,
   height: 50,
   borderWidth: 2, 
   borderColor:  '#dd7b22',
   borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#dd7b22'
  }

});
