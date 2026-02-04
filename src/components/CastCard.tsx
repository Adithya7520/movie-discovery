/* build-ref:delta */

import { Image, StyleSheet, Text, View } from "react-native";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w185";

export default function CastCard({ cast }: any) {
  if (!cast.profile_path) return null;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: IMAGE_BASE + cast.profile_path }}
        style={styles.image}
      />
      <Text numberOfLines={1} style={styles.name}>
        {cast.name}
      </Text>
      <Text numberOfLines={1} style={styles.character}>
        {cast.character}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    marginRight: 12,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 8,
    backgroundColor: "#ddd",
  },
  name: {
    marginTop: 6,
    fontWeight: "600",
  },
  character: {
    fontSize: 12,
    color: "#666",
  },
});
