import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import { 
    Background, 
    Logo, 
    AreaInput, 
    Input,
    SubmitBtn,
    SubmitTxt,
    Link,
    LinkTxt
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  //  const navigation = useNavigation();
  //  const { signIn } = useContext(AuthContext);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

  //  function handleLogin(){
  //   signIn(email, password);
  //  }

  return (
    <Background>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Logo source={require('../../assets/Banco.png')} />

            <AreaInput>
              <Input
                placeholder="Digite seu email"
                placeholderTextColor="#898989"
                value={email}
                onChangeText={ (text) => setEmail(text) }
              />
              <Input
                placeholder="Digite sua senha"
                placeholderTextColor="#898989"
                value={password}
                onChangeText={ (text) => setPassword(text) }                
                secureTextEntry={true}
              />
            </AreaInput>

            {/* <SubmitBtn activeOpacity={0.7} onPress={ handleLogin }>
              <SubmitTxt>Acessar</SubmitTxt>
            </SubmitBtn> */}

            <Link>
              {/* <LinkTxt onPress={ () => navigation.navigate('SignUp') }>Criar uma conta gratuita</LinkTxt> */}
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}
