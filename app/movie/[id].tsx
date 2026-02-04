/* build-ref:delta */

import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import CastCard from "../../src/components/CastCard";
import MovieDetailsCard from "../../src/components/MovieDetailsCard";

import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieReviews,
} from "../../src/service/tmdb";

export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<any>(null);
  const [cast, setCast] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      fetchMovieDetails(id),
      fetchMovieCredits(id),
      fetchMovieReviews(id),
    ]).then(([d, c, r]) => {
      setDetails(d.data);
      setCast(c.data.cast.slice(0, 10));
      setReviews(r.data.results);
      setLoading(false);
    });
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  if (!details) return null;

  console.log("htingingingin");
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <MovieDetailsCard movie={details} />

          <Text style={styles.sectionTitle}>Cast</Text>
          <FlatList
            horizontal
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CastCard cast={item} />}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.sectionTitle}>Reviews</Text>
        </>
      }
      data={reviews}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={styles.review}>{item.content}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  review: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    color: "#333",
  },
});
