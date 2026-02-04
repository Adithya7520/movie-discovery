/* build-ref:delta */

import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TextInput } from "react-native";
import MovieCard from "../src/components/MovieCard";
import { searchMovies } from "../src/service/tmdb";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const timer = setTimeout(() => fetchResults(1), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const fetchResults = async (pageNo: number) => {
    const res = await searchMovies(query, pageNo);
    setMovies(
      pageNo === 1 ? res.data.results : [...movies, ...res.data.results],
    );
    setPage(pageNo + 1);
  };

  return (
    <>
      <TextInput
        placeholder="Search movies..."
        value={query}
        onChangeText={setQuery}
      />

      {movies.length === 0 && query ? (
        <Text>No results found</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onPress={() => router.push(`/movie/${item.id}`)}
            />
          )}
          onEndReached={() => fetchResults(page)}
        />
      )}
    </>
  );
}
