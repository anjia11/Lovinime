import AnimeList from "./components/AnimeList"

// pemanggilan api dengan map sehingga data bisa muncul semua seperti looping
// deklarasikan variabel di AnimeList dan inisialisasi menggunakan data dari api
const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)

  const anime = await response.json()

  return (
    <div>
      <h1>Paling Populer</h1>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
          {
            anime.data.map(data => {
              return (
                <div key={data.mal_id} className="shadow-xl">
                  <AnimeList id={data.mal_id} title={data.title} images={data.images.webp.image_url}/>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Home
