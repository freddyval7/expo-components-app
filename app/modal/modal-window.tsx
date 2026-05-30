import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView
      bgColor="#A52182"
      className="justify-center items-center flex-1"
    >
      <ThemedText>ModalScreen</ThemedText>

      <ThemedButton
        className="mx-4 mt-4"
        onPress={() => router.push("/modal/modal-window-2")}
      >
        Otro Modal
      </ThemedButton>

      <ThemedButton className="mx-4 mt-4" onPress={() => router.dismiss()}>
        Cerrar
      </ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
