shoeCollection = [
  {
    id : "09142411",
    brand : "liberty",
    image : "shoe-collection/liberty/lb-",
    name : "Force 10 Sports Shoes for Men",
    rating : {
      stars :5,
      count :"402",
    },
    cost : {
      new : 617,
      old : "999",
      discount : 38,
    },
    model: "foot-wear",
    property: {
      color: 'blue',
      person : "boy men",
    }
  },
  {
    id : "09142412",
    brand : "Campus",
    image : "shoe-collection/campus/cp-",
    name : "Campus Mens Atlantis Running Shoes",
    rating : {
      stars :4,
      count :"750",
    },
    cost : {
      new : 750,
      old : "1,299",
      discount : 42,
    },
    model: "foot-wear",
    property: {
      color: 'blue',
      person : "boy men",
    }
  },
  {
    id : "09142413",
    brand : "Bacca Bucci",
    image : "shoe-collection/bacca/bc-",
    name : "Bacca Bucci Superstat 2.0 Men Fashion Hi Top",
    rating : {
      stars :4.5,
      count :420,
    },
    cost : {
      new : 617,
      old : "999",
      discount : 38,
    },
    model: "foot-wear",
    property: {
      color: 'black',
      person : "boy men",
    }
  },
  {
    id : "09142414",
    brand : "Sparx",
    image : "shoe-collection/sparx/sp-",
    name : "Sparx Men's Sm-661 Running Shoe",
    rating : {
      stars :4.0,
      count :1500,
    },
    cost : {
      new : 999,
      old : "1,998",
      discount : 50,
    },
    model: "foot-wear",
    property: {
      color: 'white',
      person : "boy men",
    }
  },
  {
    id : "09142415",
    brand : "Doctor",
    image : "shoe-collection/doctor/dc-",
    name : "DOCTOR Extra Soft Flexible Memory Foam Women's Shoes",
    rating : {
      stars :3.5,
      count :"2,674",
    },
    cost : {
      new : 899,
      old : "999",
      discount : 10,
    },
    model: "foot-wear",
    property: {
      color: 'blue',
      person : "girl ladies",
    }
  },

  {
    id : "09142416",
    brand : "Longwalk Store",
    image : "shoe-collection/longwalk/lw-",
    name : "Longwalk Women and Girls Sneakers",
    rating : {
      stars :3.5,
      count :"1,107",
    },
    cost : {
      new : 429,
      old : "1,298",
      discount : 67,
    },
    model: "foot-wear",
    property: {
      color: 'white',
      person : "boy men",
    }
  },

  {
    id : "09142418",
    brand : "Crocs",
    image : "shoe-collection/crocs1/cc-",
    name : "crocs Unisex-Adult Classic Stylish Slippers",
    rating : {
      stars :4,
      count :"1,107",
    },
    cost : {
      new : 998,
      old : "1,998",
      discount : 50,
    },
    model: "foot-wear",
    property: {
      color: 'white',
      person : "boy men",
    }
  },

  {
    id : "09142417",
    brand : "Crocs",
    image : "shoe-collection/crocs/cc-",
    name : "crocs Unisex-Adult Classic Sandal Floaters",
    rating : {
      stars :4,
      count :"1,107",
    },
    cost : {
      new : 429,
      old : "1,298",
      discount : 67,
    },
    model: "foot-wear",
    property: {
      color: 'red white',
      person : "boy men",
    }
  }
];

var innerHTML = "";
var insertIntoHTML = document.getElementById("all-men-casual");
shoeCollection.forEach((outfit) => {
  innerHTML = 
  `
  <div class="product-details"  onclick="openProductDetails('${outfit.id}')">
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
  const selectedProduct = shoeCollection.find(product => product.id === productId);

  // Constructing the URL with parameters
  const redirectURL = `shoe-look.html?id=${selectedProduct.id}&brand=${selectedProduct.brand}&name=${selectedProduct.name}&stars=${selectedProduct.rating.stars}&count=${selectedProduct.rating.count}&new=${selectedProduct.cost.new}&old=${selectedProduct.cost.old}&discount=${selectedProduct.cost.discount}&image=${selectedProduct.image}`;

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