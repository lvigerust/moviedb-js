import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchCollectionDetails = async (id) => {
		const collectionDetailsRes = await fetch(
			`https://api.themoviedb.org/3/collection/${id}?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const collectionDetailsData = await collectionDetailsRes.json();
		return collectionDetailsData;
	};

	const getHead = async () => {
		const data = await fetchCollectionDetails(params.collectionId);
		const title = data.name;
		const description = data.overview;
		return { title, description };
	};

	return {
		collectionDetails: fetchCollectionDetails(params.collectionId),
		head: getHead()
	};
};
