// Menu Data
const menuItems = [
  {
    id: 1,
    name: "Signature Wagyu Burger",
    description: "Premium wagyu beef patty with aged cheddar, caramelized onions, truffle aioli on a brioche bun",
    price: 18.99,
    category: "Burgers",
    image: "🍔",
    color: "#F59E0B",
    modelType: "burger",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "md", label: "Large", price: 3 },
        { id: "lg", label: "Double", price: 6 }
      ],
      addons: [
        { id: "cheese", label: "Extra Cheese", price: 1.5 },
        { id: "bacon", label: "Crispy Bacon", price: 2 },
        { id: "avocado", label: "Avocado", price: 2.5 },
        { id: "egg", label: "Fried Egg", price: 1.5 },
        { id: "no-onion", label: "No Onions", price: 0 }
      ]
    }
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil on hand-tossed dough",
    price: 15.99,
    category: "Pizza",
    image: "🍕",
    color: "#EF4444",
    modelType: "pizza",
    customizations: {
      sizes: [
        { id: "sm", label: "Personal (8\")", price: 0 },
        { id: "md", label: "Medium (12\")", price: 4 },
        { id: "lg", label: "Large (16\")", price: 7 }
      ],
      addons: [
        { id: "pepperoni", label: "Pepperoni", price: 2 },
        { id: "mushrooms", label: "Mushrooms", price: 1.5 },
        { id: "olives", label: "Black Olives", price: 1 },
        { id: "peppers", label: "Bell Peppers", price: 1 },
        { id: "extra-cheese", label: "Extra Mozzarella", price: 2 }
      ]
    }
  },
  {
    id: 3,
    name: "Spicy Tonkotsu Ramen",
    description: "Rich pork bone broth, chashu, soft-boiled egg, bamboo shoots, nori, and fresh scallions",
    price: 14.99,
    category: "Asian",
    image: "🍜",
    color: "#8B5CF6",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 3 }
      ],
      addons: [
        { id: "egg", label: "Extra Egg", price: 1.5 },
        { id: "chashu", label: "Extra Chashu", price: 3 },
        { id: "spicy", label: "Extra Spicy", price: 0.5 },
        { id: "noodles", label: "Extra Noodles", price: 2 }
      ]
    }
  },
  {
    id: 4,
    name: "Grilled Salmon Bowl",
    description: "Norwegian salmon, quinoa, edamame, avocado, pickled ginger with yuzu dressing",
    price: 19.99,
    category: "Bowls",
    image: "🐟",
    color: "#EC4899",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 4 }
      ],
      addons: [
        { id: "avocado", label: "Extra Avocado", price: 2 },
        { id: "salmon", label: "Extra Salmon", price: 4 },
        { id: "seaweed", label: "Seaweed Salad", price: 1.5 },
        { id: "rice", label: "Swap to Brown Rice", price: 0 }
      ]
    }
  },
  {
    id: 5,
    name: "Truffle Fries",
    description: "Hand-cut fries tossed in truffle oil, parmesan, fresh herbs with garlic aioli",
    price: 9.99,
    category: "Sides",
    image: "🍟",
    color: "#F59E0B",
    modelType: "fries",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 2 }
      ],
      addons: [
        { id: "cheese-sauce", label: "Cheese Sauce", price: 1.5 },
        { id: "truffle", label: "Extra Truffle Oil", price: 2 },
        { id: "herbs", label: "Fresh Herbs", price: 0.5 }
      ]
    }
  },
  {
    id: 6,
    name: "Açaí Power Bowl",
    description: "Organic açaí blend, granola, fresh berries, banana, coconut flakes, honey drizzle",
    price: 12.99,
    category: "Bowls",
    image: "🫐",
    color: "#7C3AED",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 3 }
      ],
      addons: [
        { id: "protein", label: "Protein Powder", price: 2 },
        { id: "peanut", label: "Peanut Butter", price: 1.5 },
        { id: "chia", label: "Chia Seeds", price: 1 },
        { id: "honey", label: "Extra Honey", price: 0.5 }
      ]
    }
  },
  {
    id: 7,
    name: "Chicken Tikka Masala",
    description: "Tender chicken in creamy tomato curry, basmati rice, garlic naan, raita",
    price: 16.99,
    category: "Asian",
    image: "🍛",
    color: "#F97316",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 3 }
      ],
      addons: [
        { id: "naan", label: "Extra Naan", price: 2 },
        { id: "rice", label: "Extra Rice", price: 1.5 },
        { id: "spicy", label: "Extra Spicy", price: 0 },
        { id: "paneer", label: "Add Paneer", price: 3 }
      ]
    }
  },
  {
    id: 8,
    name: "Classic Caesar Salad",
    description: "Crisp romaine, shaved parmesan, croutons, anchovy caesar dressing",
    price: 11.99,
    category: "Salads",
    image: "🥗",
    color: "#22C55E",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Side", price: 0 },
        { id: "lg", label: "Entrée", price: 3 }
      ],
      addons: [
        { id: "chicken", label: "Grilled Chicken", price: 3 },
        { id: "shrimp", label: "Grilled Shrimp", price: 4 },
        { id: "avocado", label: "Avocado", price: 2 },
        { id: "croutons", label: "Extra Croutons", price: 0.5 }
      ]
    }
  },
  {
    id: 9,
    name: "BBQ Bacon Ranch Burger",
    description: "Smoky BBQ sauce, crispy bacon, cheddar, ranch drizzle, onion rings on a toasted brioche bun",
    price: 16.99,
    category: "Burgers",
    image: "🍔",
    color: "#B45309",
    modelType: "burger",
    customizations: {
      sizes: [
        { id: "sm", label: "Single", price: 0 },
        { id: "lg", label: "Double", price: 5 }
      ],
      addons: [
        { id: "bacon", label: "Extra Bacon", price: 2 },
        { id: "onion-rings", label: "Extra Onion Rings", price: 1.5 },
        { id: "jalapeño", label: "Jalapeños", price: 1 }
      ]
    }
  },
  {
    id: 10,
    name: "Pepperoni Feast Pizza",
    description: "Double pepperoni, mozzarella, house red sauce, fresh basil on crispy thin crust",
    price: 17.99,
    category: "Pizza",
    image: "🍕",
    color: "#DC2626",
    modelType: "pizza",
    customizations: {
      sizes: [
        { id: "sm", label: "Personal (10\")", price: 0 },
        { id: "md", label: "Medium (14\")", price: 5 },
        { id: "lg", label: "Large (18\")", price: 9 }
      ],
      addons: [
        { id: "extra-pep", label: "Extra Pepperoni", price: 2 },
        { id: "sausage", label: "Italian Sausage", price: 2.5 },
        { id: "jalapeño", label: "Jalapeños", price: 1 }
      ]
    }
  },
  {
    id: 11,
    name: "Pad Thai",
    description: "Stir-fried rice noodles, shrimp, tofu, bean sprouts, peanuts, tamarind sauce",
    price: 13.99,
    category: "Asian",
    image: "🍜",
    color: "#EAB308",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 3 }
      ],
      addons: [
        { id: "shrimp", label: "Extra Shrimp", price: 3 },
        { id: "tofu", label: "Extra Tofu", price: 2 },
        { id: "peanuts", label: "Extra Peanuts", price: 0.5 },
        { id: "spicy", label: "Extra Spicy", price: 0 }
      ]
    }
  },
  {
    id: 12,
    name: "Buddha Bowl",
    description: "Quinoa, roasted sweet potato, chickpeas, kale, avocado, tahini lemon dressing",
    price: 14.99,
    category: "Bowls",
    image: "🥙",
    color: "#84CC16",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 3 }
      ],
      addons: [
        { id: "falafel", label: "Falafel", price: 2.5 },
        { id: "avocado", label: "Extra Avocado", price: 2 },
        { id: "hummus", label: "Extra Hummus", price: 1.5 }
      ]
    }
  },
  {
    id: 13,
    name: "Crispy Onion Rings",
    description: "Beer-battered onion rings with chipotle aioli and ranch dipping sauce",
    price: 8.99,
    category: "Sides",
    image: "🧅",
    color: "#F59E0B",
    modelType: "fries",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 2 }
      ],
      addons: [
        { id: "cheese", label: "Cheese Sauce", price: 1 },
        { id: "ranch", label: "Extra Ranch", price: 0.5 }
      ]
    }
  },
  {
    id: 14,
    name: "Greek Goddess Salad",
    description: "Mixed greens, feta, Kalamata olives, cucumber, tomato, red onion, oregano vinaigrette",
    price: 12.99,
    category: "Salads",
    image: "🥗",
    color: "#0EA5E9",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Side", price: 0 },
        { id: "lg", label: "Entrée", price: 3 }
      ],
      addons: [
        { id: "chicken", label: "Grilled Chicken", price: 3 },
        { id: "falafel", label: "Falafel", price: 2.5 },
        { id: "extra-feta", label: "Extra Feta", price: 1.5 }
      ]
    }
  },
  {
    id: 15,
    name: "Chocolate Lava Cake",
    description: "Warm molten chocolate cake, vanilla ice cream, dusted with powdered sugar",
    price: 9.99,
    category: "Desserts",
    image: "🍫",
    color: "#78350F",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Single", price: 0 },
        { id: "lg", label: "Double", price: 5 }
      ],
      addons: [
        { id: "ice-cream", label: "Extra Ice Cream", price: 1.5 },
        { id: "berries", label: "Fresh Berries", price: 2 },
        { id: "caramel", label: "Caramel Drizzle", price: 0.5 }
      ]
    }
  },
  {
    id: 16,
    name: "Tropical Mango Smoothie",
    description: "Fresh mango, banana, coconut milk, honey, lime, blended with ice",
    price: 6.99,
    category: "Drinks",
    image: "🥭",
    color: "#FBBF24",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular (16oz)", price: 0 },
        { id: "lg", label: "Large (24oz)", price: 1.5 }
      ],
      addons: [
        { id: "protein", label: "Protein Boost", price: 2 },
        { id: "chia", label: "Chia Seeds", price: 1 },
        { id: "coconut", label: "Coconut Cream", price: 1 }
      ]
    }
  },
  {
    id: 17,
    name: "Buffalo Chicken Burger",
    description: "Crispy buffalo chicken, blue cheese slaw, pickles, ranch on a sesame bun",
    price: 15.99,
    category: "Burgers",
    image: "🍔",
    color: "#EA580C",
    modelType: "burger",
    customizations: {
      sizes: [
        { id: "sm", label: "Single", price: 0 },
        { id: "lg", label: "Double", price: 4 }
      ],
      addons: [
        { id: "blue-cheese", label: "Extra Blue Cheese", price: 1 },
        { id: "spicy", label: "Extra Spicy", price: 0 },
        { id: "bacon", label: "Bacon", price: 2 }
      ]
    }
  },
  {
    id: 18,
    name: "Four Cheese White Pizza",
    description: "Mozzarella, gorgonzola, parmesan, ricotta, garlic oil, fresh basil on white dough",
    price: 16.99,
    category: "Pizza",
    image: "🍕",
    color: "#FCD34D",
    modelType: "pizza",
    customizations: {
      sizes: [
        { id: "sm", label: "Personal (10\")", price: 0 },
        { id: "md", label: "Medium (14\")", price: 4 },
        { id: "lg", label: "Large (18\")", price: 8 }
      ],
      addons: [
        { id: "truffle", label: "Truffle Oil", price: 2 },
        { id: "arugula", label: "Arugula", price: 1.5 },
        { id: "honey", label: "Honey Drizzle", price: 0.5 }
      ]
    }
  },
  {
    id: 19,
    name: "Spicy Tuna Sushi Bowl",
    description: "Sushi rice, spicy tuna, avocado, cucumber, edamame, pickled ginger, sriracha mayo",
    price: 17.99,
    category: "Asian",
    image: "🍣",
    color: "#F43F5E",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 4 }
      ],
      addons: [
        { id: "tuna", label: "Extra Tuna", price: 4 },
        { id: "avocado", label: "Extra Avocado", price: 2 },
        { id: "wasabi", label: "Extra Wasabi", price: 0.5 },
        { id: "nori", label: "Crispy Nori", price: 1 }
      ]
    }
  },
  {
    id: 20,
    name: "Sweet Potato Fries",
    description: "Cinnamon-dusted sweet potato fries with maple sriracha dipping sauce",
    price: 7.99,
    category: "Sides",
    image: "🍠",
    color: "#C2410C",
    modelType: "fries",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 2 }
      ],
      addons: [
        { id: "marshmallow", label: "Marshmallow Dip", price: 1 },
        { id: "cinnamon", label: "Extra Cinnamon", price: 0 }
      ]
    }
  },
  {
    id: 21,
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa powder, a touch of marsala",
    price: 10.99,
    category: "Desserts",
    image: "🍰",
    color: "#78716C",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Classic", price: 0 },
        { id: "lg", label: "Double Portion", price: 6 }
      ],
      addons: [
        { id: "espresso", label: "Extra Espresso Shot", price: 1 },
        { id: "chocolate", label: "Chocolate Shavings", price: 1.5 },
        { id: "berries", label: "Fresh Berries", price: 2 }
      ]
    }
  },
  {
    id: 22,
    name: "Iced Matcha Latte",
    description: "Premium matcha, oat milk, vanilla, lightly sweetened over ice",
    price: 6.49,
    category: "Drinks",
    image: "🍵",
    color: "#22C55E",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular (16oz)", price: 0 },
        { id: "lg", label: "Large (24oz)", price: 1.5 }
      ],
      addons: [
        { id: "espresso", label: "Matcha Espresso Shot", price: 1.5 },
        { id: "coconut", label: "Coconut Milk", price: 0.5 },
        { id: "boba", label: "Boba Pearls", price: 1 }
      ]
    }
  },
  {
    id: 23,
    name: "Fish & Chips",
    description: "Beer-battered cod, hand-cut fries, coleslaw, tartar sauce, lemon wedge",
    price: 14.99,
    category: "Sides",
    image: "🐟",
    color: "#0EA5E9",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "2 Pieces", price: 0 },
        { id: "lg", label: "4 Pieces", price: 5 }
      ],
      addons: [
        { id: "malt-vinegar", label: "Malt Vinegar", price: 0 },
        { id: "extra-tartar", label: "Extra Tartar", price: 0.5 },
        { id: "coleslaw", label: "Extra Coleslaw", price: 1 }
      ]
    }
  },
  {
    id: 24,
    name: "Berry Bliss Acai Bowl",
    description: "Açaí base, strawberry, blueberry, blackberry, granola, coconut, honey",
    price: 13.99,
    category: "Bowls",
    image: "🫐",
    color: "#A855F7",
    modelType: "bowl",
    customizations: {
      sizes: [
        { id: "sm", label: "Regular", price: 0 },
        { id: "lg", label: "Large", price: 3 }
      ],
      addons: [
        { id: "nut-butter", label: "Almond Butter", price: 1.5 },
        { id: "protein", label: "Protein Powder", price: 2 },
        { id: "coconut", label: "Toasted Coconut", price: 0.5 }
      ]
    }
  }
];

