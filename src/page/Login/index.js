import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from "react-native"
import { useNavigation } from "@react-navigation/core";
import { useUser } from '../../context';

import * as Location from 'expo-location';

import logo from "../../assets/icon.png";
import api from "../../services/api";
import Button from '../../components/Button';
import { Container, TextInputLogin, ImageLogin, ButtonLogin } from './styled';


export default function Login() {
    const { setUser, setLocation } = useUser();
    const [Name, setName] = useState("agrotools");
    const [errorMsg, setErrorMsg] = useState(null);

    const { navigate } = useNavigation()

    const _requestLocation = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }

    useEffect(() => {
        _requestLocation()
    },[])

    const handleApi = async () => {
        if(Name !== "" || Name !== null){
            try {   
                //agrotools
               const { data } = await api.get('users?user='+Name) 

                if(data[0].user === Name) {
                    setUser(data[0]);
                    navigate("Home");
                }

            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Você não preencheu com o usuario válido")
        }
    }

    const updateUser = (e) => {
        setName(e)
    }

    return (
        <Container>
            <KeyboardAvoidingView 
                style={{ 
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%" 
                }}
            >
                <ImageLogin 
                    source={logo}
                />

                <TextInputLogin 
                    value={Name}
                    onChangeText={updateUser}
                    placeholder="Coloque aqui seu usuario"
                />

                <ButtonLogin>
                    <Button
                        title="Entrar"
                        height="48px"
                        onPress={handleApi}
                    />
                </ButtonLogin>
            </KeyboardAvoidingView>
        </Container>
    );
}
