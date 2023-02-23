
import Results from "@/components/Results";
export const dynamic = "force-dynamic";
// we use this to get the api key from env.local that is not uploaded to github
const API_KEY = process.env.API_KEY;
export default async function Home(props) {
  console.log(props.searchParams)
  const genre = props.searchParams.genre || "fetchTrending";
  console.log(genre);
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
    console.log(`https://api.themoviedb.org/3/${  genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`)
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }
  const data =await res.json();
  const results = data.results;

  return (
    <Results results={results} />
  )
}

export async function getServerSideProps(context){
  
}
