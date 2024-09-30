// carousel.tsx
import React, { useEffect, useState } from 'react';


const Carousel = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('marvel'); // Altere aqui para "Marvel"

    const API_KEY = 'a861522134785030dabad19a01334daf';
    const MOVIE_URL = 'https://api.themoviedb.org/3/search/movie'; // Mudei para o endpoint de busca

    useEffect(() => {
        const loadMovies = async (query: string) => {
            try {
                const response = await fetch(`${MOVIE_URL}?api_key=${API_KEY}&query=${query}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`Erro: ${errorData.status_message}`);
                }
                const data = await response.json();
                console.log('Movies fetched:', data.results);
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadMovies(searchTerm); // Carregue os filmes ao iniciar com o termo "Marvel"
    }, [searchTerm]); // Atualize a dependência para buscar quando `searchTerm` mudar

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        console.log('Searching for:', searchTerm);

        try {
            const response = await fetch(`${MOVIE_URL}?api_key=${API_KEY}&query=${searchTerm}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Erro: ${errorData.status_message}`);
            }
            const data = await response.json();
            console.log('Search results:', data.results);
            setMovies(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="carousel">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies..."
                />
                <button type="submit"></button>
            </form>

            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div className="carousel-item" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <p>{movie.overview}</p>
                    </div>
                ))
            ) : (
                <div>No movies found.</div>
            )}
        </div>
    );
};

export default Carousel;
