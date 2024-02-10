
import axios from "axios";
// ----Request function----
export async function getPhotos() {
    refs.spanLoader.classList.remove('hidden');
    const response = await axios.get( 'https://pixabay.com/api/',{
        params: {
            key: "31960717-8c82352157f13e8057b3011e3",
            q: `${inputSearch}`,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: perPage,
            page: page},
    });
    const {hits, totalHits } = response.data;
    refs.spanLoader.classList.add('hidden');
    return {hits, totalHits};
}