import { Text, View } from "react-native";

export default function PantallaConfiguracion() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Configuración</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Opciones de configuración de la aplicación.</Text>
    </View>
  );
}
