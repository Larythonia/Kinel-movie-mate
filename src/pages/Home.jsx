import Header from "../component/Header";
import Button from "../component/Button";

function Home()  {
  const HomeCardsData = [
    {
      icon: "🔥",
      title: "Trending Now",
      description: "See what everyone is watching this week"
    },
    {
      icon: "🔍",
      title: "Smart search",
      description: "Find exactly what you're looking for"
    },
    {
      icon: "📋",
      title: "Your Watchlist",
      description: "See movies and track what you want to watch"
    }
  ];

  const movieData = [
    {
      image: "src/Images/movie1.webp",
      title: "Games of Thrones",
      genre: "Action",
      description: "Brief description of Games of Thrones",
      button: "+ Watchlist"
    },
    {
      image: "src/Images/movie1.webp",
      title: " Games of Thrones",
      genre: "Action",
      description: "Brief description of Games of Thrones",
      button: "+ Watchlist"
    },
    {
      image: "src/Images/movie1.webp",
      title: "Games of Thrones",
      genre: "Action",
      description: "Brief description of Games of Thrones",
      button: "+ Watchlist"
    },
    {
      image: "src/Images/movie1.webp",
      title: "Games of Thrones",
      genre: "Action",
      description: "Brief description of Games of Thrones",
      button: "+ Watchlist"
    },
  ]
      

   return(
  

    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 gap-8">
          <span className="text-8xl mt-20">🎬</span>
          {/* <Headline /> */ }
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            Your personal{""}<span className="text-red-500">movie companion</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Discover trending films, search by title, save movies to your watchlist, and never forget what to watch next.
          </p>

          <div className="flex items-center justify-center gap-4 ">
            <Button label="Browse Movies"/>
            <Button label="My Watchlist"/>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
                  {HomeCardsData.map((item) => (
          <article className="bg-slate-500 p-4 text-white rounded-sm"> 
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
               ))}
        </div >

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 w-full max-w-3xl">
          {movieData.map((movie) => (
            <article className="bg-slate-700 p-4 text-white rounded-sm text-left">
              <div>
                 <img src={movie.image} alt={movie.title} className="display-block w-full h-auto mb-4 rounded"/> 
              </div>
              <div>
                <h2 className="font-bold">{movie.title}</h2>
                <p>{movie.description}</p>
               <Button moviebtn={movie.button} />

              </div>
            </article>
          ))}
        </div>

    </main>

  );
}

export default Home;