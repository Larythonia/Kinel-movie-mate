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
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

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

      setTitle("");
      setRating("");

    } catch (error) {
      console.log("POST Error:", error.message);
    }
  }

  if (loading) {
    return (
       <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full    animate-spin">
      </div>
    </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl">Movie App</h1>

       <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Movie rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="button"
        onClick={createMovie}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

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