/* build-ref:delta */

import { Image, StyleSheet, Text, View } from "react-native";

export default function MovieDetailsCard({ movie }: any) {
  if (!movie) return null;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: IMAGE_BASE + movie.poster_path }}
        style={styles.poster}
      />

      <Text style={styles.title}>{movie.title}</Text>

      <Text style={styles.meta}>
        ⭐ {movie.vote_average} ({movie.vote_count})
      </Text>

      <Text style={styles.meta}>⏱ {movie.runtime} mins</Text>

      <Text style={styles.genres}>
        {movie.genres?.map((g) => g.name).join(", ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  poster: {
    width: "100%",
    height: 420,
    borderRadius: 12,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 12,
  },
  meta: {
    marginTop: 4,
    color: "#666",
  },
  genres: {
    marginTop: 8,
    fontWeight: "500",
  },
});
