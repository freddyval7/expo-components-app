import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { ScrollView } from "react-native";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <ScrollView>
      <ThemedView>
        <ThemedCard>
          <ThemedTextInput
            placeholder="Nombre Completo"
            autoCapitalize={"words"}
            autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          <ThemedTextInput
            placeholder="Correo electrónico"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <ThemedTextInput
            placeholder="Teléfono"
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
        </ThemedCard>

        <ThemedCard>
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard>
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard>
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard>
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard>
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
        <ThemedCard>
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
      </ThemedView>
    </ScrollView>
  );
};
export default TextInputsScreen;
