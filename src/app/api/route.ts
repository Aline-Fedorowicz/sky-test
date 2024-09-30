// routes.ts
export const dynamic = 'force-static';

const API_KEY = 'a861522134785030dabad19a01334daf';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const movieId = url.searchParams.get('id') || '550'; // ID padrão para o filme "Fight Club"

    try {
        const response = await fetch(`${MOVIE_URL}/${movieId}?api_key=${API_KEY}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro: ${errorData.status_message}`);
        }
        const data = await response.json();
        return new Response(JSON.stringify({ data }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
