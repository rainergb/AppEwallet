import styled from "styled-components";

export const Background = styled.View`
    flex: 1;
    background-color: #121212;
`;

export const Container = styled.KeyboardAvoidingView`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const Logo = styled.Image`
    height: 200;
    width: 220;
    margin-bottom: 35px;
`;

export const AreaInput = styled.View`
   flex-direction: column;
   width: 100%;
   align-items: center;
   justify-content: center;
`;

export const Input = styled.TextInput`
   background-color: #121212;
   width: 90%;
   font-size: 17px;
   border-radius: 8px;
   padding: 15px;
   border-width: 1px;
   border-color: #898989;
   margin-bottom: 10px;
   color: #fdfdfd;
`;

export const SubmitBtn = styled.TouchableOpacity`
    background-color: #4E9AD3;
    width: 90%;
    border-radius: 8px;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
`;

export const SubmitTxt = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fdfdfd;
`;

export const Link = styled.TouchableOpacity`

`;

export const LinkTxt = styled.Text`
    font-size: 16px;
    color: #898989;
`;