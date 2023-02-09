/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch('http://localhost:3000/movies/');
    const movies = await res.json();
   
    return { movies };
  }