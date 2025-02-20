import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      brand: "Essence",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 5.5,
      brand: "Glamour Beauty",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 18.14,
      brand: "Velvet Touch",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      discountPercentage: 19.03,
      brand: "Chic Cosmetics",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    },
    {
      id: 5,
      title: "Red Nail Polish",
      description:
        "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      category: "beauty",
      price: 8.99,
      discountPercentage: 2.46,
      brand: "Nail Couture",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      description:
        "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      category: "fragrances",
      price: 49.99,
      discountPercentage: 0.32,
      brand: "Calvin Klein",
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
    },
    {
      id: 7,
      title: "Chanel Coco Noir Eau De",
      description:
        "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      category: "fragrances",
      price: 129.99,
      discountPercentage: 18.64,
      brand: "Chanel",
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    },
    {
      id: 8,
      title: "Dior J'adore",
      description:
        "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      category: "fragrances",
      price: 89.99,
      discountPercentage: 17.44,
      brand: "Dior",
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    },
    {
      id: 9,
      title: "Dolce Shine Eau de",
      description:
        "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      category: "fragrances",
      price: 69.99,
      discountPercentage: 11.47,
      brand: "Dolce & Gabbana",
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png",
    },
    {
      id: 10,
      title: "Gucci Bloom Eau de",
      description:
        "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      category: "fragrances",
      price: 79.99,
      discountPercentage: 8.9,
      brand: "Gucci",
      images: [
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    },
    {
      id: 11,
      title: "Annibale Colombo Bed",
      description:
        "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      category: "furniture",
      price: 1899.99,
      discountPercentage: 0.29,
      brand: "Annibale Colombo",
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    },
    {
      id: 12,
      title: "Annibale Colombo Sofa",
      description:
        "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      category: "furniture",
      price: 2499.99,
      discountPercentage: 18.54,
      brand: "Annibale Colombo",
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    },
    {
      id: 13,
      title: "Bedside Table African Cherry",
      description:
        "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      category: "furniture",
      price: 299.99,
      discountPercentage: 9.58,
      brand: "Furniture Co.",
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    },
    {
      id: 14,
      title: "Knoll Saarinen Executive Conference Chair",
      description:
        "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      category: "furniture",
      price: 499.99,
      discountPercentage: 15.23,
      brand: "Knoll",
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    },
    {
      id: 15,
      title: "Wooden Bathroom Sink With Mirror",
      description:
        "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      category: "furniture",
      price: 799.99,
      discountPercentage: 11.22,
      brand: "Bath Trends",
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    },
    {
      id: 16,
      title: "Apple",
      description:
        "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      category: "groceries",
      price: 1.99,
      discountPercentage: 1.97,
      brand: "Apple",
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
    },
    {
      id: 17,
      title: "Beef Steak",
      description:
        "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      category: "groceries",
      price: 12.99,
      discountPercentage: 17.99,
      brand: "Beef",
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
    },
    {
      id: 18,
      title: "Cat Food",
      description:
        "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      category: "groceries",
      price: 8.99,
      discountPercentage: 9.57,
      brand: "Cat Food",
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    },
    {
      id: 19,
      title: "Chicken Meat",
      description:
        "Fresh and tender chicken meat, suitable for various culinary preparations.",
      category: "groceries",
      price: 9.99,
      discountPercentage: 10.46,
      brand: "Chicken",
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png",
    },
    {
      id: 20,
      title: "Cooking Oil",
      description:
        "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      category: "groceries",
      price: 4.99,
      discountPercentage: 18.89,
      brand: "Cooking Essentials",
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
    },
    {
      id: 21,
      title: "Cucumber",
      description:
        "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      category: "groceries",
      price: 1.49,
      discountPercentage: 11.44,
      rating: 4.71,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
    },
    {
      id: 22,
      title: "Dog Food",
      description:
        "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      category: "groceries",
      price: 10.99,
      discountPercentage: 18.15,
      rating: 2.74,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    },
    {
      id: 23,
      title: "Eggs",
      description:
        "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      category: "groceries",
      price: 2.99,
      discountPercentage: 5.8,
      rating: 4.46,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
    },
    {
      id: 24,
      title: "Fish Steak",
      description:
        "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      category: "groceries",
      price: 14.99,
      discountPercentage: 7,
      rating: 4.83,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
    },
    {
      id: 25,
      title: "Green Bell Pepper",
      description:
        "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      category: "groceries",
      price: 1.29,
      discountPercentage: 15.5,
      rating: 4.28,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
    },
    {
      id: 26,
      title: "Green Chili Pepper",
      description:
        "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      category: "groceries",
      price: 0.99,
      discountPercentage: 18.51,
      rating: 4.43,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
    },
    {
      id: 27,
      title: "Honey Jar",
      description:
        "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      category: "groceries",
      price: 6.99,
      discountPercentage: 1.91,
      rating: 3.5,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
    },
    {
      id: 28,
      title: "Ice Cream",
      description:
        "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      category: "groceries",
      price: 5.49,
      discountPercentage: 7.58,
      rating: 3.77,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
    },
    {
      id: 29,
      title: "Juice",
      description:
        "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      category: "groceries",
      price: 3.99,
      discountPercentage: 5.45,
      rating: 3.41,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
    },
    {
      id: 30,
      title: "Kiwi",
      description:
        "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      category: "groceries",
      price: 2.49,
      discountPercentage: 10.32,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
    },
    {
      id: 31,
      title: "Lemon",
      description:
        "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
      category: "groceries",
      price: 0.79,
      discountPercentage: 17.81,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Lemon/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Lemon/thumbnail.png",
    },
    {
      id: 32,
      title: "Milk",
      description:
        "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
      category: "groceries",
      price: 3.49,
      discountPercentage: 15.09,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Milk/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Milk/thumbnail.png",
    },
    {
      id: 33,
      title: "Mulberry",
      description:
        "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
      category: "groceries",
      price: 4.99,
      discountPercentage: 16.35,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Mulberry/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Mulberry/thumbnail.png",
    },
    {
      id: 34,
      title: "Nescafe Coffee",
      description:
        "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
      category: "groceries",
      price: 7.99,
      discountPercentage: 11.65,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/thumbnail.png",
    },
    {
      id: 35,
      title: "Potatoes",
      description:
        "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
      category: "groceries",
      price: 2.29,
      discountPercentage: 4.05,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Potatoes/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Potatoes/thumbnail.png",
    },
    {
      id: 36,
      title: "Protein Powder",
      description:
        "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
      category: "groceries",
      price: 19.99,
      discountPercentage: 1.58,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/thumbnail.png",
    },
    {
      id: 37,
      title: "Red Onions",
      description:
        "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
      category: "groceries",
      price: 1.99,
      discountPercentage: 17.89,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/thumbnail.png",
    },
    {
      id: 38,
      title: "Rice",
      description:
        "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
      category: "groceries",
      price: 5.99,
      discountPercentage: 12.02,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Rice/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Rice/thumbnail.png",
    },
    {
      id: 39,
      title: "Soft Drinks",
      description:
        "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
      category: "groceries",
      price: 1.99,
      discountPercentage: 1.88,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/thumbnail.png",
    },
    {
      id: 40,
      title: "Strawberry",
      description:
        "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
      category: "groceries",
      price: 3.99,
      discountPercentage: 19.59,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Strawberry/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png",
    },
    {
      id: 41,
      title: "Tissue Paper Box",
      description:
        "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
      category: "groceries",
      price: 2.49,
      discountPercentage: 15.44,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/thumbnail.png",
    },
    {
      id: 42,
      title: "Water",
      description:
        "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
      category: "groceries",
      price: 0.99,
      discountPercentage: 13.71,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Water/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Water/thumbnail.png",
    },
    {
      id: 43,
      title: "Decoration Swing",
      description:
        "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
      category: "home-decoration",
      price: 59.99,
      discountPercentage: 0.65,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png",
    },
    {
      id: 44,
      title: "Family Tree Photo Frame",
      description:
        "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
      category: "home-decoration",
      price: 29.99,
      discountPercentage: 1.53,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png",
    },
    {
      id: 45,
      title: "House Showpiece Plant",
      description:
        "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
      category: "home-decoration",
      price: 39.99,
      discountPercentage: 19.45,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png",
    },
    {
      id: 46,
      title: "Plant Pot",
      description:
        "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
      category: "home-decoration",
      price: 14.99,
      discountPercentage: 0.19,
      images: [
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/1.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/2.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/3.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png",
    },
    {
      id: 47,
      title: "Table Lamp",
      description:
        "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
      category: "home-decoration",
      price: 49.99,
      discountPercentage: 0.59,
      images: [
        "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png",
    },
    {
      id: 48,
      title: "Bamboo Spatula",
      description:
        "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
      category: "kitchen-accessories",
      price: 7.99,
      discountPercentage: 4.85,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/thumbnail.png",
    },
    {
      id: 49,
      title: "Black Aluminium Cup",
      description:
        "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
      category: "kitchen-accessories",
      price: 5.99,
      discountPercentage: 9.22,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png",
    },
    {
      id: 50,
      title: "Black Whisk",
      description:
        "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
      category: "kitchen-accessories",
      price: 9.99,
      discountPercentage: 16.87,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/thumbnail.png",
    },
    {
      id: 51,
      title: "Boxed Blender",
      description:
        "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
      category: "kitchen-accessories",
      price: 39.99,
      discountPercentage: 7.36,
      brand: "Unknown",
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/2.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/3.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
    },
    {
      id: 52,
      title: "Carbon Steel Wok",
      description:
        "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
      category: "kitchen-accessories",
      price: 29.99,
      discountPercentage: 5.89,
      brand: "Unknown",
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/thumbnail.png",
    },
    {
      id: 53,
      title: "Chopping Board",
      description:
        "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
      category: "kitchen-accessories",
      price: 12.99,
      discountPercentage: 17.72,
      brand: "Unknown",
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/thumbnail.png",
    },
    {
      id: 54,
      title: "Citrus Squeezer Yellow",
      description:
        "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
      category: "kitchen-accessories",
      price: 8.99,
      discountPercentage: 12.35,
      brand: "Unknown",
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/thumbnail.png",
    },
    {
      id: 55,
      title: "Egg Slicer",
      description:
        "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
      category: "kitchen-accessories",
      price: 6.99,
      discountPercentage: 9.6,
      brand: "Unknown",
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png",
    },
    {
      id: 56,
      title: "Electric Stove",
      description:
        "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
      category: "kitchen-accessories",
      price: 49.99,
      discountPercentage: 16.64,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/2.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/3.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/thumbnail.png",
    },
    {
      id: 57,
      title: "Fine Mesh Strainer",
      description:
        "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
      category: "kitchen-accessories",
      price: 9.99,
      discountPercentage: 2.56,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/thumbnail.png",
    },
    {
      id: 58,
      title: "Fork",
      description:
        "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
      category: "kitchen-accessories",
      price: 3.99,
      discountPercentage: 14.36,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/thumbnail.png",
    },
    {
      id: 59,
      title: "Glass",
      description:
        "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
      category: "kitchen-accessories",
      price: 4.99,
      discountPercentage: 7.38,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/thumbnail.png",
    },
    {
      id: 60,
      title: "Grater Black",
      description:
        "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
      category: "kitchen-accessories",
      price: 10.99,
      discountPercentage: 3.29,
      brand: null,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/thumbnail.png",
    },
    {
      id: 61,
      title: "Hand Blender",
      description:
        "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
      category: "kitchen-accessories",
      price: 34.99,
      discountPercentage: 6.44,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/thumbnail.png",
    },
    {
      id: 62,
      title: "Ice Cube Tray",
      description:
        "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
      category: "kitchen-accessories",
      price: 5.99,
      discountPercentage: 0.95,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png",
    },
    {
      id: 63,
      title: "Kitchen Sieve",
      description:
        "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
      category: "kitchen-accessories",
      price: 7.99,
      discountPercentage: 9.23,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/thumbnail.png",
    },
    {
      id: 64,
      title: "Knife",
      description:
        "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
      category: "kitchen-accessories",
      price: 14.99,
      discountPercentage: 19.95,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/thumbnail.png",
    },
    {
      id: 65,
      title: "Lunch Box",
      description:
        "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
      category: "kitchen-accessories",
      price: 12.99,
      discountPercentage: 15.33,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/thumbnail.png",
    },
    {
      id: 66,
      title: "Microwave Oven",
      description:
        "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
      category: "kitchen-accessories",
      price: 89.99,
      discountPercentage: 18.73,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/2.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/3.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/thumbnail.png",
    },
    {
      id: 67,
      title: "Mug Tree Stand",
      description:
        "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
      category: "kitchen-accessories",
      price: 15.99,
      discountPercentage: 15.21,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/thumbnail.png",
    },
    {
      id: 68,
      title: "Pan",
      description:
        "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
      category: "kitchen-accessories",
      price: 24.99,
      discountPercentage: 6.55,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/thumbnail.png",
    },
    {
      id: 69,
      title: "Plate",
      description:
        "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
      category: "kitchen-accessories",
      price: 3.99,
      discountPercentage: 13.03,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/thumbnail.png",
    },
    {
      id: 70,
      title: "Red Tongs",
      description:
        "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
      category: "kitchen-accessories",
      price: 6.99,
      discountPercentage: 18.24,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/thumbnail.png",
    },
    {
      id: 71,
      title: "Silver Pot With Glass Cap",
      description:
        "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
      category: "kitchen-accessories",
      price: 39.99,
      discountPercentage: 4.57,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/thumbnail.png",
    },
    {
      id: 72,
      title: "Slotted Turner",
      description:
        "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
      category: "kitchen-accessories",
      price: 8.99,
      discountPercentage: 7.24,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/thumbnail.png",
    },
    {
      id: 73,
      title: "Spice Rack",
      description:
        "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
      category: "kitchen-accessories",
      price: 19.99,
      discountPercentage: 13.78,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/thumbnail.png",
    },
    {
      id: 74,
      title: "Spoon",
      description:
        "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
      category: "kitchen-accessories",
      price: 4.99,
      discountPercentage: 0.93,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/thumbnail.png",
    },
    {
      id: 75,
      title: "Tray",
      description:
        "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
      category: "kitchen-accessories",
      price: 16.99,
      discountPercentage: 9.93,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/thumbnail.png",
    },
    {
      id: 76,
      title: "Wooden Rolling Pin",
      description:
        "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
      category: "kitchen-accessories",
      price: 11.99,
      discountPercentage: 16.94,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/thumbnail.png",
    },
    {
      id: 77,
      title: "Yellow Peeler",
      description:
        "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
      category: "kitchen-accessories",
      price: 5.99,
      discountPercentage: 17.09,
      images: [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/thumbnail.png",
    },
    {
      id: 78,
      title: "Apple MacBook Pro 14 Inch Space Grey",
      description:
        "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
      category: "laptops",
      price: 1999.99,
      discountPercentage: 9.25,
      brand: "Apple",
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    },
    {
      id: 79,
      title: "Asus Zenbook Pro Dual Screen Laptop",
      description:
        "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
      category: "laptops",
      price: 1799.99,
      discountPercentage: 9.21,
      brand: "Asus",
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
    },
    {
      id: 80,
      title: "Huawei Matebook X Pro",
      description:
        "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
      category: "laptops",
      price: 1399.99,
      discountPercentage: 15.25,
      brand: "Huawei",
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
    },
    {
      id: 81,
      title: "Lenovo Yoga 920",
      description:
        "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
      category: "laptops",
      price: 1099.99,
      discountPercentage: 7.77,
      brand: "Lenovo",
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
    },
    {
      id: 82,
      title: "New DELL XPS 13 9300 Laptop",
      description:
        "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
      category: "laptops",
      price: 1499.99,
      discountPercentage: 11.7,
      brand: "Dell",
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png",
    },
    {
      id: 83,
      title: "Blue & Black Check Shirt",
      description:
        "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
      category: "mens-shirts",
      price: 29.99,
      discountPercentage: 1.41,
      brand: "Fashion Trends",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png",
    },
    {
      id: 84,
      title: "Gigabyte Aorus Men Tshirt",
      description:
        "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
      category: "mens-shirts",
      price: 24.99,
      discountPercentage: 12.6,
      brand: "Gigabyte",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png",
    },
    {
      id: 85,
      title: "Man Plaid Shirt",
      description:
        "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
      category: "mens-shirts",
      price: 34.99,
      discountPercentage: 17.53,
      brand: "Classic Wear",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
    },
    {
      id: 86,
      title: "Man Short Sleeve Shirt",
      description:
        "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
      category: "mens-shirts",
      price: 19.99,
      discountPercentage: 8.65,
      brand: "Casual Comfort",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png",
    },
    {
      id: 87,
      title: "Men Check Shirt",
      description:
        "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
      category: "mens-shirts",
      price: 27.99,
      discountPercentage: 14.21,
      brand: "Urban Chic",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/thumbnail.png",
    },
    {
      id: 88,
      title: "Nike Air Jordan 1 Red And Black",
      description:
        "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
      category: "mens-shoes",
      price: 149.99,
      discountPercentage: 15.82,
      brand: "Nike",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
    },
    {
      id: 89,
      title: "Nike Baseball Cleats",
      description:
        "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
      category: "mens-shoes",
      price: 79.99,
      discountPercentage: 11.4,
      brand: "Nike",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/thumbnail.png",
    },
    {
      id: 90,
      title: "Puma Future Rider Trainers",
      description:
        "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
      category: "mens-shoes",
      price: 89.99,
      discountPercentage: 3.64,
      brand: "Puma",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/thumbnail.png",
    },
    {
      id: 91,
      title: "Sports Sneakers Off White & Red",
      description:
        "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
      category: "mens-shoes",
      price: 119.99,
      discountPercentage: 11.69,
      brand: "Off White",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
    },
    {
      id: 92,
      title: "Sports Sneakers Off White Red",
      description:
        "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
      category: "mens-shoes",
      price: 109.99,
      discountPercentage: 17.22,
      brand: "Off White",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png",
    },
    {
      id: 93,
      title: "Brown Leather Belt Watch",
      description:
        "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
      category: "mens-watches",
      price: 89.99,
      discountPercentage: 15.01,
      brand: "Fashion Timepieces",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
    },
    {
      id: 94,
      title: "Longines Master Collection",
      description:
        "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
      category: "mens-watches",
      price: 1499.99,
      discountPercentage: 0.64,
      brand: "Longines",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png",
    },
    {
      id: 95,
      title: "Rolex Cellini Date Black Dial",
      description:
        "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
      category: "mens-watches",
      price: 8999.99,
      discountPercentage: 14.28,
      brand: "Rolex",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png",
    },
    {
      id: 96,
      title: "Rolex Cellini Moonphase",
      description:
        "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
      category: "mens-watches",
      price: 12999.99,
      discountPercentage: 5.7,
      brand: "Rolex",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
    },
    {
      id: 97,
      title: "Rolex Datejust",
      description:
        "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
      category: "mens-watches",
      price: 10999.99,
      discountPercentage: 9.69,
      brand: "Rolex",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png",
    },
    {
      id: 98,
      title: "Rolex Submariner Watch",
      description:
        "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
      category: "mens-watches",
      price: 13999.99,
      discountPercentage: 0.82,
      brand: "Rolex",
      images: [
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
    },
    {
      id: 99,
      title: "Amazon Echo Plus",
      description:
        "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
      category: "mobile-accessories",
      price: 99.99,
      discountPercentage: 16.3,
      brand: "Amazon",
      images: [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png",
    },
    {
      id: 100,
      title: "Apple Airpods",
      description:
        "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
      category: "mobile-accessories",
      price: 129.99,
      discountPercentage: 4.82,
      brand: "Apple",
      images: [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
    },
  ]);

  const deleteBTN = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  return (
    <div className="wrapper">
      <h1>Products</h1>
      {products.length == 0 && <h1>Tugadi</h1>}
      <ul className="product-colum">
        {products.map((product) => {
          return (
            <li className="list" key={product.id}>
              <img
                className="product-img"
                src={product.thumbnail}
                alt=""
                width={200}
                height={200}
              />
              <h2>{product.title}</h2>
              <h3>{product.description}</h3>
              <h4>DiscountPercentage: {product.discountPercentage}</h4>
              <h4>Category: {product.category}</h4>
              <h4>Price: {product.price}</h4>
              <button
                className="product-btn"
                onClick={() => deleteBTN(product.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
