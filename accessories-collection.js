const accessoriesCollection = [
  {
    id : "09142431",
    brand : "IPhone",
    image : "accesories/IPHONE/IP-",
    name : "Apple iPhone 15 (128 GB)- Black",
    rating : {
      stars :5,
      count :"5,558",
    },
    cost : {
      new : 499,
      old : "1,499",
      discount : 67,
    },
    model: "accessories",
    property: {
      color: 'black',
      person : "iphone",
    }
  },
  {
    id : "09142432",
    brand : "AIRPODS",
    image : "accesories/AIRPODS/AP-",
    name : "Airbuds 2nd Generation Apple",
    rating : {
      stars :4.5,
      count :"3,550",
    },
    cost : {
      new : 709,
      old : "2,249",
      discount : 68,
    },
    model: "accessories",
    property: {
      color: 'white',
      person : "apple earpods",
    }
  },
  {
    id : "09142433",
    brand : "CASIO",
    image : "accesories/CASIO/CS-",
    name : "Casio Stylish Watch",
    rating : {
      stars :4.5,
      count :420,
    },
    cost : {
      new : 549,
      old : "1,399",
      discount : 61,
    },
    model: "accessories",
    property: {
      color: 'white',
      person : "watch",
    }
  },
  {
    id : "09142434",
    brand : "LOUIS",
    image : "accesories/LOUIS/LS-",
    name : "LOUIS Watch Black Stylish Watch",
    rating : {
      stars :4.0,
      count :150,
    },
    cost : {
      new : 379,
      old : "1,499",
      discount : 75,
    },
    model: "accessories",
    property: {
      color: 'black',
      person : "watch",
    }
  },
  {
    id : "09142435",
    brand : "EARPODS",
    image : "accesories/EARPODS/EP-",
    name : "Apple Earpods for Comfort",
    rating : {
      stars :3.5,
      count :"2,674",
    },
    cost : {
      new : 494,
      old : "999",
      discount : 51,
    },
    model: "accessories",
    property: {
      color: 'white',
      person : "airpods earpods",
    }
  },

  {
    id : "09142436",
    brand : "REALME",
    image : "accesories/REALME/RM-",
    name : "REALME Mobile Dark Blue",
    rating : {
      stars :4,
      count :"2,194",
    },
    cost : {
      new : 999,
      old : "999",
      discount : 0,
    },
    model: "accessories",
    property: {
      color: 'black',
      person : "mobile",
    }
  },

  {
    id : "09142437",
    brand :"POCO",
    image : "accesories/POCO/PC-",
    name : "POCO C55 (Power Black, 6GB RAM, 128GB Storage)",
    rating : {
      stars :4.5,
      count :"780",
    },
    cost : {
      new : 229,
      old : "1,800",
      discount : 87,
    },
    model: "accessories",
  },

  {
    id : "09142438",
    brand : "IQOO",
    image : "accesories/IQOO/IQ-",
    name : "iQOO Z7s 5G by vivo (Pacific Night, 8GB RAM, 128GB Storage",
    rating : {
      stars :3.5,
      count :"2,865",
    },
    cost : {
      new : 999,
      old : "999",
      discount :0,
    },
    model: "accessories",
    property: {
      color: 'black',
      person : "IQOO",
    }
  }
];

var innerHTML = "";
var insertIntoHTML = document.getElementById("all-men-casual");
accessoriesCollection.forEach((outfit) => {
  innerHTML = 
  `
  <div class="product-details">
  <img class="product-image" src = "images/${outfit.image}1.jpg" onclick="openProductDetails('${outfit.id}')">

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


function openProductDetails(productId) {
  theProductId = productId;
  const selectedProduct = accessoriesCollection.find(product => product.id === productId);

  // Constructing the URL with parameters
  const redirectURL = `watch-look.html?id=${selectedProduct.id}&brand=${selectedProduct.brand}&name=${selectedProduct.name}&stars=${selectedProduct.rating.stars}&count=${selectedProduct.rating.count}&new=${selectedProduct.cost.new}&old=${selectedProduct.cost.old}&discount=${selectedProduct.cost.discount}&image=${selectedProduct.image}`;

  // Redirecting to the casual-outfit-look.html page with parameters
  window.location.href = redirectURL;
}


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