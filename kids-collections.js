kidsCollection = [
  {
    id : "09142421",
    brand : "Tagas",
    image : "kids-collection/Tagas/TG-",
    name : "Tagas Baby-Girls Dress",
    rating : {
      stars :5,
      count :"558",
    },
    cost : {
      new : 499,
      old : "1,499",
      discount : 67,
    },
    model : "kids-wear",
    property: {
      color: 'maroon',
      person : "girl",
    }
  },
  {
    id : "09142422",
    brand : "JBN Creator",
    image : "kids-collection/JBN/JN-",
    name : "JBN Creation Boys Wine COttion Silk Blend Kurta",
    rating : {
      stars :4.5,
      count :"3,550",
    },
    cost : {
      new : 709,
      old : "2,249",
      discount : 68,
    },
    model : "kids-wear",
    property: {
      color: 'maroon',
      person : "boy",
    }
  },
  {
    id : "09142423",
    brand : "SUPERMINI",
    image : "kids-collection/SUPERMINI/SM-",
    name : "Supermini boys Cotton Kurta with Dhoti-Golden",
    rating : {
      stars :4.5,
      count :420,
    },
    cost : {
      new : 549,
      old : "1,399",
      discount : 61,
    },
    model : "kids-wear",
    property: {
      color: 'yellow',
      person : "boy",
    }
  },
  {
    id : "09142424",
    brand : "The Mom Store",
    image : "kids-collection/MOM STORE/MS-",
    name : "The Mom Store Printed Cotton Full Girls 100% Cotton",
    rating : {
      stars :4.0,
      count :150,
    },
    cost : {
      new : 379,
      old : "1,499",
      discount : 75,
    },
    model : "kids-wear",
    property: {
      color: 'violet',
      person : "boy girl",
    }
  },
  {
    id : "09142425",
    brand : "Uptownie",
    image : "kids-collection/PIKKU/PK-",
    name : "Pikku Premium 100% Cotton Co-ord",
    rating : {
      stars :3.5,
      count :"2,674",
    },
    cost : {
      new : 494,
      old : "999",
      discount : 51,
    },
    model : "kids-wear",
  },

  {
    id : "09142426",
    brand : "Mi Arcus",
    image : "kids-collection/MI ARCUS/MA-",
    name : "Mi Arcus Printed Fleece Pyjama",
    rating : {
      stars :4,
      count :"2,194",
    },
    cost : {
      new : 599,
      old : "599",
      discount : 0,
    },
    model : "kids-wear",
    property: {
      color: 'skinny',
      person : "boy girl",
    }
  },

  {
    id : "09142427",
    brand :"T2F Boys",
    image : "kids-collection/T2F/TF-",
    name : "T2F Boys Cotton Hooded Neck",
    rating : {
      stars :4.5,
      count :"780",
    },
    cost : {
      new : 229,
      old : "1,800",
      discount : 87,
    },
    model : "kids-wear",
    property: {
      color: 'pants',
      person : "boy girl",
    }
  },

  {
    id : "09142428",
    brand : "Real Basics",
    image : "kids-collection/REAL BASICS/RB-",
    name : "Real Basics unisex child fleece",
    rating : {
      stars :3.5,
      count :"2,865",
    },
    cost : {
      new : 375,
      old : "699",
      discount :42,
    },
    model : "kids-wear",
    property: {
      color: 'blue',
      person : "boy girl",
      property: {
        color: 'violet',
        person : "girl",
      }
    }
  }
];

var innerHTML = "";
var insertIntoHTML = document.getElementById("all-men-casual");
kidsCollection.forEach((outfit) => {
  innerHTML = 
  `
  <div class="product-details" onclick="openProductDetails('${outfit.id}')">
  <img class="product-image" src = "images/${outfit.image}1.jpg" >

    <div class="product-info">
      <h1> ${outfit.brand}</h1>
      <p> ${outfit.name}</p>
    </div>
    
    <div class="rating-product">
      <img src = "images/ratings/rating-${outfit.rating.stars * 10}.png">
      ${outfit.rating.count}
    </div>
    <div class="cost-product">
      <p> &#8377 <span class="span-1"> ${outfit.cost.new}</span></p>
      <p>&#8377<span class="span-2"> ${outfit.cost.old}</span></p>
      <p>( ${outfit.cost.discount}% off)</p>
    </div>
    <p> Free Devilvery by URBAN CANVAS</p>
  </div>
  `;

  insertIntoHTML.innerHTML+=innerHTML;
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

var theProductId = "";

function openProductDetails(productId) {
  theProductId = productId;
  const selectedProduct = kidsCollection.find(product => product.id === productId);

  // Constructing the URL with parameters
  const redirectURL = `casual-outfit-look.html?id=${selectedProduct.id}&brand=${selectedProduct.brand}&name=${selectedProduct.name}&stars=${selectedProduct.rating.stars}&count=${selectedProduct.rating.count}&new=${selectedProduct.cost.new}&old=${selectedProduct.cost.old}&discount=${selectedProduct.cost.discount}&image=${selectedProduct.image}`;

  // Redirecting to the casual-outfit-look.html page with parameters
  window.location.href = redirectURL;
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

var keyPressEnterRow = document.querySelector(".search-input");
keyPressEnterRow.addEventListener(("keydown"), function(event) {
  if(event.key === "Enter") {
    searchItems();
  }
})