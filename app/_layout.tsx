import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Popular Movies" }} />
      <Stack.Screen name="Search" options={{ title: "search moview" }} />
      <Stack.Screen name="movie/[id]" options={{ title: "Movie Details" }} />
    </Stack>
  );
}
