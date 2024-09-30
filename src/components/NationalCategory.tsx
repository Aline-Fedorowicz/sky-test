import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LockKeyhole } from 'lucide-react';


const API_KEY = 'a861522134785030dabad19a01334daf';
const MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const NationalCategory: React.FC = () => {
  const slider = React.useRef(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${MOVIE_URL}?api_key=${API_KEY}&query=national`);
        const data = await response.json();
        setMovies(data.results.slice(0, 15));
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,

        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7,
        },
      },
    ],
  };

  return (
    <div className="home-slide-space w-full relative mt-8 xs:pl-4 md:pl-14 2xl:pl-20">
      <small className='category-title mb-4 flex flex-col'>Coletania nacional</small>
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
                <LockKeyhole size={15} className='mb-1 text-white' />
              </div>




            </div>
          </div>



        ))}
      </Slider>



    </div>
  );
};

export default NationalCategory;
