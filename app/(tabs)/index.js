import { Text, View } from "react-native";

export default function PantallaInicio() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bienvenido a Gestión de Estudiantes</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Navega a la pestaña de Estudiantes para buscar y ver información de estudiantes.</Text>
    </View>
  );
}
