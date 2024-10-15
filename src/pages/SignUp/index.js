import { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Platform, ActivityIndicator } from "react-native";
import { 
  Background, 
  Logo, 
  AreaInput, 
  Input,
  SubmitBtn,
  SubmitTxt,
  Link,
  LinkTxt,
  Container
} from "../SignIn/styles";
import { AuthContext } from "../../contexts/auth";


export default function SignUp() {

  const { signUp, loadingAuth } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    if(nome === '' || email === '' || password === '') return;

    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container
        behavior={Platform.os === 'ios' ? 'padding' : ''}
        enabled
      >
            <Logo source={require('../../assets/Banco.png')} />
            
            <AreaInput>
              <Input
                placeholder="Nome Completo"
                placeholderTextColor="#898989"
                value={nome}
                onChangeText={ (text) => setNome(text) }
              />
              <Input
                placeholder="Digite seu email"
                placeholderTextColor="#898989"
                value={email}
                onChangeText={ (text) => setEmail(text) }
              />
              <Input
                placeholder="Crie sua senha"
                placeholderTextColor="#898989"
                value={password}
                onChangeText={ (text) => setPassword(text) }
                secureTextEntry={true}
              />
            </AreaInput>

            <SubmitBtn activeOpacity={0.7} onPress={handleSignUp}>
              {
                loadingAuth ? (
                  <ActivityIndicator size={20} color="#fff" />
                ) : (
                  <SubmitTxt>Cadastrar</SubmitTxt>
                )
              }
            </SubmitBtn>

      </Container>      
    </Background>
  );
}