import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, LockKeyhole, ShoppingCart } from 'lucide-react';


const API_KEY = 'a861522134785030dabad19a01334daf';
const MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const HorrorCategory: React.FC = () => {
  const slider = React.useRef(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${MOVIE_URL}?api_key=${API_KEY}&query=horror`); // Altere "avengers" para o que deseja buscar
        const data = await response.json();
        setMovies(data.results.slice(0, 7));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <div className="home-slide-space w-full  relative mt-8 xs:pl-4 md:pl-14 2xl:pl-0">
      <small className='category-title mb-4 flex flex-col'>Os mais temidos</small>
      <Slider ref={slider} {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className="flex  w-full relative">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                tabIndex={0}
                onFocus={() => {

                  setFocusedIndex(movie.id);
                }}
                onBlur={() => {

                  setFocusedIndex(null);
                }}
                onMouseEnter={() => setFocusedIndex(movie.id)}
                onMouseLeave={() => setFocusedIndex(null)}
                className="relative category-slide"
              />
              <div className='circle-stroke absolute top-2 right-3 flex justify-center items-center'>
                <ShoppingCart size={15} className=' text-white' />
              </div>




            </div>
          </div>



        ))}
      </Slider>



    </div>
  );
};

export default HorrorCategory;