const categories = ["All", "Burgers", "Pizza", "Asian", "Bowls", "Sides", "Salads", "Desserts", "Drinks"];

// DOM Elements
const elements = {
  // Header
  header: document.getElementById('header'),
  backBtn: document.getElementById('backBtn'),
  logo: document.querySelector('.logo'),
  cartBtn: document.querySelector('.cart-btn'),
  cartCount: document.querySelector('.cart-count'),
  userInfo: document.getElementById('userInfo'),
  userAvatar: document.getElementById('userAvatar'),
  userName: document.getElementById('userName'),
  logoutBtn: document.getElementById('logoutBtn'),

  // Pages
  mainContent: document.getElementById('main-content'),
  loginPage: document.getElementById('login-page'),
  homePage: document.getElementById('home-page'),
  cartPage: document.getElementById('cart-page'),
  orderStatusPage: document.getElementById('order-status-page'),

  // Login Form
  loginForm: document.getElementById('loginForm'),
  emailInput: document.getElementById('email'),
  passwordInput: document.getElementById('password'),
  rememberCheckbox: document.getElementById('remember'),
  passwordToggle: document.getElementById('passwordToggle'),
  loginBtn: document.getElementById('loginBtn'),
  loginBtnText: document.getElementById('loginBtnText'),
  loginSpinner: document.getElementById('loginSpinner'),

  // Product Modal
  modalOverlay: document.getElementById('modalOverlay'),
  productModal: document.getElementById('productModal'),
  modalClose: document.getElementById('modalClose'),
  modalProductName: document.getElementById('modalProductName'),
  modalProductPrice: document.getElementById('modalProductPrice'),
  modalProductDescription: document.getElementById('modalProductDescription'),
  modalProductImage: document.getElementById('modalProductImage'),
  modalSizes: document.getElementById('modalSizes'),
  modalAddons: document.getElementById('modalAddons'),
  modalAddToCart: document.getElementById('modalAddToCart'),

  // Cart
  emptyCart: document.getElementById('emptyCart'),
  cartContent: document.getElementById('cartContent'),

  // Order Status
  orderId: document.getElementById('orderId'),
  orderItems: document.getElementById('orderItems'),
  orderTotal: document.getElementById('orderTotal'),
  orderTime: document.getElementById('orderTime'),
  orderDelivery: document.getElementById('orderDelivery'),
  orderProgress: document.getElementById('orderProgress'),
  noOrder: document.getElementById('noOrder'),
  orderTracking: document.getElementById('orderTracking'),

  // Category Buttons
  categoryButtons: document.querySelectorAll('.category-btn'),

  // Home Page Elements
  categories: document.getElementById('categories'),
  categoryTitle: document.getElementById('category-title'),
  itemCount: document.getElementById('item-count'),
  menuGrid: document.getElementById('menuGrid'),
  noResults: document.getElementById('noResults'),
  menuSort: document.getElementById('menuSort'),
  searchInput: document.getElementById('searchInput'),
  locationBar: document.getElementById('locationBar'),
  locationDropdown: document.getElementById('locationDropdown'),
  locationCity: document.getElementById('locationCity'),

  // Info Modal Elements
  infoModalOverlay: document.getElementById('infoModalOverlay'),
  infoModal: document.getElementById('infoModal'),
  infoModalTitle: document.getElementById('infoModalTitle'),
  infoModalBody: document.getElementById('infoModalBody'),
  infoModalClose: document.getElementById('infoModalClose')
};

