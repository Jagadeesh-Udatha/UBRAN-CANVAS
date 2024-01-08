document.addEventListener('DOMContentLoaded', function() {
  const cartValueElements = document.querySelectorAll(".cart-value");
  cartValueElements.forEach((cartValueElement) => {
  cartValueElement.textContent = getCartLength();
  
});
})

let scrollInterval;
let isPageVisible = true;

const imagesScroll = document.querySelector(".images-scroll");

const duration = 1500;
const interval = 2000;

const totalImages = document.querySelectorAll(".images-scroll > div").length;

const imageContainerWidth = 100 / totalImages;

let currentPosition = 0;

function scrollImages() {
  if (isPageVisible) {
    currentPosition = (currentPosition + imageContainerWidth) % 100;
    imagesScroll.style.transition = `transform ${duration}ms ease-in-out`;

    imagesScroll.style.transform = `translateX(-${currentPosition}%)`;
    if (currentPosition === 0) {
      imagesScroll.style.transition = "none";
    }
  }
}

scrollInterval = setInterval(scrollImages, interval);

document.querySelectorAll(".images-scroll > div").forEach(function (imageContainer) {
  imageContainer.style.width = `${imageContainerWidth}%`;
});

function startScroll() {
  scrollInterval = setInterval(scrollImages, interval);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

// Rest of your existing code...

function handleVisibilityChange() {
  if (document.hidden) {
    isPageVisible = false;
    stopScroll();
  } else {
    isPageVisible = true;
    startScroll();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange);



var headerInfo = document.getElementById("header-div-id");
var cartValueElement = document.querySelector(".cart-value");
var storedCartValue; // Variable to store the cart value before changing the header

function handleScroll() {
  storedCartValue = getCartLength(); // Store the current cart value

  headerInfo.classList.add("changing-the-header");
  if (window.scrollY > 500) {
    console.log("header changed to small");
    headerInfo.innerHTML =
      `
      <div class="right-header right-header-shape">
        <li onclick="scrollToSection('whole-page');">HOME</li>
        <li onclick="scrollToSection('collections-page');">COLLECTIONS</li>
        <li onclick="scrollToSection('about-page')"> ABOUT </li>
      </div>
    `;
  } else {
    console.log("header changed")
    const cartLength = getCartLength();
    headerInfo.innerHTML =
      `
      <header>
      <nav class="main-header">
        <div class="outer-left-header">
          <div class="left-header">
            <a href = "index.html">
              <img class="main-logo" src = "images/UrbanCanvasLogo.png" alt = "Fashion-Logo">
            </a>
            <p class="logo-name">
              URBAN CANVAS
            </p>
          </div>
          <div class="mobile-menu">
            <div class="add-to-cart">
              <div class="cart-value-div">
                <p class="cart-value">${cartLength}</p>
              </div>
              <a href="cart.html"><img class="add-to-cart-img" src="images/AddToCart.png" alt="Cart"></a>
            </div>
          </div>

      </div>
          
        
        <div class="results-bar">
            <input type = "text" placeholder="Search For Products & more" class="search-input">
            <img onclick = "searchItems();" src = "images/icons/icons8-search-64.png">
          
        </div>
        <div class="right-header">
          <li onclick = "scrollToSection('collections-page');">COLLECTIONS</li>
          <li onclick = "scrollToSection('about-page')">CONTACT</li>
          <li>MY ACCOUNT</li>
          
          <div class="add-to-cart" >
            <div class="cart-value-div">
              <p class="cart-value"> ${cartLength} </p>
            </div>
            <a href = "cart.html"><img class="add-to-cart-img" src="images/AddToCart.png" alt = "Cart"></a>

          </div>
        </div>
  
      </nav>
    </header>
      `;
  }

  cartValueElement.textContent = storedCartValue;
  
}
window.addEventListener('scroll', handleScroll);

function scrollToSection(sectionId) {
  let targetElement = document.getElementById(sectionId);
  targetElement.scrollIntoView({behavior:"smooth"});
}

function goToMensCasual(){
  window.location.href = "mens-casuals.html";
}
function goToMensFormal(){
  window.location.href = "mens-formals.html";
}

function goToKidsCollection() {
  window.location.href  = "kids-collection.html";
}

function goToLadiesCollection() {
  window.location.href  = "ladies-collection.html";
}

function goToAccessoriesCollection() {
  window.location.href  = "accessories-collection.html";

}

function goToFootWearCollection() {
  window.location.href  = "shoe-collection.html";
}

function goToCartSection() {
  window.location.href = "cart.html";
}

function getCartLength() {
  const cartLength = JSON.parse(localStorage.getItem('cartLength')) || 0;
  return cartLength;
}



var keyPressEnterRow = document.querySelector(".search-input");
keyPressEnterRow.addEventListener(("keydown"), function(event) {
  if(event.key === "Enter") {
    searchItems();
  }
})

const allProducts = [...casualShirts, ...formalShirts, ...shoeCollection, ...accessoriesCollection, ...kidsCollection, ...ladiesCollection];
localStorage.setItem("allProducts", JSON.stringify(allProducts));

