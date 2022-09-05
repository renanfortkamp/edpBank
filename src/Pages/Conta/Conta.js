import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Conta({ route }) {
    const { cliente } = route.params;
    return (
        <View>
            <Text>Conta: {cliente.numeroConta}</Text>
            <Text>Nome: {cliente.name}</Text>
            <Text>Cpf: {cliente.cpf}</Text>
            <Text>Cep: {cliente.cep}</Text>
            <Text>Email: {cliente.email}</Text>
            <Text>Saldo Conta: {cliente.saldo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