// App State
const state = {
  currentPage: 'login',
  activeCategory: 'All',
  searchQuery: '',
  cart: [],
  selectedItem: null,
  order: null,
  isLoading: false,
  user: null,
  isAuthenticated: false,
  deliveryLocation: 'Downtown',
  sortBy: '',
  promoCode: null,
  promoDiscount: 0,
  colorBendsInstance: null
};

// Initialize DOM references
function initializeElements() {
  // Elements are already defined in the elements object
  // Event listeners are handled in setupEventListeners()
}

// Navigation
function navigate(page) {
  const protectedPages = ['home', 'cart', 'order-status'];
  if (protectedPages.includes(page) && !state.isAuthenticated) {
    navigate('login');
    return;
  }

  // Hide all pages
  Object.values({
    loginPage: elements.loginPage,
    homePage: elements.homePage,
    cartPage: elements.cartPage,
    orderStatusPage: elements.orderStatusPage
  }).forEach(pageEl => {
    if (pageEl) pageEl.classList.remove('active');
  });

  // Show target page
  switch (page) {
    case 'login':
      elements.loginPage.classList.add('active');
      elements.header.style.display = 'none';

      // Initialize ColorBends on login page
      if (!state.colorBendsInstance && window.ColorBends) {
        state.colorBendsInstance = new window.ColorBends(
          document.getElementById('color-bends-bg'),
          {
            colors: ["#ff5c7a", "#8a5cff", "#00ffd1"],
            rotation: 0,
            speed: 0.2,
            scale: 1,
            frequency: 1,
            warpStrength: 1,
            mouseInfluence: 1,
            parallax: 0.5,
            noise: 0.1,
            transparent: true,
            autoRotate: 0
          }
        );
      }

      loadLoginPage();
      break;
    case 'home':
      elements.homePage.classList.add('active');
      elements.header.style.display = 'flex';

      // Destroy colorBends instance to save resources when not on login page
      if (state.colorBendsInstance) {
        state.colorBendsInstance.destroy();
        state.colorBendsInstance = null;
      }

      loadHomePage();
      break;
    case 'cart':
      elements.cartPage.classList.add('active');
      elements.header.style.display = 'flex';
      loadCartPage();
      break;
    case 'order-status':
      elements.orderStatusPage.classList.add('active');
      elements.header.style.display = 'flex';
      loadOrderStatusPage();
      break;
  }

  state.currentPage = page;
  updateHeader();
}

