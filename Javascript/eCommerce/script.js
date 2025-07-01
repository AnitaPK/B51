const products = [
  {
    id: 1,
    name: "shrug",
    description: "Women Casual Solid Regular Shrug",
    category: "women",
    price: 499,
    image: "https://m.media-amazon.com/images/I/5169zshcD7L.jpg",
  },
  {
    id: 2,
    name: "Men's Shirt",
    description: "Formy cool blue luxury satin cotton shirt",
    category: "Men's",
    price: 799,
    image:
      "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP5180.jpg?v=1685610639",
  },
  {
    id: 3,
    name: "jacket ",
    description:
      "Women’s jackets come in a wide variety of styles designed to suit every occasion.",
    Category: "Women",
    price: 799,
    image:
      "https://i5.walmartimages.com/asr/615808ac-253f-44cd-a69e-8d8d9fd47e91.27de1643230b368f4b426a731eb1e3b3.jpeg",
  },
  {
    id: 4,
    name: "Jacket",
    description: "Men Jacket for Summer",
    category: "Men",
    price: 899,
    image: "https://m.media-amazon.com/images/I/41Z2ahq2rWL.jpg",
  },
  {
    id: 5,
    name: "saree",
    description: "Janasya-Womens-Ethnic-Paithani-Unstitched saree",
    category: "women",
    price: 4000,
    image: "https://m.media-amazon.com/images/I/81LE4e6CViL._SY741_.jpg",
  },
  {
    id: 6,
    name: "saree",
    description: "Pure Soft Silk With gold jari",
    category: "Women",
    price: 1626,
    image:
      "https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/mor-bangadi-paithani-silk-handloom-saree-1545.jpg",
  },
  {
    id: 7,
    name: "T-Shirt",
    description:
      "KOTTY Women's Solid Slim Fit T-Shirt - Classic Round Neck, Stretchable Cotton Tee",
    category: "women",
    price: 266,
    image: "https://m.media-amazon.com/images/I/61hLb3DSS4L._SY741_.jpg",
  },
  {
    id: 8,
    name: "T-shirt",
    description: "Cotrasen Men's T-Shirts Cotton Short Sleeve T Shirts for Men",
    category: "Men",
    price: 699,
    image: "https://m.media-amazon.com/images/I/81S+B6F1WnL._AC_SX569_.jpg",
  },
  {
    id: 9,
    name: "Saree",
    description: "Pink Span Cotton Jacquard Woven Saree",
    category: "Women",
    price: 2499,
    image:
      "https://i.pinimg.com/736x/4a/b9/52/4ab952a8d036a66c047c91350b2b17a5.jpg",
  },
  {
    id: 10,
    name: "Nike T-Shirt",
    description:
      "Fabric Description : Single Jersey - Classic, lightweight jersey fabric comprising 100% cotton.",
    category: "Women",
    price: 504,
    image: "https://m.media-amazon.com/images/I/61nchBK4y5L._SY741_.jpg",
  },
];

function filterByCategory(cName){
  console.log(cName);
  p_data1 = localGetProducts()
  prodByCat =  p_data1.filter((x,index)=>x.category == cName)
  renderProducts(prodByCat);
}

function LowToHigh(){
   p_data1 = localGetProducts()
    const prodLowToHigh =  p_data1.sort((a,b)=> a.price - b.price)
    renderProducts(prodLowToHigh);
}

function HighToLow(){
      p_data1 = localGetProducts()
    const prodHighToLow =  p_data1.sort((a,b)=> b.price - a.price)
    renderProducts(prodHighToLow);
}

function searchByName(){
      sName = document.querySelector("#sName").value
      p_data1 = localGetProducts()
      filterByName = p_data1.filter((p)=> p.name.toLowerCase().includes(sName) )
      renderProducts(filterByName);
}


const cart = [];

// totalPrice = 0

function localSaveCart(cartFromLocal=cart ) {
  localStorage.setItem("cart51", JSON.stringify(cartFromLocal));
}


function localGetCart() {
  return JSON.parse(localStorage.getItem("cart51"));
}
// function setTotalPriceToLocal(totalPrice=0){
//   localStorage.setItem('TotalPrice', JSON.stringify(totalPrice))

