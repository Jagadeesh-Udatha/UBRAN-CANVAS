function searchItems() {
  const searchInput = document.querySelector(".search-input").value.toLowerCase();
   // Assuming casualShirts is your array of products
  //  const allProducts = [...casualShirts, ...formalShirts, ...shoeCollection, ...accessoriesCollection, ...kidsCollection, ...ladiesCollection];
    var allProducts = JSON.parse(localStorage.getItem("allProducts"));
    console.log(allProducts);

  // Filter products based on partial search input
  const searchResults = allProducts.filter(product => {
    console.log(product.model);
    const productName = product.name.toLowerCase();
    const productModel = (product.model || '').toLowerCase();
    const propertyString = JSON.stringify(product.property || {}).toLowerCase();

    return (
      productName.includes(searchInput) ||
      productModel.includes(searchInput) ||
      propertyString.includes(searchInput)
    );
    });
  displaySearchResultsFor(searchResults);
}


function displaySearchResultsFor(searchResults) {
  localStorage.setItem('searchResults', JSON.stringify(searchResults));
  window.location.href = "results.html";
}