function updateHeader() {
  const showBackBtn = state.currentPage !== 'home';
  elements.backBtn.style.display = showBackBtn ? 'flex' : 'none';

  // Update user info display
  const userInfo = document.getElementById('userInfo');
  const deliveryBadge = document.querySelector('.delivery-badge');

  if (state.isAuthenticated && state.user) {
    // Show user info
    if (userInfo) {
      userInfo.style.display = 'flex';
      document.getElementById('userAvatar').textContent = state.user.avatar || '👤';
      document.getElementById('userName').textContent = state.user.name || 'User';
    }

    // Hide delivery badge when logged in
    if (deliveryBadge) {
      deliveryBadge.style.display = 'none';
    }

    // Add logout button event listener
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.onclick = handleLogout;
    }
  } else {
    // Hide user info
    if (userInfo) {
      userInfo.style.display = 'none';
    }

    // Show delivery badge when not logged in
    if (deliveryBadge) {
      deliveryBadge.style.display = 'flex';
    }
  }

  // Update cart button state
  const totalItems = state.cart.reduce((sum, item) => {
    const quantity = parseInt(item.quantity) || 0;
    return sum + quantity;
  }, 0);
  elements.cartCount.textContent = totalItems;

  if (totalItems > 0) {
    elements.cartBtn.classList.add('has-items');
  } else {
    elements.cartBtn.classList.remove('has-items');
  }
}

// Client-Side Security Functions
function sanitizeInput(input) {
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .trim()
    .substring(0, 254); // Limit length
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePassword(password) {
  // Basic password requirements
  const minLength = 8;
  const maxLength = 128;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return {
    isValid: password.length >= minLength &&
      password.length <= maxLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers,
    errors: {
      length: password.length < minLength ? `Password must be at least ${minLength} characters` : null,
      upperCase: !hasUpperCase ? 'Password must contain at least one uppercase letter' : null,
      lowerCase: !hasLowerCase ? 'Password must contain at least one lowercase letter' : null,
      numbers: !hasNumbers ? 'Password must contain at least one number' : null,
      special: !hasSpecialChar ? 'Password must contain at least one special character' : null
    }
  };
}

function showPasswordRequirements(requirements) {
  const existingRequirements = document.querySelector('.password-requirements');
  if (existingRequirements) {
    existingRequirements.remove();
  }

  const requirementsDiv = document.createElement('div');
  requirementsDiv.className = 'password-requirements';
  requirementsDiv.innerHTML = `
    <div class="requirements-title">Password Requirements:</div>
    <div class="requirements-list">
      <div class="requirement ${requirements.errors.length ? 'invalid' : 'valid'}">
        <span class="requirement-icon">${requirements.errors.length ? '✗' : '✓'}</span>
        At least 8 characters
      </div>
      <div class="requirement ${requirements.errors.upperCase ? 'invalid' : 'valid'}">
        <span class="requirement-icon">${requirements.errors.upperCase ? '✗' : '✓'}</span>
        One uppercase letter
      </div>
      <div class="requirement ${requirements.errors.lowerCase ? 'invalid' : 'valid'}">
        <span class="requirement-icon">${requirements.errors.lowerCase ? '✗' : '✓'}</span>
        One lowercase letter
      </div>
      <div class="requirement ${requirements.errors.numbers ? 'invalid' : 'valid'}">
        <span class="requirement-icon">${requirements.errors.numbers ? '✗' : '✓'}</span>
        One number
      </div>
      <div class="requirement ${requirements.errors.special ? 'invalid' : 'valid'}">
        <span class="requirement-icon">${requirements.errors.special ? '✗' : '✓'}</span>
        One special character
      </div>
    </div>
  `;

  requirementsDiv.style.cssText = `
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px;
    margin-top: 8px;
    font-size: 12px;
  `;

  // Append below the input row (not inside .input-group),
  // otherwise the flex layout makes the password "bar" expand.
  const passwordGroup = elements.passwordInput?.closest('.form-group');
  if (passwordGroup) {
    passwordGroup.appendChild(requirementsDiv);
  } else {
    elements.passwordInput.parentNode.appendChild(requirementsDiv);
  }
}

function preventBruteForce() {
  const loginAttempts = parseInt(localStorage.getItem('loginAttempts') || '0');
  const lastAttemptTime = parseInt(localStorage.getItem('lastAttemptTime') || '0');
  const now = Date.now();
  const lockoutDuration = 15 * 60 * 1000; // 15 minutes

  // Check if user is locked out
  if (loginAttempts >= 5 && (now - lastAttemptTime) < lockoutDuration) {
    const remainingTime = Math.ceil((lockoutDuration - (now - lastAttemptTime)) / 60000);
    throw new Error(`Too many failed attempts. Please try again in ${remainingTime} minutes.`);
  }

  // Reset attempts if lockout period has passed
  if ((now - lastAttemptTime) > lockoutDuration) {
    localStorage.setItem('loginAttempts', '0');
  }
}

function recordLoginAttempt(success) {
  const attempts = parseInt(localStorage.getItem('loginAttempts') || '0');

  if (success) {
    // Reset on successful login
    localStorage.setItem('loginAttempts', '0');
    localStorage.removeItem('lastAttemptTime');
  } else {
    // Increment on failed login
    localStorage.setItem('loginAttempts', (attempts + 1).toString());
    localStorage.setItem('lastAttemptTime', Date.now().toString());
  }
}

function addCSRFToken() {
  // Generate a simple CSRF token
  const token = btoa(Date.now().toString() + Math.random().toString());
  localStorage.setItem('csrfToken', token);
  return token;
}

function addPasswordStrengthIndicator(password) {
  // Remove existing strength indicator
  const existingStrength = document.querySelector('.password-strength');
  if (existingStrength) {
    existingStrength.remove();
  }

  if (password.length === 0) return;

  // Calculate password strength
  let strength = 0;
  let strengthText = 'Weak';
  let strengthClass = 'weak';

  // Length check
  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;

  // Character variety checks
  if (/[a-z]/.test(password)) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

  // Determine strength level
  if (strength <= 2) {
    strengthText = 'Weak';
    strengthClass = 'weak';
  } else if (strength <= 4) {
    strengthText = 'Medium';
    strengthClass = 'medium';
  } else {
    strengthText = 'Strong';
    strengthClass = 'strong';
  }

  // Create strength indicator
  const strengthDiv = document.createElement('div');
  strengthDiv.className = `password-strength ${strengthClass}`;
  strengthDiv.innerHTML = `
    <div class="password-strength-bar"></div>
    <div class="strength-text">${strengthText}</div>
  `;

  strengthDiv.style.cssText = `
    margin-top: 8px;
    font-size: 12px;
    color: var(--color-text-light);
  `;

  // Append below the input row (not inside .input-group)
  const passwordGroup = elements.passwordInput?.closest('.form-group');
  if (passwordGroup) {
    passwordGroup.appendChild(strengthDiv);
  } else {
    elements.passwordInput.parentNode.appendChild(strengthDiv);
  }
}

function validateCSRFToken(token) {
  const storedToken = localStorage.getItem('csrfToken');
  return storedToken && token === storedToken;
}

// Enhanced Login Page
function loadLoginPage() {
  // Reset form
  if (elements.loginForm) {
    elements.loginForm.reset();
  }

  // Check if user is already logged in
  if (state.isAuthenticated) {
    navigate('home');
    return;
  }

  // Add CSRF token to form
  const csrfToken = addCSRFToken();
  const csrfInput = document.createElement('input');
  csrfInput.type = 'hidden';
  csrfInput.name = 'csrf_token';
  csrfInput.value = csrfToken;
  elements.loginForm.appendChild(csrfInput);
}

// Authentication Functions
function showLoginError(message) {
  const existingError = document.querySelector('.login-error');
  if (existingError) {
    existingError.remove();
  }

  const errorDiv = document.createElement('div');
  errorDiv.className = 'login-error';
  errorDiv.textContent = message;
  errorDiv.style.cssText = `
    background: #fef2f2;
    color: #dc2626;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 1px solid #fecaca;
    font-size: 14px;
    font-weight: 500;
  `;

  elements.loginForm.insertBefore(errorDiv, elements.loginForm.firstChild);

  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

function setLoginLoading(loading) {
  state.isLoading = loading;
  const loginBtn = elements.loginForm.querySelector('.login-btn');

  if (loading) {
    loginBtn.disabled = true;
    elements.loginBtnText.style.display = 'none';
    elements.loginSpinner.style.display = 'flex';
  } else {
    loginBtn.disabled = false;
    elements.loginBtnText.style.display = 'inline';
    elements.loginSpinner.style.display = 'none';
  }
}

async function handleLogin(email, password, remember) {
  try {
    // Prevent brute force attacks
    preventBruteForce();

    setLoginLoading(true);

    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = password; // Don't sanitize password for security reasons

    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      showLoginError('Please enter a valid email address');
      recordLoginAttempt(false);
      return;
    }

    // Validate password requirements
    const passwordValidation = validatePassword(sanitizedPassword);
    if (!passwordValidation.isValid) {
      showLoginError('Password does not meet requirements');
      showPasswordRequirements(passwordValidation);
      recordLoginAttempt(false);
      return;
    }

    // Validate CSRF token
    const csrfToken = document.querySelector('input[name="csrf_token"]')?.value;
    if (!csrfToken || !validateCSRFToken(csrfToken)) {
      showLoginError('Security token invalid. Please refresh the page.');
      recordLoginAttempt(false);
      return;
    }

    // Simulate API call with delay to prevent timing attacks
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    // Mock authentication - in real app, this would be an API call
    if (sanitizedEmail === 'user@example.com' && sanitizedPassword === 'Password123!') {
      const user = {
        id: 1,
        name: 'John Doe',
        email: sanitizedEmail,
        avatar: '👤',
        loginTime: new Date().toISOString()
      };

      state.user = user;
      state.isAuthenticated = true;

      // Store in localStorage if remember is checked
      if (remember) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('loginTime', user.loginTime);
      }

      // Clear password requirements
      const requirementsDiv = document.querySelector('.password-requirements');
      if (requirementsDiv) {
        requirementsDiv.remove();
      }

      recordLoginAttempt(true);

      // Navigate to home
      navigate('home');
    } else {
      showLoginError('Invalid email or password. Try user@example.com / Password123!');
      recordLoginAttempt(false);
    }
  } catch (error) {
    showLoginError(error.message || 'Login failed. Please try again.');
    recordLoginAttempt(false);
  } finally {
    setLoginLoading(false);
  }
}

