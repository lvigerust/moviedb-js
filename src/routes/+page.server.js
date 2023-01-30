import { TMDB_API_KEY } from '$env/static/private';

export const load = async () => {
	const fetchProducts = async () => {
		const productsRes = await fetch('https://dummyjson.com/products');
		const productData = await productsRes.json();
		return productData.products;
	};
	return {
		products: fetchProducts()
	};
};
