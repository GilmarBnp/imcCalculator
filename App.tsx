
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Switch, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import IMC from './Components/header';
const { width, height } = Dimensions.get('window');

const App = () => {
  const[altura, setAltura]= useState('');
  const[peso, setPeso]= useState('');
  const [result, setResult] = useState<number | null>(null);
  const[info, setInfo]=useState("")
  const[chart, setChart]=useState(0);

  const handleAltura = (inputText:any) => {
    var cleanedText = inputText.replace(/\D/g,""); 
    cleanedText = cleanedText.replace(/^0+/, "");
    setAltura(cleanedText);
  };

  const handlePeso = (inputText:any) => {
    var cleanedText = inputText.replace(/\D/g,""); 
    cleanedText = cleanedText.replace(/^0+/, "");
    setPeso(cleanedText);
  };

  const handleCalc = () => {

    if (!altura || !peso) {
      setChart(0);
      setResult(null);
      return;
    }

    const height = parseFloat(altura)/100;
    const weight = parseFloat(peso);
    const imc = weight/(height * height);

    const roundNumber = (number:any, decimalPlaces:any) => {
    const multiplier = 10 ** decimalPlaces;
    return Math.round(number * multiplier) / multiplier;
    };

    const roundedImc = roundNumber(imc, 2);
    setResult(roundedImc);

    
  }

  useEffect(() => {
    if (!peso || !altura) {
      setInfo("Por favor digite a sua altura e peso");
      setChart(0);
      }
    if(result != null){
      if (result >= 6 && result <= 16.99) {
        setInfo("O seu peso está muito abaixo do ideal");
        setChart(1)
        } else if (result >= 0 && result <= 18.49) {
            setInfo("O seu peso está abaixo do ideal");
            setChart(2)
        } else if (result >= 18.5 && result <= 24.99) {
          setInfo("O seu peso está ideal");
          setChart(3)
        } else if (result >= 25 && result <= 29.99) {
          setInfo("O seu peso está acima do ideal (sobrepeso)");
          setChart(4)
         } else if (result >= 30 && result <= 34.99){
          setInfo("Obesidade grau I");
          setChart(5)
         }
         else if (result >= 35 && result <= 39.99){
          setInfo("Obesidade grau II");
          setChart(5)
         }
         else if (result > 40){
          setInfo("Obesidade grau III");
          setChart(6)
         }

    }
     
      
  }, [result]);

  return (

    <SafeAreaView>
       <IMC/>  
     <View style={styles.container}> 
     {result && (
          <Text style={styles.result}>O seu IMC está: {result}</Text>
        )}
         {!result && (
          <Text style={styles.result}></Text>
        )}
      <View style={styles.container2} >
       
        <View style={styles.containerInfo}>
        <Text style={styles.resultInfo}>{info}</Text>
        
       
       
        </View>
        <View style={styles.containerImg}>
        {chart === 0 && (
          <Image source={require("./assets/imcBar.jpg")} style={styles.imageImc} />
        )}
        {chart === 1 && (
          <Image source={require("./assets/imcBarSetaMuitoBaixo.jpg")} style={styles.imageImc} />
        )}
        {chart === 2 && (
          <Image source={require("./assets/imcBarSetaBaixo.jpg")} style={styles.imageImc} />
        )}
        {chart === 3 && (
          <Image source={require("./assets/imcBarSetaNormal.jpg")} style={styles.imageImc} />
        )}
        {chart === 4 && (
          <Image source={require("./assets/imcBarSetaSobrepeso.jpg")} style={styles.imageImc} />
        )}
        {chart === 5 && (
          <Image source={require("./assets/imcBarSetaObesidade.jpg")} style={styles.imageImc} />
        )}
         {chart === 6 && (
          <Image source={require("./assets/imcBarSetaObesidadeMorbida.jpg")} style={styles.imageImc} />
        )} 
        </View> 
        <View style={styles.container3}>
        <Text style={styles.text}>Digite a sua altura:</Text>
        <TextInput
          keyboardType='number-pad'
          style={styles.input}
          value={altura}
          onChangeText={handleAltura}
          placeholder='Ex: 160'
        />
        <Text style={styles.text}>Digite o seu peso:</Text>
        <TextInput
          keyboardType='number-pad'
          style={styles.input}
          value={peso}
          onChangeText={handlePeso}
          placeholder='Ex: 60'
        />
        </View>
        
       
   
    </View>
        <TouchableOpacity onPress={handleCalc} style={styles.button} >
          <Text style={styles.textButton}>Calcular</Text>
       </TouchableOpacity >  
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width:width,
    height:height,
    display:"flex",
    justifyContent: "center",
    alignItems:"stretch",
    textAlign:"center", 
    backgroundColor: 'white',
  },
  containerImg: {
   marginBottom:20,
    width:"100%",
    height:"30%",
    display:"flex",
    justifyContent: "center",

    textAlign:"center", 
    backgroundColor: 'white',
  },
  container2: {
    
    width:"100%",
    height:"65%",
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign:"center", 
    backgroundColor: 'white',
  },
  container3: {

    alignSelf:"center",
    width:"100%",
    height:"20%",
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign:"center", 
    backgroundColor: 'white',
  },
  input: {
    color:"black",
    borderRadius:8,
    marginBottom:3,
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign:"center",
    fontSize:20,
    width:"99%",
    height: "55%",
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
  button: {
    marginTop:"10%",
    borderRadius:8,
    marginBottom:"20%",
    alignSelf:"center",
    textAlignVertical:"center",
    width:"99%",
    height:"9%",
    borderColor: 'dark-blue',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: '#0E347B',
  },
  textButton: {
    fontSize: 20,
    borderRadius:20,
    padding:4,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    justifyContent: "center",
    textAlign:"center",
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#5E6568',
  },
  IMC:{
    backgroundColor:"white"
  },
  result:{  
    
    color:"black",
    fontWeight:"800",
    alignSelf:"center",
    padding:1,
    fontSize:18,  
  },
  resultInfo:{
    paddingTop:"50%",
    color:"black",
    fontWeight:"800",
    alignSelf:"center",
    fontSize:18,
  },
  containerInfo: {
    paddingTop:"5%",
    paddingLeft: "30%",
    paddingRight: "30%",
   
    width:"100%",
    height:"40%",
    
  },
  imageImc:{
    alignSelf:'center',
    display:'flex',
    width:"99%",
    height:"75%",
  }


});

export default App;