function handleLogout() {
  state.user = null;
  state.isAuthenticated = false;
  state.cart = [];
  state.order = null;

  // Clear localStorage
  localStorage.removeItem('user');
  localStorage.removeItem('isAuthenticated');

  navigate('login');
}

function checkAuthStatus() {
  const storedUser = localStorage.getItem('user');
  const storedAuth = localStorage.getItem('isAuthenticated');

  if (storedUser && storedAuth === 'true') {
    try {
      state.user = JSON.parse(storedUser);
      state.isAuthenticated = true;

      // Navigate to home if on login page
      if (state.currentPage === 'login') {
        navigate('home');
      }
    } catch (error) {
      console.error('Error parsing stored user data:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    }
  }
}

// Social Login Functions
async function handleGoogleLogin() {
  try {
    setLoginLoading(true);
    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = {
      id: 2,
      name: 'Google User',
      email: 'googleuser@gmail.com',
      avatar: '👤'
    };

    state.user = user;
    state.isAuthenticated = true;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');

    navigate('home');
  } catch (error) {
    showLoginError('Google login failed. Please try again.');
  } finally {
    setLoginLoading(false);
  }
}

async function handleFacebookLogin() {
  try {
    setLoginLoading(true);
    // Simulate Facebook OAuth
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = {
      id: 3,
      name: 'Facebook User',
      email: 'facebookuser@gmail.com',
      avatar: '👤'
    };

    state.user = user;
    state.isAuthenticated = true;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');

    navigate('home');
  } catch (error) {
    showLoginError('Facebook login failed. Please try again.');
  } finally {
    setLoginLoading(false);
  }
}
function loadHomePage() {
  if (elements.locationCity) elements.locationCity.textContent = state.deliveryLocation;
  renderCategories();
  renderMenuItems();
}


function renderCategories() {
  const categoryEmojis = {
    All: '🍽️',
    Burgers: '🍔',
    Pizza: '🍕',
    Asian: '🍜',
    Bowls: '🥗',
    Sides: '🍟',
    Salads: '🥬',
    Desserts: '🍰',
    Drinks: '🍹',
  };

  elements.categories.innerHTML = categories.map(category => `
    <button class="category-btn ${state.activeCategory === category ? 'active' : ''}" 
            data-category="${category}">
      <span class="category-emoji">${categoryEmojis[category] || '🍽️'}</span>
      ${category}
    </button>
  `).join('');

  // Add event listeners
  elements.categories.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.category;
      renderCategories();
      renderMenuItems();
    });
  });
}

