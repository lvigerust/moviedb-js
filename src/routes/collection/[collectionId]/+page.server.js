import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchCollectionDetails = async (id) => {
		const collectionDetailsRes = await fetch(
			`https://api.themoviedb.org/3/collection/${id}?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const collectionDetailsData = await collectionDetailsRes.json();
		return collectionDetailsData;
	};

	return {
		collectionDetails: fetchCollectionDetails(params.collectionId)
	};
};
