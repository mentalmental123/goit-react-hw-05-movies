import {getMovies} from '../../API/MOVIE/TMDBAPI'
import {searchParams} from '../../API/MOVIE/TMDBAPI'


async function getTopMovies() {
    searchParams.set("q",  '/trending/get-trending');
    const movies = await getMovies();
    console.log(movies);
    

}



export default function Movies() {
    return (
        <ul className="">
           movies page
        </ul>
    )
}