function renderMenuItems() {
  let filtered = menuItems.filter(item => {
    const matchCategory = state.activeCategory === 'All' || item.category === state.activeCategory;
    const matchSearch = item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sort
  if (state.sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => (a.price || 0) - (b.price || 0));
  } else if (state.sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => (b.price || 0) - (a.price || 0));
  } else if (state.sortBy === 'name') {
    filtered = [...filtered].sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }

  // Update title and count
  elements.categoryTitle.textContent = state.activeCategory === 'All' ? 'All Dishes' : state.activeCategory;
  elements.itemCount.textContent = filtered.length;
  if (elements.menuSort) elements.menuSort.value = state.sortBy;

  // Show/hide no results
  if (filtered.length === 0) {
    elements.menuGrid.style.display = 'none';
    elements.noResults.style.display = 'block';
    return;
  }

  elements.menuGrid.style.display = 'grid';
  elements.noResults.style.display = 'none';

  // Render menu items
  elements.menuGrid.innerHTML = filtered.map((item, index) => {
    const isPopular = Math.random() > 0.6;
    const rating = (4 + Math.random()).toFixed(1);
    const time = 15 + Math.floor(Math.random() * 20);

    return `
      <div class="menu-card" data-item-id="${item.id}" style="animation-delay: ${index * 0.06}s">
        ${isPopular ? `
          <div class="popular-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            Popular
          </div>
        ` : ''}
        
        <div class="menu-card-image">
          <div class="menu-card-bg" style="background: linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)"></div>
          <div class="menu-card-emoji">${item.image}</div>
          
          <div class="menu-card-overlay">
            <div class="quick-view">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Quick View
            </div>
          </div>
          
          <div class="category-tag">${item.category}</div>
        </div>
        
        <div class="menu-card-content">
          <h3 class="menu-card-name">${item.name}</h3>
          <p class="menu-card-description">${item.description}</p>
          
          <div class="menu-card-footer">
            <div class="menu-card-price">$${item.price.toFixed(2)}</div>
            
            <div class="menu-card-meta">
              <div class="menu-card-meta-item">
                <svg class="star" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>${rating}</span>
              </div>
              <div class="menu-card-meta-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span>${time}m</span>
              </div>
            </div>
            
            <button class="add-to-cart-btn" data-item-id="${item.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Add event listeners
  elements.menuGrid.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.add-to-cart-btn')) {
        const itemId = parseInt(card.dataset.itemId);
        const item = menuItems.find(i => i.id === itemId);
        openProductModal(item);
      }
    });
  });

  elements.menuGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = parseInt(btn.dataset.itemId);
      const item = menuItems.find(i => i.id === itemId);
      addToCart(item);
    });
  });
}

// Product Modal
function openProductModal(item) {
  state.selectedItem = item;

  const rating = (4 + Math.random()).toFixed(1);
  const time = 15 + Math.floor(Math.random() * 20);

  elements.productModal.innerHTML = `
    <div class="modal-header">
      <div class="modal-image">
        <div class="modal-image-bg" style="background: linear-gradient(135deg, ${item.color}25 0%, ${item.color}10 50%, ${item.color}05 100%)"></div>
        <div class="modal-emoji">${item.image}</div>
        
        <div class="modal-controls">
          <button class="modal-close-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div class="modal-actions">
            <button class="modal-action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button class="modal-action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="modal-badges">
          <span class="modal-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            ${rating}
          </span>
          <span class="modal-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            ${time} min
          </span>
          <span class="modal-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Popular
          </span>
        </div>
      </div>
    </div>
    
    <div class="modal-body">
      <div class="modal-product-info">
        <h2>${item.name}</h2>
        <div class="modal-price">$${item.price.toFixed(2)}</div>
        <p>${item.description}</p>
      </div>
      
      <div class="modal-customizations">
        <div class="customization-section">
          <h3>Size</h3>
          <div class="size-options">
            ${item.customizations.sizes.map(size => `
              <button class="size-option" data-size="${size.id}" data-price="${size.price}">
                ${size.label}
                ${size.price > 0 ? `+$${size.price}` : ''}
              </button>
            `).join('')}
          </div>
        </div>
        
        <div class="customization-section">
          <h3>Add-ons</h3>
          <div class="addon-options">
            ${item.customizations.addons.map(addon => `
              <label class="addon-option">
                <input type="checkbox" data-addon-id="${addon.id}" data-addon-price="${addon.price}">
                <span>${addon.label}</span>
                <span class="addon-price">${addon.price > 0 ? `+$${addon.price}` : 'Free'}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <div class="quantity-selector">
          <button class="quantity-btn quantity-decrease">-</button>
          <input type="number" class="quantity-input" value="1" min="1" max="99">
          <button class="quantity-btn quantity-increase">+</button>
        </div>
        
        <button class="add-to-cart-modal-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 2L6 9H22l-3-7H9zM7 2v20M17 20v-6M9 20v-6"/>
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  `;

  // Show modal
  elements.modalOverlay.classList.add('active');

  // Add event listeners
  const closeBtn = elements.productModal.querySelector('.modal-close-btn');
  closeBtn.addEventListener('click', closeProductModal);

  // Size selection
  const sizeOptions = elements.productModal.querySelectorAll('.size-option');
  sizeOptions[0].classList.add('selected');
  sizeOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeOptions.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Quantity controls
  const quantityInput = elements.productModal.querySelector('.quantity-input');
  const decreaseBtn = elements.productModal.querySelector('.quantity-decrease');
  const increaseBtn = elements.productModal.querySelector('.quantity-increase');

  decreaseBtn.addEventListener('click', () => {
    const current = parseInt(quantityInput.value);
    if (current > 1) quantityInput.value = current - 1;
  });

  increaseBtn.addEventListener('click', () => {
    const current = parseInt(quantityInput.value);
    if (current < 99) quantityInput.value = current + 1;
  });

  // Add to cart
  const addToCartBtn = elements.productModal.querySelector('.add-to-cart-modal-btn');
  addToCartBtn.addEventListener('click', () => {
    const selectedSize = elements.productModal.querySelector('.size-option.selected');
    const selectedAddons = Array.from(elements.productModal.querySelectorAll('.addon-option input:checked'))
      .map(input => {
        const addon = item.customizations.addons.find(a => a.id === input.dataset.addonId);
        return addon.label;
      });

    const sizePrice = parseFloat(selectedSize.dataset.price);
    const addonPrice = Array.from(elements.productModal.querySelectorAll('.addon-option input:checked'))
      .reduce((sum, input) => sum + parseFloat(input.dataset.addonPrice), 0);

    const unitPrice = item.price + sizePrice + addonPrice;
    const quantity = parseInt(quantityInput.value);

    addToCart({
      ...item,
      size: selectedSize.textContent.trim(),
      addons: selectedAddons,
      unitPrice,
      quantity,
      totalPrice: unitPrice * quantity
    });

    closeProductModal();
  });
}

function closeProductModal() {
  elements.modalOverlay.classList.remove('active');
  state.selectedItem = null;
}

// Cart Management
function addToCart(item) {
  // Ensure item has valid quantity
  const quantity = parseInt(item.quantity) || 1;
  const unitPrice = parseFloat(item.unitPrice) || parseFloat(item.price) || 0;

  const cartItem = {
    ...item,
    quantity,
    unitPrice,
    totalPrice: unitPrice * quantity,
    cartId: Date.now()
  };

  const existingIndex = state.cart.findIndex(existingItem =>
    existingItem.id === cartItem.id &&
    existingItem.size === cartItem.size &&
    JSON.stringify(existingItem.addons) === JSON.stringify(cartItem.addons)
  );

  if (existingIndex >= 0) {
    state.cart[existingIndex].quantity += quantity;
    state.cart[existingIndex].totalPrice = state.cart[existingIndex].unitPrice * state.cart[existingIndex].quantity;
  } else {
    state.cart.push(cartItem);
  }

  updateHeader();
  showAddedNotification();
}

function removeFromCart(cartId) {
  state.cart = state.cart.filter(item => item.cartId !== cartId);
  updateHeader();
  loadCartPage();
}

function updateQuantity(cartId, quantity) {
  const item = state.cart.find(item => item.cartId === cartId);
  if (item) {
    const newQuantity = parseInt(quantity) || 0;
    if (newQuantity <= 0) {
      removeFromCart(cartId);
    } else {
      item.quantity = newQuantity;
      item.totalPrice = item.unitPrice * newQuantity;
      loadCartPage();
    }
  }
}

function showAddedNotification() {
  // Simple notification - could be enhanced with a toast component
  const notification = document.createElement('div');
  notification.className = 'add-notification';
  notification.innerHTML = '✓ Added to cart';
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary);
    color: white;
    padding: 12px 24px;
    border-radius: 9999px;
    font-weight: 600;
    z-index: 1000;
    animation: slideInUp 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Promo codes: code -> { type: 'percent'|'fixed', value: number }
const PROMO_CODES = {
  SAVE10: { type: 'percent', value: 10 },
  SAVE20: { type: 'percent', value: 20 },
  FEAST15: { type: 'fixed', value: 15 },
  FEAST5: { type: 'fixed', value: 5 }
};

function applyPromoCode(code, subtotal) {
  const c = (code || '').trim().toUpperCase();
  const promo = PROMO_CODES[c];
  if (!promo) return { valid: false, discount: 0, message: 'Invalid code' };
  let discount = 0;
  if (promo.type === 'percent') {
    discount = (subtotal * promo.value) / 100;
  } else {
    discount = Math.min(promo.value, subtotal);
  }
  return { valid: true, discount, message: `${c} applied` };
}

// Cart Page
function loadCartPage() {
  const emptyCart = document.getElementById('emptyCart');
  const cartContent = document.getElementById('cartContent');

  if (state.cart.length === 0) {
    emptyCart.style.display = 'block';
    cartContent.style.display = 'none';
    state.promoCode = null;
    state.promoDiscount = 0;
    return;
  }

  emptyCart.style.display = 'none';
  cartContent.style.display = 'block';

  const subtotal = state.cart.reduce((sum, item) => {
    const itemTotal = parseFloat(item.totalPrice) || (parseFloat(item.unitPrice) * parseInt(item.quantity)) || 0;
    return sum + itemTotal;
  }, 0);
  const total = Math.max(0, subtotal - (state.promoDiscount || 0));

  const promoRow = state.promoCode
    ? `<div class="promo-applied">✓ ${state.promoCode} applied (-$${state.promoDiscount.toFixed(2)})</div>`
    : `<div class="promo-row">
         <input type="text" id="promoInput" placeholder="Promo code" class="promo-input">
         <button type="button" class="promo-apply-btn" id="promoApplyBtn">Apply</button>
       </div>`;

  cartContent.innerHTML = `
    <div class="cart-items">
      ${state.cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image">
            <span style="font-size: 48px">${item.image}</span>
          </div>
          
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <div class="cart-item-customizations">
              ${item.size ? `<span>${item.size}</span>` : ''}
              ${item.addons && item.addons.length > 0 ? item.addons.map(addon => `<span>${addon}</span>`).join('') : ''}
            </div>
            <div class="cart-item-price">$${((parseFloat(item.totalPrice) || (parseFloat(item.unitPrice) * parseInt(item.quantity))) || 0).toFixed(2)}</div>
          </div>
          
          <div class="cart-item-controls">
            <div class="quantity-selector">
              <button class="quantity-btn decrease-btn" data-cart-id="${item.cartId}" data-change="-1">-</button>
              <input type="number" value="${item.quantity}" min="1" max="99" readonly>
              <button class="quantity-btn increase-btn" data-cart-id="${item.cartId}" data-change="1">+</button>
            </div>
            <button class="remove-item-btn remove-btn" data-cart-id="${item.cartId}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14zM10 11v6M14 11v6"/>
              </svg>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
    
    <div class="cart-summary">
      <div class="summary-row">
        <span>Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      ${promoRow}
      ${state.promoDiscount ? `<div class="summary-row"><span>Discount</span><span>-$${state.promoDiscount.toFixed(2)}</span></div>` : ''}
      <div class="summary-row">
        <span>Delivery</span>
        <span>Free</span>
      </div>
      <div class="summary-row summary-total">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
    </div>
    
    <div class="cart-actions">
      <button class="btn-primary" id="checkoutBtn">
        Proceed to Checkout
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  `;

  // Promo apply
  const promoApplyBtn = document.getElementById('promoApplyBtn');
  const promoInput = document.getElementById('promoInput');
  if (promoApplyBtn && promoInput) {
    promoApplyBtn.addEventListener('click', () => {
      const subtotal = state.cart.reduce((sum, item) => {
        const itemTotal = parseFloat(item.totalPrice) || (parseFloat(item.unitPrice) * parseInt(item.quantity)) || 0;
        return sum + itemTotal;
      }, 0);
      const result = applyPromoCode(promoInput.value, subtotal);
      if (result.valid) {
        state.promoCode = (promoInput.value || '').trim().toUpperCase();
        state.promoDiscount = result.discount;
        loadCartPage();
      } else {
        showAddedNotification();
        const notif = document.querySelector('.add-notification');
        if (notif) { notif.textContent = result.message || 'Invalid promo code'; notif.style.background = '#dc2626'; }
      }
    });
  }

  // Add event listener to checkout button
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', checkout);
  }

  // Add event listeners for cart item controls
  document.querySelectorAll('.decrease-btn, .increase-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cartId = parseInt(e.target.dataset.cartId);
      const change = parseInt(e.target.dataset.change);
      const item = state.cart.find(item => item.cartId === cartId);
      if (item) {
        const newQuantity = item.quantity + change;
        updateQuantity(cartId, newQuantity);
      }
    });
  });

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cartId = parseInt(e.target.dataset.cartId);
      removeFromCart(cartId);
    });
  });
}

