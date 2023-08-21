import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import ComponenteCalcular from "./src/ComponenteCalcular";
import { useState } from "react";

export default function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");



  const buttons = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ",",
    "+/-",
    "=",
  ];

  function handleInput(buttonPressionado) {
    if (
      (buttonPressionado === "*") |
      (buttonPressionado === "/") |
      (buttonPressionado === "+") |
      (buttonPressionado === "-")
    ) {
      setPrimeiroNumero(primeiroNumero + " " + buttonPressionado + " ");
      return;
    }

    if (buttonPressionado === "DEL") {
      console.log(primeiroNumero);
      setPrimeiroNumero(primeiroNumero.substring(0, primeiroNumero.length - 1));
      return;
    }

    if (buttonPressionado === ".") {
      setPrimeiroNumero(primeiroNumero + buttonPressionado);
      return;
    }

    if (buttonPressionado === "+/-") {
      return;
    }

    if (buttonPressionado === "AC") {
      setSegundoNumero("");
      setPrimeiroNumero("");
      return;
    }

    if (buttonPressionado === "=") {
      setSegundoNumero(primeiroNumero + " = ");
      calcular();
      return;
    }
    setPrimeiroNumero(primeiroNumero + buttonPressionado);
  }

  function calcular() {
    const dividirNumero = primeiroNumero.split(" ");
    const operador = dividirNumero[1];

    console.log(dividirNumero);

    if (operador === "*") {
      setPrimeiroNumero(
        (parseFloat(dividirNumero[0]) * parseFloat(dividirNumero[2])).toString()
      );
    }

    if (operador === "/") {
      setPrimeiroNumero(
        (parseFloat(dividirNumero[0]) / parseFloat(dividirNumero[2])).toString()
      );
    }

    if (operador === "+") {
      setPrimeiroNumero(
        (parseFloat(dividirNumero[0]) + parseFloat(dividirNumero[2])).toString()
      );
    }

    if (operador === "-") {
      setPrimeiroNumero(
        (parseFloat(dividirNumero[0]) - parseFloat(dividirNumero[2])).toString()
      );
    }
  }

  const operadores = new Set(["+", "-", "*", "/", "="]);
  const complementos = new Set(["AC", "DEL", "%", "+/-"]);

  return (
    // <View style={styles.container}>
    //   <ComponenteCalcular n1={76} n2={10} />
    //   <StatusBar style="auto" />
    // </View>

    <View style= {styles.container}>
      <View style={styles.result}>
        <Text style={styles.historyText}>{segundoNumero}</Text>
        <Text style={styles.resultText}>{primeiroNumero}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity
            onPress={() => handleInput(button)}
            key={button}
            style={[
              styles.button,
              operadores.has(button) ? { backgroundColor: "#ed9121" } : null,
              complementos.has(button) ? { backgroundColor: "#999999"} : null,
            ]}
          >
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  result: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 300,
    backgroundColor: "#000000",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#000000",
    
  },
  button: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#454545",
    minHeight: 100,
    minWidth: 69,
    borderRadius: 100,
    margin: 9,
    
  },
  textButton: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  resultText: {
    fontWeight: "100",
    fontSize: 80,
    margin: 10,
    alignSelf: "flex-end",
    color: 'white',
  },
  historyText: {
    fontSize: 22,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: "flex-end",
    color: 'white',
  },
});
