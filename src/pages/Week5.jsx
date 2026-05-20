import { useEffect, useState } from "react";

function ErrorMessage({ message }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-red-500 text-xl font-semibold">
        {message}
      </p>
    </div>
  );
}

function Week5() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("batman");

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();

        if (!cancelled) {
          setMovies(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [query]);

  async function createMovie() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Dune",
            rating: 7.8,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed: ${response.status}`);
      }

      const data = await response.json();
      console.log("Movie Created:", data);
    } catch (error) {
      console.log("POST Error:", error.message);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl">Movie App</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-3 rounded">
            <h3 className="font-bold">{movie.title}</h3>
            <p className="text-sm text-gray-600">
              Rating: {movie.rating} 7.0
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Week5;