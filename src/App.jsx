import { useState } from "react";

// mana bularni, id, title, category, price, discountPercentage, brand, images, thumbnail, qolsin qoganlarini ochirvor

const App = ()=> {

    const [products, setProducts] = useState([
      {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 7.17,
        "brand": "Essence",
        "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
      },      
      {
        "id": 2,
        "title": "Eyeshadow Palette with Mirror",
        "category": "beauty",
        "price": 19.99,
        "discountPercentage": 5.5,
        "brand": "Glamour Beauty",
        "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
      },      
      {
        "id": 3,
        "title": "Powder Canister",
        "category": "beauty",
        "price": 14.99,
        "discountPercentage": 18.14,
        "brand": "Velvet Touch",
        "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
      },      
      {
        "id": 4,
        "title": "Red Lipstick",
        "category": "beauty",
        "price": 12.99,
        "discountPercentage": 19.03,
        "brand": "Chic Cosmetics",
        "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
      },      
      {
        "id": 5,
        "title": "Red Nail Polish",
        "category": "beauty",
        "price": 8.99,
        "discountPercentage": 2.46,
        "brand": "Nail Couture",
        "images": [
          "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
      },      
      {
        "id": 6,
        "title": "Calvin Klein CK One",
        "category": "fragrances",
        "price": 49.99,
        "discountPercentage": 0.32,
        "brand": "Calvin Klein",
        "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png"
      },      
      {
        "id": 7,
        "title": "Chanel Coco Noir Eau De",
        "category": "fragrances",
        "price": 129.99,
        "discountPercentage": 18.64,
        "brand": "Chanel",
        "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
      },      
      {
        "id": 8,
        "title": "Dior J'adore",
        "category": "fragrances",
        "price": 89.99,
        "discountPercentage": 17.44,
        "brand": "Dior",
        "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
      },      
      {
        "id": 9,
        "title": "Dolce Shine Eau de",
        "category": "fragrances",
        "price": 69.99,
        "discountPercentage": 11.47,
        "brand": "Dolce & Gabbana",
        "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png"
      },      
      {
        "id": 10,
        "title": "Gucci Bloom Eau de",
        "category": "fragrances",
        "price": 79.99,
        "discountPercentage": 8.9,
        "brand": "Gucci",
        "images": [
          "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
      },      
      {
        "id": 11,
        "title": "Annibale Colombo Bed",
        "category": "furniture",
        "price": 1899.99,
        "discountPercentage": 0.29,
        "brand": "Annibale Colombo",
        "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
      },      
      {
        "id": 12,
        "title": "Annibale Colombo Sofa",
        "category": "furniture",
        "price": 2499.99,
        "discountPercentage": 18.54,
        "brand": "Annibale Colombo",
        "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png"
      },      
      {
        "id": 13,
        "title": "Bedside Table African Cherry",
        "category": "furniture",
        "price": 299.99,
        "discountPercentage": 9.58,
        "brand": "Furniture Co.",
        "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png"
      },      
      {
        "id": 14,
        "title": "Knoll Saarinen Executive Conference Chair",
        "category": "furniture",
        "price": 499.99,
        "discountPercentage": 15.23,
        "brand": "Knoll",
        "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
      },      
      {
        "id": 15,
        "title": "Wooden Bathroom Sink With Mirror",
        "category": "furniture",
        "price": 799.99,
        "discountPercentage": 11.22,
        "brand": "Bath Trends",
        "images": [
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
          "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png"
      },      
      {
        "id": 16,
        "title": "Apple",
        "category": "groceries",
        "price": 1.99,
        "discountPercentage": 1.97,
        "brand": "Apple",
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
      },      
      {
        "id": 17,
        "title": "Beef Steak",
        "category": "groceries",
        "price": 12.99,
        "discountPercentage": 17.99,
        "brand": "Beef",
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
      },
      {
        "id": 18,
        "title": "Cat Food",
        "category": "groceries",
        "price": 8.99,
        "discountPercentage": 9.57,
        "brand": "Cat Food",
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
      },            
      {
        "id": 19,
        "title": "Chicken Meat",
        "category": "groceries",
        "price": 9.99,
        "discountPercentage": 10.46,
        "brand": "Chicken",
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
          "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
      },
      {
        "id": 20,
        "title": "Cooking Oil",
        "category": "groceries",
        "price": 4.99,
        "discountPercentage": 18.89,
        "brand": "Cooking Essentials",
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png"
      },            
      {
        "id": 21,
        "title": "Cucumber",
        "category": "groceries",
        "price": 1.49,
        "discountPercentage": 11.44,
        "rating": 4.71,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png"
      },
      {
        "id": 22,
        "title": "Dog Food",
        "category": "groceries",
        "price": 10.99,
        "discountPercentage": 18.15,
        "rating": 2.74,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png"
      },
      {
        "id": 23,
        "title": "Eggs",
        "category": "groceries",
        "price": 2.99,
        "discountPercentage": 5.8,
        "rating": 4.46,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png"
      },                  
      {
        "id": 24,
        "title": "Fish Steak",
        "category": "groceries",
        "price": 14.99,
        "discountPercentage": 7,
        "rating": 4.83,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png"
      },
      {
        "id": 25,
        "title": "Green Bell Pepper",
        "category": "groceries",
        "price": 1.29,
        "discountPercentage": 15.5,
        "rating": 4.28,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png"
      },
      {
        "id": 26,
        "title": "Green Chili Pepper",
        "category": "groceries",
        "price": 0.99,
        "discountPercentage": 18.51,
        "rating": 4.43,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png"
      }, 
      {
        "id": 27,
        "title": "Honey Jar",
        "category": "groceries",
        "price": 6.99,
        "discountPercentage": 1.91,
        "rating": 3.5,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png"
      },
      {
        "id": 28,
        "title": "Ice Cream",
        "category": "groceries",
        "price": 5.49,
        "discountPercentage": 7.58,
        "rating": 3.77,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
          "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
          "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
          "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png"
      },
      {
        "id": 29,
        "title": "Juice",
        "category": "groceries",
        "price": 3.99,
        "discountPercentage": 5.45,
        "rating": 3.41,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png"
      },
      {
        "id": 30,
        "title": "Kiwi",
        "category": "groceries",
        "price": 2.49,
        "discountPercentage": 10.32,
        "images": [
          "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png"
      }
      ])

const deleteBTN = (id) => {
  setProducts(products.filter((product) => product.id != id))
}

  return (
   <div className="wrapper">
  <h1>Products</h1>
  {products.length == 0 && <h1>Tugadi</h1>}
  <ul className="product-colum">
{products.map((product) => {
  return (
    <li className="list" key={product.id}>
      <img className="product-img" src={product.thumbnail} alt="" width={200} height={200}/>
      <h2>{product.title}</h2>
      <h3>DiscountPercentage: {product.discountPercentage}</h3>
      <h4>Category: {product.category}</h4>
      <h4>Price: {product.price}</h4>
      <button className="product-btn" onClick={()=> deleteBTN(product.id)}>delete</button>
    </li>
  )
})}
  </ul>
   </div>
  )
}

export default App
