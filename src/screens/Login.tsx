import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { useHistory } from "react-router-dom";

// import setTabRoot from '../utils/login';

const bg = require("../assets/img/bg.png");
const whiteBG = require("../assets/img/white_bg.png");
const logo = require("../assets/img/logo.png");
const user = require("../assets/img/user.png");
const padlock = require("../assets/img/padlock.png");
const fingerprint = require("../assets/img/fingerprint.png");

const Login = () => {
  const [isKeyboardUp, setIsKeyboardUp] = useState(false);

  const _keyboardDidShow = () => setIsKeyboardUp(true);

  const _keyboardDidHide = () => setIsKeyboardUp(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      _keyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      _keyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const history = useHistory();

  return (
    <ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={whiteBG}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
            marginTop: isKeyboardUp ? 0 : 100
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image source={logo} style={{ width: 84, height: 102 }} />
            <Text
              style={{
                fontFamily: "IRANSansMobileFaNum-Medium",
                fontSize: 16.5,
                color: "#dc2249"
              }}
            >
              راه آهن جمهوری اسلامی ایران
            </Text>
            <Text
              style={{
                fontFamily: "IRANSansMobileFaNum-Medium",
                fontSize: 16.5,
                color: "#dc2249"
              }}
            >
              پرتال سازمانی
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 228,
                height: 45,
                borderColor: "#999999",
                borderWidth: 1.5,
                borderRadius: 4,
                flexDirection: "row-reverse"
              }}
            >
              <View style={{ justifyContent: "center", marginHorizontal: 9 }}>
                <Image
                  source={user}
                  style={{ width: 13, height: 17, resizeMode: "contain" }}
                />
              </View>
              <TextInput
                underlineColorAndroid="transparent"
                style={{ flex: 1 }}
              />
            </View>
            <View
              style={{
                width: 228,
                height: 45,
                borderColor: "#999999",
                borderWidth: 1.5,
                borderRadius: 4,
                marginTop: 8.5,
                flexDirection: "row-reverse"
              }}
            >
              <View style={{ justifyContent: "center", marginHorizontal: 9 }}>
                <Image
                  source={padlock}
                  style={{ width: 13, height: 17, resizeMode: "contain" }}
                />
              </View>
              <TextInput
                underlineColorAndroid="transparent"
                style={{ flex: 1 }}
              />
            </View>
            <TouchableWithoutFeedback
              onPress={() => history.push("/main/educaion")}
            >
              <View
                style={{
                  width: 228,
                  height: 45,
                  backgroundColor: "#808080",
                  borderRadius: 4,
                  marginTop: 22,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "IRANSansMobileFaNum-Medium",
                    color: "white",
                    fontSize: 12
                  }}
                >
                  ورود
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <Image
              source={fingerprint}
              style={{
                width: 35,
                height: 35,
                resizeMode: "cover",
                marginBottom: 10.5
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Login;
