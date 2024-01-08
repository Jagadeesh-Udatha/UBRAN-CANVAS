ladiesCollection = [
  {
    id : "09142401",
    brand : "Deebaco",
    image : "ladies Collection/Debbaco/DB-",
    name : "DEEBACO Women's Solid Cotton Flex Smocking Dress",
    rating : {
      stars :5,
      count :"558",
    },
    cost : {
      new : 699,
      old : "2,499",
      discount : 72,
    },model: "skirts",
    property: {
      color: 'white',
      person : "girl ladies womens",
    }
  },
  {
    id : "09142402",
    brand : "Rare",
    image : "ladies Collection/Rare/RR-",
    name : "Rare Women Casual Dress",
    rating : {
      stars :4.5,
      count :"3,550",
    },
    cost : {
      new : 734,
      old : "2,099",
      discount : 65,
    },model: "western",
    property: {
      color: 'gray',
      person : "girl ladies womens",
    }
  },
  {
    id : "09142403",
    brand : "Safoors",
    image : "ladies Collection/Safoora/SF-",
    name : "Women's Front Open Black Dress for Summer",
    rating : {
      stars :4.5,
      count :420,
    },
    cost : {
      new : 499,
      old : "799",
      discount : 38,
    },model: "tops",
    property: {
      color: 'black',
      person : "girl ladies womens",
    }
  },
  {
    id : "09142404",
    brand : "Presha",
    image : "ladies Collection/Presha/PR-",
    name : "PRESHA Women's Fit and Flare Pure Cotton",
    rating : {
      stars :4.0,
      count :150,
    },
    cost : {
      new : 699,
      old : "2,499",
      discount : 72,
    },model: "tops",
    property: {
      color: 'blue',
      person : "girl ladies womens",
    }
  },
  {
    id : "09142405",
    brand : "Uptownie",
    image : "ladies Collection/Uptownie/UP-",
    name : "Uptownie Lite Women's Shirt Maxi",
    rating : {
      stars :3.5,
      count :"2,674",
    },
    cost : {
      new : 499,
      old : "2,499",
      discount : 80,
    },model: "tops",
    property: {
      color: 'blue',
      person : "girl ladies womens",
    }
  },

  {
    id : "09142406",
    brand : "Yashika",
    image : "ladies Collection/Yashika/YS-",
    name : "Yashika Women Art Silk Sarees",
    rating : {
      stars :4,
      count :"2,194",
    },
    cost : {
      new : 269,
      old : "1,167",
      discount : 77,
    },model: "sarees",
    property: {
      color: 'yellow',
      person : "girl ladies womens",
    }
  },

  {
    id : "09142407",
    brand :"C J Enterprise",
    image : "ladies Collection/CJEnterprise/CJ-",
    name : "C J Enterprise Women's Pure Kanjivaram Silk Saree",
    rating : {
      stars :4.5,
      count :"780",
    },
    cost : {
      new : 465,
      old : "999",
      discount : 53,
    },model: "sarees",
    property: {
      color: 'maroon',
      person : "girl ladies womens",
    }
  },

  {
    id : "09142408",
    brand : "Sourbh",
    image : "ladies Collection/SOURBH/SR-",
    name : "Sourbh Cotton Blend Mix 2-Tone Foil Printed Womens",
    rating : {
      stars :3.5,
      count :"2,865",
    },
    cost : {
      new : 499,
      old : "1,999",
      discount :75,
    },model: "satees",
    property: {
      color: 'blue',
      person : "girl ladies womens",
    }
  }

  ,

  {
    id : "09142409",
    brand : "Mirchi Fashion",
    image : "ladies Collection/Mirchi/MR-",
    name : "Mirchi Fashion Women's Latest Chiffon Batik Printed",
    rating : {
      stars :4,
      count :"7,297",
    },
    cost : {
      new : 429,
      old : "2,799",
      discount :85,
    },model: "sarees",
    property: {
      color: 'pink',
      person : "girl ladies womens",
    }
  },

  {
    id : "091424010",
    brand : "Glory",
    image : "ladies Collection/GLORY/GL-",
    name : "Glory Sarees",
    rating : {
      stars :4,
      count :"2,079",
    },
    cost : {
      new : 299,
      old : "2,399",
      discount :88,
    },model: "sarees",
    property: {
      color: 'red',
      person : "girl ladies womens",
    }
  },

  {
    id : "091424011",
    brand : "Vimal Jooney",
    image : "ladies Collection/Jonney/JN-",
    name : "Vimal Jonney Dryfit Lycra Solid Blue T-shirt",
    rating : {
      stars :4,
      count :"574",
    },
    cost : {
      new : 219,
      old : "999",
      discount :78,
    },model: "gym top pant",
    property: {
      color: 'dark blue',
      person : "girl ladies womens",
    }
  },

  {
    id : "091424012",
    brand : "Pratham",
    image : "ladies Collection/PRATHAM/PM-",
    name : "Pratham Stylish and Latest Silk Sarees",
    rating : {
      stars :4.5,
      count :"780",
    },
    cost : {
      new : 465,
      old : "999",
      discount : 53,
    },model: "sarees",
    property: {
      color: 'gray',
      person : "girl ladies womens",
    }
  }
];

var innerHTML = "";
var insertIntoHTML = document.getElementById("all-men-casual");
ladiesCollection.forEach((outfit) => {
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
  const selectedProduct = ladiesCollection.find(product => product.id === productId);

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