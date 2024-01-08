let resultFoundElement = document.querySelector(".results-data");
const searchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
console.log(searchResults);
console.log(searchResults.length);
if(searchResults.length === 0) {
  resultFoundElement.innerHTML = `
    <h2>Search Results</h2>
    <p><span class="result-found"></span> No results found for your search </p>
    <button onclick ="goToHomeResults()"> Explore More </button>
  `;
} else {
  displaySearchResults(searchResults);
}

function goToHomeResults() {
  window.location.href = "index.html";
}

function displaySearchResults(results) {
  resultFoundElement.innerHTML = `
    <h2>Search Results</h2>
    <p><span class="result-found"></span> ${results.length} results found for your search </p>
    `;
  




  let printTheseResults = document.querySelector('.all-results');
  printTheseResults.innerHTML = "";
  results.forEach(product => {
  let innerHTML =
      `
      <div class="product-details">
      <img class="product-image" src = "images/${product.image}1.jpg" onclick="openProductDetails('${product.id}')">

        <div class="product-info">
          <h1> ${product.brand}</h1>
          <p> ${product.name}</p>
        </div>
        
        <div class="rating-product">
          <img src = "images/ratings/rating-${product.rating.stars * 10}.png">
          ${product.rating.count}
        </div>
        <div class="cost-product">
          <p> &#8377 <span class="span-1"> ${product.cost.new}</span></p>
          <p>&#8377<span class="span-2"> ${product.cost.old}</span></p>
          <p>( ${product.cost.discount}% off)</p>
        </div>
        <p> Free Devilvery by URBAN CANVAS</p>
      </div>
      `;
      printTheseResults.innerHTML += innerHTML;
      console.log(product.name);
      console.log(product.model);
  });
}

var theProductId = "";
function openProductDetails(productId) {
  theProductId = productId;
  const selectedProduct = searchResults.find(product => product.id === productId);
  
  // Constructing the URL with parameters
  var redirectURL="";
  if(selectedProduct.model === "foot-wear") {
      redirectURL = `shoe-look.html?id=${selectedProduct.id}&brand=${selectedProduct.brand}&name=${selectedProduct.name}&stars=${selectedProduct.rating.stars}&count=${selectedProduct.rating.count}&new=${selectedProduct.cost.new}&old=${selectedProduct.cost.old}&discount=${selectedProduct.cost.discount}&image=${selectedProduct.image}`;
  } else if(selectedProduct.model === "accessories") {
      redirectURL = `watch-look.html?id=${selectedProduct.id}&brand=${selectedProduct.brand}&name=${selectedProduct.name}&stars=${selectedProduct.rating.stars}&count=${selectedProduct.rating.count}&new=${selectedProduct.cost.new}&old=${selectedProduct.cost.old}&discount=${selectedProduct.cost.discount}&image=${selectedProduct.image}`;
  }
  else {
      redirectURL = `casual-outfit-look.html?id=${selectedProduct.id}&brand=${selectedProduct.brand}&name=${selectedProduct.name}&stars=${selectedProduct.rating.stars}&count=${selectedProduct.rating.count}&new=${selectedProduct.cost.new}&old=${selectedProduct.cost.old}&discount=${selectedProduct.cost.discount}&image=${selectedProduct.image}`;
  }

  // Redirecting to the casual-outfit-look.html page with parameters
  window.location.href = redirectURL;
}

var keyPressEnterRow = document.querySelector(".search-input");
keyPressEnterRow.addEventListener(("keydown"), function(event) {
  if(event.key === "Enter") {
    searchItems();
  }
})


function goToHomePage() {
  window.location.href = "index.html";
}

function redirectToCollections() {
  window.location.href = "index.html#collections-page";
}

function scrollToSection(sectionId) {
  var targetElement = document.getElementById("contact-page");
  targetElement.scrollIntoView({behavior:"smooth"});
}

function getCartLength() {
  const cartLength = JSON.parse(localStorage.getItem('cartLength')) || 0;
  return cartLength;
}
document.addEventListener('DOMContentLoaded', function() {
  const cartValueElements = document.querySelectorAll(".cart-value");
  cartValueElements.forEach((cartValueElement) => {
  cartValueElement.textContent = getCartLength();
});
})