// Order Status
function loadOrderStatusPage() {
  const noOrder = document.getElementById('noOrder');
  const orderTracking = document.getElementById('orderTracking');

  if (!state.order) {
    noOrder.style.display = 'block';
    orderTracking.style.display = 'none';
    return;
  }

  noOrder.style.display = 'none';
  orderTracking.style.display = 'block';

  // Render order tracking (simplified version)
  orderTracking.innerHTML = `
    <div class="order-header">
      <h2>Order ${state.order.id}</h2>
      <div class="order-eta">Estimated delivery: ${state.order.estimatedDelivery}</div>
    </div>
    
    <div class="order-progress">
      <!-- Progress tracking would be implemented here -->
      <div class="progress-message">Your order is being prepared...</div>
    </div>
    
    <div class="order-items">
      <h3>Order Items</h3>
      ${state.order.items.map(item => `
        <div class="order-item">
          <span>${item.quantity}x ${item.name}</span>
          <span>$${((parseFloat(item.unitPrice) || 0) * (parseInt(item.quantity) || 0)).toFixed(2)}</span>
        </div>
      `).join('')}
    </div>
    
    <div class="order-total">
      <span>Total: $${(parseFloat(state.order.total) || 0).toFixed(2)}</span>
    </div>
    
    <div class="order-actions">
      <button class="btn-primary" id="newOrderBtn">
        New Order
      </button>
    </div>
  `;

  // Add event listener for new order button
  const newOrderBtn = document.getElementById('newOrderBtn');
  if (newOrderBtn) {
    newOrderBtn.addEventListener('click', () => navigate('home'));
  }
}

function checkout() {
  if (state.cart.length === 0) return;

  const subtotal = state.cart.reduce((sum, item) => {
    const itemTotal = parseFloat(item.totalPrice) || (parseFloat(item.unitPrice) * parseInt(item.quantity)) || 0;
    return sum + itemTotal;
  }, 0);
  const total = Math.max(0, subtotal - (state.promoDiscount || 0));

  // Create order
  state.order = {
    id: `ORD-${Date.now().toString(36).toUpperCase()}`,
    items: [...state.cart],
    total,
    placedAt: new Date().toISOString(),
    estimatedDelivery: '25-35 min'
  };

  // Clear cart and promo
  state.cart = [];
  state.promoCode = null;
  state.promoDiscount = 0;
  updateHeader();

  // Navigate to order status
  navigate('order-status');
}

