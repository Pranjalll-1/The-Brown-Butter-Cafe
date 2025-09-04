// Import menu images
import espressoImage from "../assets/menu/espresso.jpg";
import cappuccinoImage from "../assets/menu/cappuccino.jpg";
import latteImage from "../assets/menu/latte.jpg";
import mochaImage from "../assets/menu/mocha.jpg";
import americanoImage from "../assets/menu/americano.jpg";
import coldBrewImage from "../assets/menu/cold-brew.jpg";
import croissantButterImage from "../assets/menu/croissant-butter.jpg";
import painChocolateImage from "../assets/menu/pain-chocolate.jpg";
import almondCroissantImage from "../assets/menu/almond-croissant.jpg";
import danishBerryImage from "../assets/menu/danish-berry.jpg";
import cookiesChocolateImage from "../assets/menu/cookies-chocolate.jpg";
import muffinBlueberryImage from "../assets/menu/muffin-blueberry.jpg";
import sconeCranberryImage from "../assets/menu/scone-cranberry.jpg";
import tomatoBasilImage from "../assets/menu/tomato-basil.jpg";
import mushroomSoupImage from "../assets/menu/mushroom-soup.jpg";
import lentilSoupImage from "../assets/menu/lentil-soup.jpg";
import grilledCheeseImage from "../assets/menu/grilled-cheese.jpg";
import chickenAvocadoImage from "../assets/menu/chicken-avocado.jpg";
import veggiePaneerImage from "../assets/menu/veggie-paneer.jpg";

export const menuData = [
  // Coffee & Beverages
  {
    id: 1,
    name: "Artisan Espresso",
    description:
      "Rich, concentrated coffee shot made from our signature blend of single-origin beans",
    img: espressoImage,
    price: 120,
    category: "coffee & beverages",
  },
  {
    id: 2,
    name: "Heritage Cappuccino",
    description:
      "Perfect balance of espresso, steamed milk, and velvety foam with latte art",
    img: cappuccinoImage,
    price: 180,
    category: "coffee & beverages",
  },
  {
    id: 3,
    name: "Vanilla Bean Latte",
    description:
      "Smooth espresso with steamed milk and real vanilla bean syrup",
    img: latteImage,
    price: 200,
    category: "coffee & beverages",
  },
  {
    id: 4,
    name: "Dark Chocolate Mocha",
    description:
      "Espresso blended with premium dark chocolate and steamed milk",
    img: mochaImage,
    price: 220,
    category: "coffee & beverages",
  },
  {
    id: 5,
    name: "Black Americano",
    description:
      "Bold espresso shots with hot water for a clean, robust flavor",
    img: americanoImage,
    price: 150,
    category: "coffee & beverages",
  },
  {
    id: 6,
    name: "Cold Brew Coffee",
    description:
      "Slow-steeped for 12 hours, served over ice with a smooth finish",
    img: coldBrewImage,
    price: 180,
    category: "coffee & beverages",
  },

  // Fresh Pastries
  {
    id: 7,
    name: "Butter Croissant",
    description:
      "Flaky, buttery pastry baked fresh daily with European-style technique",
    img: croissantButterImage,
    price: 150,
    category: "pastries",
  },
  {
    id: 8,
    name: "Pain au Chocolat",
    description: "Classic French pastry with rich dark chocolate batons inside",
    img: painChocolateImage,
    price: 180,
    category: "pastries",
  },
  {
    id: 9,
    name: "Almond Croissant",
    description:
      "Croissant filled with almond cream and topped with sliced almonds",
    img: almondCroissantImage,
    price: 200,
    category: "pastries",
  },
  {
    id: 10,
    name: "Mixed Berry Danish",
    description: "Sweet pastry topped with seasonal berries and cream cheese",
    img: danishBerryImage,
    price: 170,
    category: "pastries",
  },

  // Snacks & Treats
  {
    id: 11,
    name: "Chocolate Chip Cookies",
    description: "Freshly baked cookies with premium dark chocolate chips",
    img: cookiesChocolateImage,
    price: 80,
    category: "snacks",
  },
  {
    id: 12,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries and lemon zest",
    img: muffinBlueberryImage,
    price: 120,
    category: "snacks",
  },
  {
    id: 13,
    name: "Cranberry Orange Scone",
    description:
      "Traditional British scone with dried cranberries and orange zest",
    img: sconeCranberryImage,
    price: 140,
    category: "snacks",
  },

  // Soups
  {
    id: 14,
    name: "Tomato Basil Soup",
    description:
      "Creamy tomato soup with fresh basil, served with artisan bread",
    img: tomatoBasilImage,
    price: 180,
    category: "soups",
  },
  {
    id: 15,
    name: "Wild Mushroom Soup",
    description: "Rich soup made with assorted wild mushrooms and herbs",
    img: mushroomSoupImage,
    price: 200,
    category: "soups",
  },
  {
    id: 16,
    name: "Spiced Lentil Soup",
    description: "Hearty lentil soup with Indian spices and coconut milk",
    img: lentilSoupImage,
    price: 170,
    category: "soups",
  },

  // Sandwiches & Wraps
  {
    id: 17,
    name: "Artisan Grilled Cheese",
    description: "Three-cheese blend on sourdough bread, grilled to perfection",
    img: grilledCheeseImage,
    price: 220,
    category: "sandwiches",
  },
  {
    id: 18,
    name: "Chicken Avocado Sandwich",
    description:
      "Grilled chicken with avocado, lettuce, and herb mayo on multigrain",
    img: chickenAvocadoImage,
    price: 280,
    category: "sandwiches",
  },
  {
    id: 19,
    name: "Paneer Tikka Wrap",
    description: "Marinated paneer with vegetables wrapped in spinach tortilla",
    img: veggiePaneerImage,
    price: 250,
    category: "sandwiches",
  },
];
