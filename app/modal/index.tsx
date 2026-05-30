import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href={"/modal/modal-window"} className="mx-4">
        <ThemedText className="text-xl">Abrir modal</ThemedText>
      </Link>

      <ThemedButton
        className="mx-4 mt-4"
        onPress={() => router.push("/modal/modal-window")}
      >
        Abrir Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
