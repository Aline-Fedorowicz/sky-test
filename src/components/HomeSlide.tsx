import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';


const API_KEY = 'a861522134785030dabad19a01334daf';
const MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const HomeSlide: React.FC = () => {
  const slider = React.useRef(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${MOVIE_URL}?api_key=${API_KEY}&query=movies`);
        const data = await response.json();
        setMovies(data.results.slice(0, 5));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <div className="home-slide-space w-full relative">
      <Slider ref={slider} {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className="flex  w-full">
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
                className={`relative object-cover  ${focusedIndex === movie.id ? 'home-slide-active' : 'home-slide'}`}
              />




            </div>
          </div>



        ))}
      </Slider>

      <div className=" justify-between absolute top-44 left-0 right-0 px-4 xs:hidden md:flex">
        <button onClick={() => slider?.current?.slickPrev()} className="flex-grow-0">
          <div className="slick-bg">
            <ChevronLeft size={54} className="text-primary" />
          </div>
        </button>
        <button onClick={() => slider?.current?.slickNext()} className="flex-grow-0">
          <div className="slick-bg">
            <ChevronRight size={54} className="text-primary" />
          </div>
        </button>
      </div>

    </div>
  );
};

export default HomeSlide;
