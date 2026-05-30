import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const primaryColor = useThemeColor({}, "primary");

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, "red", "orange", "green"]}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
