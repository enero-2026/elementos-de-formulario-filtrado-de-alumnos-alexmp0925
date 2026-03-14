import { Text, View } from "react-native";

export default function PantallaPerfil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Perfil de Usuario</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>La configuración del perfil y la información se mostrarán aquí.</Text>
    </View>
  );
}
