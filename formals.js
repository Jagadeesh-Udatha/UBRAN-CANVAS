formalShirts = [
  {
    id : "0914240m",
    brand : "9Time Blazer",
    image : "mens-formal/9times Blazer/9B-",
    name : "9times Mens Blazer Black Coat Latest Stylish",
    rating : {
      stars :3.5,
      count :"1,658",
    },
    cost : {
      new : 999,
      old : "2,299",
      discount : 43,
    },model: "formals shirts blazers",
    property: {
      color: 'black',
      person : "boy men",
    }
  },
  {
    id : "0914240n",
    brand : "Clothestic",
    image : "mens-formal/Clothestic/CS-",
    name : "Clothestic Full Sleeve Formal Shirt Men",
    rating : {
      stars :5,
      count :"350",
    },
    cost : {
      new : 649,
      old : "999",
      discount : 35,
    },model: "formals plain marron",
    property: {
      color: 'maroon',
      person : "boy men",
    }
  },
  {
    id : "0914240o",
    brand : "BlackBerrys",
    image : "mens-formal/Black Berry/BB-",
    name : "Blackberrys Men Shirt Formal",
    rating : {
      stars :4.5,
      count :420,
    },
    cost : {
      new : 943,
      old : "1,599",
      discount : 41,
    },model: "formals shirts shirts",
    property: {
      color: 'black',
      person : "boy men",
    }
  },
  {
    id : "0914240p",
    brand : "Arrow Men",
    image : "mens-formal/Arrow Men/AM-",
    name : "Arrow Men Blazer Formal Attire",
    rating : {
      stars :4.0,
      count :15,
    },
    cost : {
      new : 779,
      old : "1,499",
      discount : 48,
    },model: "formals shirts blazers",
    property: {
      color: 'white',
      person : "boy men",
    }
  },
  {
    id : "0914240q",
    brand : "Peter England",
    image : "mens-formal/Peter England/PE-",
    name : "Peter England Men's Slim Fit 100% Cotton",
    rating : {
      stars :3.5,
      count :574,
    },
    cost : {
      new : 719,
      old : "1,299",
      discount : 45,
    },model: "formals shirts plain",
    property: {
      color: 'blue',
      person : "boy men",
    }
  },

  {
    id : "0914240r",
    brand : "Global Rang",
    image : "mens-formal/Global Rang/GR-",
    name : "GLOBALRANG Men's Slim Fit Formal White Satin",
    rating : {
      stars :4,
      count :"435",
    },
    cost : {
      new : 379,
      old : "4,999",
      discount : 92,
    },model: "formals shirts plain",
    property: {
      color: 'white',
      person : "boy men",
    }
  },

  {
    id : "0914240s",
    brand :"Aldeno",
    image : "mens-formal/Aldeno/AD-",
    name : "Aldeno Men Printed Formal White & Blue",
    rating : {
      stars :4.5,
      count :"780",
    },
    cost : {
      new : 779,
      old : "1,499",
      discount :48,
    },model: "formals shirts plain",
    property: {
      color: 'white',
      person : "boy men",
    }
  },

  {
    id : "0914240t",
    brand : "Diverse",
    image : "mens-formal/Diverse/DV-",
    name : "Diverse Men's Slim Fit Formal Shirt",
    rating : {
      stars :3.5,
      count :"2,865",
    },
    cost : {
      new : 649,
      old : "1,199",
      discount :46,
    },model: "formals shirts plain",
    property: {
      color: 'yellow',
      person : "boy men",
    }
  }

  ,

  {
    id : "0914240u",
    brand : "Amazon Brand - Symbol",
    image : "mens-formal/Amazon Brand/AB-",
    name : "Men's Knit Blazer Jacket",
    rating : {
      stars :4,
      count :"7,297",
    },
    cost : {
      new : 999,
      old : "1,599",
      discount :41,
    },model: "formals shirts blazers",
    property: {
      color: 'maroon',
      person : "boy men",
    }
  },

  {
    id : "0914240v",
    brand : "Van Heusen",
    image : "mens-formal/Van Heusen/VH-",
    name : "Van Heusen Men's Formal Shirt",
    rating : {
      stars :4,
      count :"2,079",
    },
    cost : {
      new : 779,
      old : "1,499",
      discount :48,
    },model: "formals shirts plain",
    property: {
      color: 'blue',
      person : "boy men",
    }
  },

  {
    id : "0914240w",
    brand : "ManQ",
    image : "mens-formal/ManQ/MQ-",
    name : "MANQ Men's Slim Fit Formal Shirt",
    rating : {
      stars :4,
      count :"246",
    },
    cost : {
      new : 719,
      old : "1,299",
      discount :45,
    },model: "formals shirts plain",
    property: {
      color: 'black',
      person : "boy men",
    }
  },

  {
    id : "0914240x",
    brand : "ManQ Blazer",
    image : "mens-formal/ManQ Blazer/MB-",
    name : "MANQ Blazer",
    rating : {
      stars :3.5,
      count :"1,877",
    },
    cost : {
      new : 379,
      old : "4,999",
      discount :92,
    },model: "formals shirts blazers",
    property: {
      color: 'black',
      person : "boy men",
    }
  }
];

var innerHTML = "";
var insertIntoHTML = document.getElementById("all-men-casual");
formalShirts.forEach((outfit) => {
  innerHTML = 
  `
  <div class="product-details" onclick="openProductDetails('${outfit.id}')">
  <img class="product-image" src = "images/${outfit.image}1.jpg">

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
  const selectedProduct = formalShirts.find(product => product.id === productId);

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