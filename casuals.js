casualShirts = [
  {
    id : "0914240a",
    brand : "Dennis Lingo",
    image : "mens-casuals/Diverse/DV-",
    name : "Dennis Lingo Men Casual Shirt",
    rating : {
      stars :3.5,
      count :"1,658",
    },
    cost : {
      new : 749,
      old : "2,299",
      discount : 67,
    },
    model: "casuals shirts",
    property: {
      color: 'white',
      person : "boy men",
    }
  },
  {
    id : "0914240b",
    brand : "Miraan",
    image : "mens-casuals/Miraan/MML-",
    name : "MEN's Long Sleeve Casual Denim Shirt(SIGDENIM)",
    rating : {
      stars :3.5,
      count :"1,508",
    },
    cost : {
      new : 589,
      old : "2,715",
      discount : 78,
    },
    model: "casuals shirts",
    property: {
      color: 'red white',
      person : "boy men",
    }
  },
  {
    id : "0914240c",
    brand : "Leriya Fashion",
    image : "mens-casuals/Leriya Fashion/LF-",
    name : "Textured Shirts for Men || Casual Shirt for Men",
    rating : {
      stars :4,
      count :420,
    },
    cost : {
      new : 449,
      old : "1,999",
      discount : 78,
    },model: "casuals shirts",
    property: {
      color: 'black',
      person : "boy men",
    }
  },
  {
    id : "0914240d",
    brand : "Dhruvi Trendz",
    image : "mens-casuals/DHRUVI TRENDZ/DT-",
    name : "Textured Slim Fit Casual Shirt",
    rating : {
      stars :4.5,
      count :300,
    },
    cost : {
      new : 805,
      old : "1,699",
      discount : 60,
    },model: "casuals shirts",
    property: {
      color: 'marron',
      person : "boy men",
    }
  },
  {
    id : "0914240e",
    brand : "Majestic Man",
    image : "mens-casuals/Majestic Man Shirt/MMC-",
    name : "Majestic Man Men Slim Fit Casual Shirt",
    rating : {
      stars :3.5,
      count :574,
    },
    cost : {
      new : 499,
      old : "1,499",
      discount : 60,
    },model: "casuals shirts checks",
    property: {
      color: 'gray',
      person : "boy men",
    }
  },

  {
    id : "0914240f",
    brand : "Dennis Lingo",
    image : "mens-casuals/Dennis lingo/DL-",
    name : "Dennis Lingo Men's Checkered Slim Fit Cotton",
    rating : {
      stars :3.5,
      count :"3,675",
    },
    cost : {
      new : 599,
      old : "2,499",
      discount : 76,
    },model: "casuals shirts checks",
    property: {
      color: 'blue',
      person : "boy men",
    }
  },

  {
    id : "0914240g",
    brand : "Symbol Premium",
    image : "mens-casuals/Symbol premium/SP-",
    name : "Symbol Premium Men's Allday Fresh Buttondown ",
    rating : {
      stars :4.5,
      count :"75",
    },
    cost : {
      new : 999,
      old : "2,299",
      discount :43,
    },model: "casuals shirts plain",
    property: {
      color: 'black',
      person : "boy men",
    }
  },

  {
    id : "0914240h",
    brand : "U-TURN",
    image : "mens-casuals/U-turn/UT-",
    name : "U-TURN Casual Shirt for Men|| Shirt for Men",
    rating : {
      stars :4,
      count :"467",
    },
    cost : {
      new : 399,
      old : "1,599",
      discount :77,
    },model: "casuals shirts floral",
    property: {
      color: 'white',
      person : "boy men",
    }
  }

  ,

  {
    id : "0914240i",
    brand : "Allen Solly",
    image : "mens-casuals/Allen Solly/AL-",
    name : "Allen Solly Men's Shirt",
    rating : {
      stars :4,
      count :"7,297",
    },
    cost : {
      new : 943,
      old : "1,599",
      discount :41,
    },model: "casuals shirts",
    property: {
      color: 'blue',
      person : "boy men",
    }
  },

  {
    id : "0914240j",
    brand : "Van Heusen",
    image : "mens-casuals/Van Heusen/VH-",
    name : "Van Heusen Men's Casual Shirt",
    rating : {
      stars :4,
      count :"2,079",
    },
    cost : {
      new : 779,
      old : "1,499",
      discount :48,
    },model: "casuals shirts plain",
    property: {
      color: 'green',
      person : "boy men",
    }
  },

  {
    id : "0914240k",
    brand : "GloryBoyZ",
    image : "mens-casuals/Glory Boyz/GB-",
    name : "GLORYBOYZ Half Sleeve Relaxed Fit Tropical Shirt",
    rating : {
      stars :4,
      count :"246",
    },
    cost : {
      new : 719,
      old : "1,299",
      discount :45,
    },model: "casuals shirts floral",
    property: {
      color: 'blue',
      person : "boy men",
    }
  },

  {
    id : "0914240l",
    brand : "Lymio",
    image : "mens-casuals/LYMIO/LM-",
    name : "Lymio Casual Shirt for Men|| Shirt for Men",
    rating : {
      stars :3.5,
      count :"1,877",
    },
    cost : {
      new : 379,
      old : "4,999",
      discount :92,
    },model: "casuals shirts vacation",
    property: {
      color: 'blue',
      person : "boy men",
    }
  }
];

var innerHTML = "";
var insertIntoHTML = document.getElementById("all-men-casual");
casualShirts.forEach((outfit) => {
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
  const selectedProduct = casualShirts.find(product => product.id === productId);

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