// }
// function getTotalPriceFromLocal(){
//   return JSON.parse(localStorage.getItem('TotalPrice'))
// }

function localSaveProducts(p = products) {
  localStorage.setItem("products51", JSON.stringify(p));
}

function localGetProducts() {
  return JSON.parse(localStorage.getItem("products51"));
}



pNameElmt  = document.querySelector("#pName") 
pDescriptionElmt = document.querySelector("#pDescription") 
pImageElmt = document.querySelector("#pImage") 
pCategoryElmt  = document.querySelector("#pCategory")
pPriceElmt =document.querySelector("#pPrice")




const totalPriceElmt = document.querySelector("#totalPrice")
const addproductsElmt = document.querySelector("#addproducts");
const cartLengthElmt = document.querySelector("#cartLength");


function AddNewProdcut(){
  newProdcutName = pNameElmt.value;
  newProductDescription = pDescriptionElmt.value
  newProductImage = pImageElmt.value
  newCategory = pCategoryElmt.value
  newProdcutPrice = pPriceElmt.value


  newProduct =   {
    id: Date.now(),
    name: newProdcutName,
    description: newProductDescription,
    category: newCategory,
    price: Number(newProdcutPrice),
    image: newProductImage,
  }
console.log(newProduct);
  p_data = localGetProducts()
  p_data.push(newProduct)
  localSaveProducts(p_data)
renderProducts();
}


function addToCart(p_id) {
  console.log("*****", p_id);
  p_data1 = localGetProducts()
  index = p_data1.findIndex((p) => p.id == p_id);
  console.log(index);
  prod_cart = p_data1[index];
  cartFromLocal =   localGetCart();

  cartFromLocal.push(prod_cart);

  //     newCartProd = products.filter((p)=> p.id == p_id)
  // console.log(newCartProd);
  // cart.push(newCartProd[0])

  // cartProdByFind = products.find((p)=> p.id == p_id)
  // console.log(cartProdByFind,"cartProdByFind");
  // cart.push(cartProdByFind);

  cartLength = cartFromLocal.length;
  cartLengthElmt.textContent = cartLength;
  console.log(cart);
  localSaveCart(cartFromLocal);
  const productsRender1 = localGetProducts();

  renderCart(productsRender1);


}

function renderProducts(productsRender = products) {
  // const productsRender1 = localGetProducts();
  addproductsElmt.innerHTML = productsRender
    .map(
      (product, index) => `
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src=${product.image} class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text"><small class="text-muted">Price: ₹ ${product.price}</small></p>
                                <button class="btn btn-warning" onclick="addToCart(${product.id})">Add To Cart </button>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
`
    )
    .join("");

}

// localSaveProducts();
// renderProducts();

const cartTableElmt = document.querySelector("#cartTable");
function removeOfCart(ID){
  cartFromLocalArray = localGetCart()
  const index = cartFromLocalArray.findIndex((p)=> p.id == ID)
  cartFromLocalArray.splice(index, 1)
  localSaveCart(cartFromLocalArray)
  renderCart();

}

function renderCart() {
  const cartFromLocal = localGetCart();
  console.log("cart from local storage", cartFromLocal, typeof cartFromLocal);
  cartTableElmt.innerHTML = cartFromLocal.map(
    (p,i) => `
                            <tr>
                              <th scope="row">${i+1}</th>
                              <td>${p.name}</td>
                              <td>${p.price}</td>
                              <td><button class="btn btn-danger" onclick="removeOfCart(${p.id})">Remove from cart</button></td>
                            </tr>
    `
  ).join('');
  let totalPrice1 = 0
for(let i=0; i<cartFromLocal.length; i++){
  console.log(totalPrice1);
  totalPrice1 += cartFromLocal[i].price 
}
totalPriceElmt.textContent = totalPrice1;

}

window.addEventListener("DOMContentLoaded", () => {
const v1 = localGetCart()
const v2 = localGetProducts()
  if(!v1 || !v2){
  localSaveProducts();
  localSaveCart();
  // totalPrice()
  }
  if (addproductsElmt) {
    renderProducts();
  }
  if (cartTableElmt) {
    renderCart();
    // totalPrice()
  }
});
