import { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

const movies = [
    {
        name: "The Shawshank Redemption",
        genre: "Drama",
        releaseYear: 1994,
        rating: 9.3
    },
    {
        name: "The Godfather",
        genre: "Crime",
        releaseYear: 1972,
        rating: 9.2
    },
    {
        name: "The Dark Knight",
        genre: "Action",
        releaseYear: 2008,
        rating: 9.0
    }
]

export function WatchlistProvider({ children }) {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (movie) => {
        setWatchlist((prev) => [...prev, movie]);
    };

    const removeFromWatchlist = (movie) => {
        setWatchlist((prev) => prev.filter((item) => item.id !== movie.id));
    };

    const value = {
        watchlist,
        addToWatchlist,
        removeFromWatchlist
    };

    return <WatchlistContext.Provider value={value}> {children} </WatchlistContext.Provider>;
}

export function useWatchlist() {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error("useWatchlist must be used inside a WatchlistProvider");
    }
    return context;
}