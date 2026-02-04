import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, View } from "react-native";
import MovieCard from "../src/components/MovieCard";
import { fetchPopularMovies } from "../src/service/tmdb";
export default function Page() {
  const router = useRouter();
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadMovies = async () => {
    if (loading || page > totalPages) return;

    setLoading(true);
    try {
      const response = await fetchPopularMovies(page);
      const data = response.data;
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setPage((prevPage) => prevPage + 1);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    setMovies([]);
    setPage(1);
    setTotalPages(1);
    await loadMovies();
    setRefreshing(false);
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <Button title="Search" onPress={() => router.push("/Search")} />
        <Button title="My Review" onPress={() => router.push("/MyReviews")} />
      </View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => router.push(`/movie/${item.id}`)}
          />
        )}
        onEndReached={() => loadMovies()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicator />}
      />
    </>
  );
}
