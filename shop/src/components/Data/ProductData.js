const fetchProducts = async () => {
  try {
    const response = await fetch('https://657983e51acd268f9af93e52.mockapi.io/items');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default fetchProducts;