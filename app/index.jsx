import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

import icedCoffeeImg from "@/assets/images/CS-2.jpg";

const app = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={style.image}
      >
        <Text style={style.title}>Coffee Shop</Text>
        
        <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Our Menu</Text>
          </Pressable>
        </Link>

        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>

       
      </ImageBackground>
    </View>
  );
};

export default app;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "none",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
  },
  button: {
    height: 60,
    width:150,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    marginBottom:50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});