// Info modal (Contact / About / FAQ)
const INFO_CONTENT = {
  contact: {
    title: 'Contact Us',
    body: '<p>Get in touch with Byte.</p><p><strong>Email:</strong> support@byte.com</p><p><strong>Phone:</strong> 1-800-BYTE</p><p><strong>Hours:</strong> Mon–Sun 10am–10pm</p>'
  },
  about: {
    title: 'About Byte',
    body: '<p>Byte delivers premium food to your door. Fresh ingredients, bold flavors, and a seamless ordering experience.</p><p>We partner with top local kitchens to bring you the best dishes, with free delivery on orders over $25.</p>'
  },
  faq: {
    title: 'FAQ',
    body: '<p><strong>How do I place an order?</strong><br>Browse the menu, add items to your cart, and proceed to checkout. Sign in or use guest checkout.</p><p><strong>What areas do you deliver to?</strong><br>We deliver to Downtown, Midtown, Harbor, Westside, and Airport. Set your location in the hero bar on the home page.</p><p><strong>Do you have promo codes?</strong><br>Yes! Try SAVE10 (10% off), SAVE20 (20% off), FEAST15 ($15 off), or FEAST5 ($5 off) at checkout.</p>'
  }
};

function openInfoModal(action) {
  const content = INFO_CONTENT[action];
  if (!content || !elements.infoModalOverlay || !elements.infoModalBody || !elements.infoModalTitle) return;
  elements.infoModalTitle.textContent = content.title;
  elements.infoModalBody.innerHTML = content.body;
  elements.infoModalOverlay.classList.add('active');
  elements.infoModalOverlay.setAttribute('aria-hidden', 'false');
}

function closeInfoModal() {
  if (elements.infoModalOverlay) {
    elements.infoModalOverlay.classList.remove('active');
    elements.infoModalOverlay.setAttribute('aria-hidden', 'true');
  }
}

// Category Click Handler
function handleCategoryClick(e) {
  const category = e.target.dataset.category;
  if (category) {
    state.activeCategory = category;
    renderCategories();
    renderMenuItems();
  }
}

// Back Button Handler
function handleBack() {
  navigate('home');
}

// Event Listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });

  // Back button
  elements.backBtn.addEventListener('click', () => {
    navigate('home');
  });

  // Login form
  if (elements.loginForm) {
    elements.loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = elements.emailInput.value.trim();
      const password = elements.passwordInput.value;
      const remember = elements.rememberCheckbox.checked;

      if (!email || !password) {
        showLoginError('Please enter both email and password');
        return;
      }

      handleLogin(email, password, remember);
    });

    // Real-time email validation
    elements.emailInput.addEventListener('input', (e) => {
      const email = e.target.value.trim();
      const inputGroup = e.target.closest('.input-group');

      if (email && !validateEmail(email)) {
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
      } else if (email && validateEmail(email)) {
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
      } else {
        inputGroup.classList.remove('error', 'success');
      }
    });

    // Real-time password validation
    elements.passwordInput.addEventListener('input', (e) => {
      const password = e.target.value;
      const inputGroup = e.target.closest('.input-group');

      if (password.length > 0) {
        const validation = validatePassword(password);
        showPasswordRequirements(validation);

        if (validation.isValid) {
          inputGroup.classList.add('success');
          inputGroup.classList.remove('error');
        } else {
          inputGroup.classList.add('error');
          inputGroup.classList.remove('success');
        }

        // Add password strength indicator
        addPasswordStrengthIndicator(password);
      } else {
        inputGroup.classList.remove('error', 'success');
        const requirementsDiv = document.querySelector('.password-requirements');
        if (requirementsDiv) {
          requirementsDiv.remove();
        }
        const strengthDiv = document.querySelector('.password-strength');
        if (strengthDiv) {
          strengthDiv.remove();
        }
      }
    });

    // Focus/blur effects
    [elements.emailInput, elements.passwordInput].forEach(input => {
      input.addEventListener('focus', () => {
        input.closest('.input-group').classList.add('focused');
      });

      input.addEventListener('blur', () => {
        input.closest('.input-group').classList.remove('focused');
      });
    });
  }

  // Password toggle
  if (elements.passwordToggle) {
    elements.passwordToggle.addEventListener('click', () => {
      const type = elements.passwordInput.type === 'password' ? 'text' : 'password';
      elements.passwordInput.type = type;

      // Update icon
      elements.passwordToggle.innerHTML = type === 'password' ? `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ` : `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 0 5.06 5.94M9.9 4.24A9.12 9.12 0 0 0 12 5c-4.12 0-7.75 1.74-9.9 4.24M14.12 14.12a9.12 9.12 0 0 0-2.12 2.12"/>
        </svg>
      `;
    });
  }

  // Social login buttons
  document.querySelector('.google-btn')?.addEventListener('click', handleGoogleLogin);
  document.querySelector('.facebook-btn')?.addEventListener('click', handleFacebookLogin);

  // Forgot password link
  document.querySelector('.forgot-password')?.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginError('Password reset functionality coming soon!');
  });

  // Signup link
  document.querySelector('.signup-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginError('Signup functionality coming soon!');
  });

  // Search
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderMenuItems();
  });

  // Location picker (home page)
  if (elements.locationBar && elements.locationDropdown) {
    elements.locationBar.addEventListener('click', (e) => {
      if (e.target.closest('.location-dropdown')) return;
      elements.locationBar.classList.toggle('open');
      elements.locationBar.setAttribute('aria-expanded', elements.locationBar.classList.contains('open'));
    });
    elements.locationDropdown.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.deliveryLocation = btn.dataset.location;
        if (elements.locationCity) elements.locationCity.textContent = state.deliveryLocation;
        elements.locationBar.classList.remove('open');
        elements.locationBar.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Menu sort (home page)
  if (elements.menuSort) {
    elements.menuSort.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderMenuItems();
    });
  }

  // Footer links: data-page handled by existing [data-page] listener; data-action opens info modal
  document.querySelectorAll('.footer-link[data-action]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const action = link.getAttribute('data-action');
      openInfoModal(action);
    });
  });

  // Info modal close
  if (elements.infoModalClose) {
    elements.infoModalClose.addEventListener('click', closeInfoModal);
  }
  if (elements.infoModalOverlay) {
    elements.infoModalOverlay.addEventListener('click', (e) => {
      if (e.target === elements.infoModalOverlay) closeInfoModal();
    });
  }

  // Modal overlay click
  elements.modalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.modalOverlay) {
      closeProductModal();
    }
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }
  });

  // Close location dropdown when clicking outside (single listener)
  document.addEventListener('click', (e) => {
    if (elements.locationBar && elements.locationBar.classList.contains('open') && !elements.locationBar.contains(e.target)) {
      elements.locationBar.classList.remove('open');
      elements.locationBar.setAttribute('aria-expanded', 'false');
    }
  });
}

// Initialize App
function init() {
  initializeElements();
  setupEventListeners();

  // Check authentication status first
  checkAuthStatus();

  // Navigate to appropriate page
  if (state.isAuthenticated) {
    navigate('home');
  } else {
    navigate('login');
  }
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
