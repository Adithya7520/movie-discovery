import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_BASE_URL } from "../constants/api";
type props = {
  movie: any;
  onPress: () => void;
};
const MovieCard = ({ movie, onPress }: props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: movie.poster_path
            ? IMAGE_BASE_URL + movie.poster_path
            : undefined,
        }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {movie.title}
        </Text>
        <Text style={styles.rating}>⭐ {movie.vote_average}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    margin: 12,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
  },
  image: {
    height: 220,
    width: "100%",
  },
  info: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  rating: {
    marginTop: 4,
    color: "#666",
  },
});
