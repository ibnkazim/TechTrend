const productsData = [
    { id: 1, name: "Смартфон Alpha X", name_en: "Alpha X Smartphone", category: "smartphones", price: 59990, discount: 10, image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg", description: "Флагманский смартфон с 6.7\" AMOLED и 128GB памяти.", description_en: "Flagship smartphone with 6.7\" AMOLED and 128GB storage." },
    { id: 2, name: "Ноутбук Pro 16", name_en: "Pro 16 Laptop", category: "laptops", price: 129990, discount: 15, image: "https://images.pexels.com/photos/18105/pexels-photo.jpg", description: "Мощный ноутбук с 16\" дисплеем и RTX 3060.", description_en: "Powerful laptop with 16\" display and RTX 3060." },
    { id: 3, name: "Беспроводные наушники Air", name_en: "Air Earbuds", category: "accessories", price: 9990, discount: 20, image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg", description: "Наушники с шумоподавлением.", description_en: "Earbuds with noise cancellation." },
    { id: 4, name: "Смартфон Neo 5G", name_en: "Neo 5G Smartphone", category: "smartphones", price: 39990, image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg", description: "Смартфон с поддержкой 5G и 64MP камерой.", description_en: "5G smartphone with 64MP camera." },
    { id: 5, name: "Ноутбук Ultra 14", name_en: "Ultra 14 Laptop", category: "laptops", price: 99990, discount: 25, image: "https://images.pexels.com/photos/7974/pexels-photo.jpg", description: "Легкий ноутбук с 14\" экраном.", description_en: "Lightweight laptop with 14\" screen." },
    { id: 6, name: "Зарядное устройство 67W", name_en: "65W Charger", category: "accessories", price: 2990, image: "https://images.pexels.com/photos/29407254/pexels-photo-29407254/free-photo-of-67.jpeg", description: "Быстрое зарядное устройство.", description_en: "Fast charging device." },
    { id: 7, name: "Смартфон Vision Pro", name_en: "Vision Pro Smartphone", category: "smartphones", price: 79990, image: "https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg", description: "Премиум смартфон с 108MP камерой.", description_en: "Premium smartphone with 108MP camera." },
    { id: 8, name: "Клавиатура RGB", name_en: "RGB Keyboard", category: "accessories", price: 4990, discount: 10, image: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg", description: "Механическая клавиатура с подсветкой.", description_en: "Mechanical keyboard with RGB lighting." },
    { id: 9, name: "Ноутбук Gaming X", name_en: "Gaming X Laptop", category: "laptops", price: 149990, image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg", description: "Игровой ноутбук с RTX 3080.", description_en: "Gaming laptop with RTX 3080." },
    { id: 10, name: "Умные часы Fit 3", name_en: "Fit 3 Smartwatch", category: "accessories", price: 12990, image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg", description: "Умные часы с мониторингом здоровья.", description_en: "Smartwatch with health monitoring." },
    { id: 11, name: "Смартфон Beta Z", name_en: "Beta Z Smartphone", category: "smartphones", price: 49990, discount: 5, image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg", description: "Смартфон с 6.5\" экраном и 256GB памяти.", description_en: "Smartphone with 6.5\" screen and 256GB storage." },
    { id: 12, name: "Ноутбук Creator 15", name_en: "Creator 15 Laptop", category: "laptops", price: 119990, discount: 15, image: "https://images.pexels.com/photos/18104/pexels-photo.jpg?", description: "Ноутбук для профессионалов с 15\" 4K дисплеем.", description_en: "Laptop for professionals with 15\" 4K display." },
    { id: 13, name: "Беспроводная мышь Pro", name_en: "Pro Wireless Mouse", category: "accessories", price: 3990, discount: 10, image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg", description: "Эргономичная мышь с высокой точностью.", description_en: "Ergonomic mouse with high precision." },
    { id: 14, name: "Смартфон Gamma 7", name_en: "Gamma 7 Smartphone", category: "smartphones", price: 64990, discount: 12, image: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg", description: "Смартфон с тройной камерой 48MP.", description_en: "Smartphone with triple 48MP camera." },
    { id: 15, name: "Ноутбук Slim 13", name_en: "Slim 13 Laptop", category: "laptops", price: 89990, image: "https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg", description: "Ультратонкий ноутбук с 13\" экраном.", description_en: "Ultralight laptop with 13\" screen." },
    { id: 16, name: "Наушники Studio", name_en: "Studio Headphones", category: "accessories", price: 14990, discount: 20, image: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg", description: "Наушники с высоким качеством звука.", description_en: "Headphones with high-quality sound." },
    { id: 17, name: "Смартфон Delta 9", name_en: "Delta 9 Smartphone", category: "smartphones", price: 54990, discount: 8, image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg", description: "Смартфон с 6.8\" экраном и 512GB памяти.", description_en: "Smartphone with 6.8\" screen and 512GB storage." },
    { id: 18, name: "Внешний аккумулятор 10000mAh", name_en: "10000mAh Power Bank", category: "accessories", price: 2490, image: "https://images.pexels.com/photos/518530/pexels-photo-518530.jpeg", description: "Компактный внешний аккумулятор.", description_en: "Compact power bank." },
    { id: 19, name: "Ноутбук Power 17", name_en: "Power 17 Laptop", category: "laptops", price: 139990, discount: 10, image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg", description: "Мощный ноутбук с 17\" экраном.", description_en: "Powerful laptop with 17\" screen." },
    { id: 20, name: "Веб-камера HD", name_en: "HD Webcam", category: "accessories", price: 5990, discount: 5, image: "https://images.pexels.com/photos/27904916/pexels-photo-27904916.jpeg", description: "Веб-камера с высоким разрешением.", description_en: "High-resolution webcam." }
];
const newsData = [
    {
        title: "Alpha X: Революция в мобильной фотографии",
        title_en: "Alpha X: Revolution in Mobile Photography",
        description: "Смартфон Alpha X с 108MP камерой и улучшенным ночным режимом теперь доступен со скидкой 10%! Идеально для съемки в любых условиях.",
        description_en: "The Alpha X smartphone with a 108MP camera and enhanced night mode is now available at a 10% discount! Perfect for shooting in any condition.",
        date: "2025-05-26",
        image: "https://images.unsplash.com/photo-1511707171634-5f897d2e14a2"
    },
    {
        title: "Pro 16: Новый стандарт производительности",
        title_en: "Pro 16: New Standard of Performance",
        description: "Ноутбук Pro 16 с RTX 3060 получил обновление прошивки, повышающее производительность на 15%. Скидка 15% только до конца мая!",
        description_en: "The Pro 16 laptop with RTX 3060 received a firmware update boosting performance by 15%. 15% off until the end of May!",
        date: "2025-05-24",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        title: "Air Earbuds: Звук без границ",
        title_en: "Air Earbuds: Sound Without Limits",
        description: "Беспроводные наушники Air с шумоподавлением теперь со скидкой 20%. Наслаждайтесь музыкой без отвлекающих факторов!",
        description_en: "Air wireless earbuds with noise cancellation are now 20% off. Enjoy music without distractions!",
        date: "2025-05-22",
        image: "https://images.unsplash.com/photo-1600294037681-c80e0393a6f8"
    },
    {
        title: "Ultra 14: Легкость, мощность, стиль",
        title_en: "Ultra 14: Light, Powerful, Stylish",
        description: "Ноутбук Ultra 14 с 14\" экраном и скидкой 25% — ваш идеальный спутник для работы и путешествий. Лимитированная акция!",
        description_en: "The Ultra 14 laptop with a 14\" screen and 25% discount is your perfect companion for work and travel. Limited offer!",
        date: "2025-05-20",
        image: "https://images.unsplash.com/photo-1516321310766-78a395706414"
    },
    {
        title: "Gamma 7: Скорость 5G уже здесь",
        title_en: "Gamma 7: 5G Speed is Here",
        description: "Смартфон Gamma 7 с тройной камерой 48MP и поддержкой 5G теперь со скидкой 12%. Обновите свой гаджет сегодня!",
        description_en: "The Gamma 7 smartphone with a triple 48MP camera and 5G support is now 12% off. Upgrade your gadget today!",
        date: "2025-05-18",
        image: "https://images.unsplash.com/photo-1511707171634-5f897d2e14a2"
    },
    {
        title: "Studio Headphones: Погружение в музыку",
        title_en: "Studio Headphones: Immersive Music Experience",
        description: "Наушники Studio с кристально чистым звуком и скидкой 20% — лучший выбор для меломанов. Доступны в черном и белом цветах!",
        description_en: "Studio headphones with crystal-clear sound and a 20% discount are the best choice for music lovers. Available in black and white!",
        date: "2025-05-16",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
];

const translations = {
    ru: {
        logo: "TechTrend",
        "nav-home": "Главная",
        "nav-catalog": "Каталог",
        "nav-discounts": "Скидки",
        "nav-news": "Новости",
        "nav-about": "О нас",
        "nav-contact": "Контакты",
        "search-placeholder": "Поиск товаров...",
        "theme-toggle": "Темная тема",
        "theme-toggle-dark": "Светлая тема",
        "lang-toggle": "EN",
        login: "Войти",
        logout: "Выйти",
        "hero-title": "Добро пожаловать в TechTrend",
        "hero-text": "Инновационная электроника для вашего будущего. Смартфоны, ноутбуки и аксессуары по лучшим ценам!",
        "hero-button": "Перейти к каталогу",
        "filter-all": "Все категории",
        "filter-smartphones": "Смартфоны",
        "filter-laptops": "Ноутбуки",
        "filter-accessories": "Аксессуары",
        "sort-default": "Сортировка: По умолчанию",
        "sort-price-asc": "Цена: по возрастанию",
        "sort-price-desc": "Цена: по убыванию",
        "sort-name-asc": "Название: А-Я",
        "price-range": "Цена:",
        "discounts-title": "Товары со скидкой",
        "news-title": "Новости",
        "about-title": "О нас",
        "about-text": "TechTrend — ваш надежный партнер в мире электроники. Основанная в 2015 году, наша компания стремится предоставлять клиентам самые современные технологии от ведущих мировых брендов.",
        "contact-title": "Контакты",
        "contact-email": "Email: support@techtrend.ru",
        "contact-phone": "Телефон: +7 (999) 987-65-43",
        "contact-address": "Адрес: г. Москва, ул. Инноваций, д. 5",
        "contact-hours": "Часы работы: Пн-Пт 10:00-19:00, Сб-Вс 11:00-17:00",
        "profile-title": "Профиль",
        "profile-username": "Имя пользователя:",
        "phone-placeholder": "Номер телефона:",
        "profile-update": "Обновить профиль",
        "profile-orders": "История заказов",
        "favorites-title": "Избранное",
        "login-title": "Вход",
        "register-title": "Регистрация",
        "username-placeholder": "Имя пользователя",
        "password-placeholder": "Пароль",
        "confirm-password-placeholder": "Подтвердите пароль",
        "login-button": "Войти",
        "register-button": "Зарегистрироваться",
        "register-link": "Зарегистрироваться",
        "login-link": "Уже есть аккаунт? Войти",
        "close-button": "Закрыть",
        "cart-title": "Корзина",
        "cart-total": "Итого:",
        "checkout-button": "Оформить заказ",
        "notification-title": "Подтверждение заказа",
        "download-pdf": "Скачать чек",
        "review-title": "Оставить отзыв",
        "review-name": "Ваше имя",
        "review-text": "Ваш отзыв",
        "review-rating": "Рейтинг",
        "review-submit": "Отправить",
        footer: "© 2025 TechTrend. Все права защищены.",
        "details-button": "Подробности",
        "add-to-cart": "В корзину",
        "add-favorite": "В избранное",
        "remove-favorite": "Убрать из избранного",
        "favorite-button": "Избранное",
        price: "Цена",
        category: "Категория",
        description: "Описание",
        reviews: "Отзывы",
        "no-reviews": "Отзывов нет",
        "review-button": "Оставить отзыв",
        "back-to-catalog": "Вернуться к каталогу",
        "remove-button": "Удалить",
        "login-required": "Войдите в аккаунт",
        "fill-fields": "Заполните все поля",
        "no-favorites": "Нет избранных товаров",
        "no-products": "Нет товаров",
        "order-date": "Дата",
        items: "Товары",
        "order-total": "Итого",
        "no-orders": "Нет заказов",
        "profile-updated": "Профиль обновлен",
        "order-success": "Спасибо за заказ!",
        "order-receipt": "Чек заказа",
        username: "Пользователь",
        "invalid-login": "Неверный номер телефона или пароль",
        "register-success": "Регистрация успешна",
        "chart-title": "Распределение товаров по категориям",
        hello: "Привет",
        "password-error": "Пароли не совпадают",
        "phone-error": "Неверный формат номера телефона",
        "no-discounts": "Нет товаров со скидками",
        "news-date": "Дата",
        "user-exists": "Пользователь с этим номером телефона уже существует",
        "logout-success": "Вы вышли из аккаунта",
        "no-items": "Корзина пуста",
        "avatar-success": "Аватар обновлен",
        "username-error": "Имя пользователя должно быть от 3 до 20 символов",
        "order-details": "Детали заказа",
        "invalid-username": "Имя пользователя занято",
        "password-too-short": "Пароль должен быть не менее 6 символов"
    },
    en: {
        logo: "TechTrend",
        "nav-home": "Home",
        "nav-catalog": "Catalog",
        "nav-discounts": "Discounts",
        "nav-news": "News",
        "nav-about": "About Us",
        "nav-contact": "Contact",
        "search-placeholder": "Search products...",
        "theme-toggle": "Dark Theme",
        "theme-toggle-dark": "Light Theme",
        "lang-toggle": "RU",
        login: "Login",
        logout: "Logout",
        "hero-title": "Welcome to TechTrend",
        "hero-text": "Innovative electronics for your future. Smartphones, laptops, and accessories at the best prices!",
        "hero-button": "Shop Now",
        "filter-all": "All Categories",
        "filter-smartphones": "Smartphones",
        "filter-laptops": "Laptops",
        "filter-accessories": "Accessories",
        "sort-default": "Sort By: Default",
        "sort-price-asc": "Price: Low to High",
        "sort-price-desc": "Price: High to Low",
        "sort-name-asc": "Name: A-Z",
        "price-range": "Price:",
        "discounts-title": "Discounted Products",
        "news-title": "News",
        "about-title": "About Us",
        "about-text": "TechTrend is your trusted electronics store. Founded in 2015, our company strives to provide customers with the latest technologies from leading global brands.",
        "contact-title": "Contact",
        "contact-email": "Email: support@techtrend.com",
        "contact-phone": "Phone: +7 (999) 987-6543",
        "contact-address": "Address: Moscow, Innovation St., 5",
        "contact-hours": "Working Hours: Mon-Fri 10:00-19:00, Sat-Sun 11:00-17:00",
        "profile-title": "Profile",
        "profile-username": "Username:",
        "phone-placeholder": "Phone Number:",
        "profile-update": "Update Profile",
        "profile-orders": "Order History",
        "favorites-title": "Favorites",
        "login-title": "Login",
        "register-title": "Register",
        "username-placeholder": "Username",
        "password-placeholder": "Password",
        "confirm-password-placeholder": "Confirm Password",
        "login-button": "Login",
        "register-button": "Register",
        "register-link": "Sign Up",
        "login-link": "Already have an account? Log In",
        "close-button": "Close",
        "cart-title": "Cart",
        "cart-total": "Total:",
        "checkout-button": "Checkout",
        "notification-title": "Order Confirmation",
        "download-pdf": "Download Receipt",
        "review-title": "Leave a Review",
        "review-name": "Your Name",
        "review-text": "Your Review",
        "review-rating": "Rating",
        "review-submit": "Submit",
        footer: "© 2025 TechTrend. All rights reserved.",
        "details-button": "Details",
        "add-to-cart": "Add to Cart",
        "add-favorite": "Add to Favorites",
        "remove-favorite": "Remove from Favorites",
        "favorite-button": "Favorites",
        price: "Price",
        category: "Category",
        description: "Description",
        reviews: "Reviews",
        "no-reviews": "No reviews yet",
        "review-button": "Leave a Review",
        "back-to-catalog": "Back to Catalog",
        "remove-button": "Remove",
        "login-required": "Please log in",
        "fill-fields": "Please fill all fields",
        "no-favorites": "No favorite items",
        "no-products": "No products found",
        "order-date": "Date",
        items: "Items",
        "order-total": "Total",
        "no-orders": "No orders",
        "profile-updated": "Profile updated",
        "order-success": "Thank you for your order!",
        "order-receipt": "Order Receipt",
        username: "User",
        "invalid-login": "Invalid phone number or password",
        "register-success": "Registration successful",
        "chart-title": "Product Distribution by Category",
        hello: "Hello",
        "password-error": "Passwords do not match",
        "phone-error": "Invalid phone number format",
        "no-discounts": "No discounted items",
        "news-date": "Date",
        "user-exists": "User with this phone number already exists",
        "logout-success": "You have successfully logged out",
        "no-items": "Cart is empty",
        "avatar-success": "Avatar updated successfully",
        "username-error": "Username must be 3-20 characters long",
        "order-details": "Order Details",
        "invalid-username": "Username already taken",
        "password-too-short": "Password must be at least 6 characters"
    }
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentUser = JSON.parse(localStorage.getItem('user')) || null;
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
let users = JSON.parse(localStorage.getItem('users')) || {};
const itemsPerPage = 6;
let currentPage = 1;
let discountPage = 1;
let currentLanguage = localStorage.getItem('language') || 'ru';
let currentProductId = null;
let isRegisterMode = false;
let chartInstance = null;
let latestOrder = null;
let currentNewsIndex = 0;

function initialize() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
    updateLanguage();
    updateCart();
    updateUserStatus();
    renderProducts();
    renderDiscounts();
    renderNews();
    renderChart();
    window.addEventListener('hashchange', handleNavigation);
    const searchInput = document.querySelector('#searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', showSuggestions);
    }
    handleNavigation();
}

function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.contains('light');
    body.classList.toggle('light', !isLight);
    body.classList.toggle('dark', isLight);
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
    updateLanguage();
    renderChart();
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
}

function updateLanguage() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (key === 'theme-toggle') {
            element.textContent = translations[currentLanguage][document.body.classList.contains('light') ? 'theme-toggle' : 'theme-toggle-dark'];
        } else if (key === 'lang-toggle') {
            element.textContent = currentLanguage === 'ru' ? 'EN' : 'RU';
        } else {
            element.textContent = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('#categoryFilter option, #discountCategoryFilter option').forEach((option, index) => {
        const keys = ['filter-all', 'filter-smartphones', 'filter-laptops', 'filter-accessories'];
        option.textContent = translations[currentLanguage][keys[index]];
    });

    document.querySelectorAll('#sortFilter option, #discountSortFilter option').forEach((option, index) => {
        const keys = ['sort-default', 'sort-price-asc', 'sort-price-desc', 'sort-name-asc'];
        option.textContent = translations[currentLanguage][keys[index]];
    });

    resetFilters();
    renderProducts();
    renderCart();
    renderDiscounts();
    renderNews();
    if (currentProductId) showProductDetail(currentProductId);
    if (document.querySelector('#profileModal')?.style.display === 'flex') showProfile();
    if (document.querySelector('#authModal')?.style.display === 'flex') showAuthPage();
}

function updateUserStatus() {
    const userStatus = document.querySelector('#userStatus');
    if (!userStatus) return;
    if (currentUser) {
        userStatus.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;
        userStatus.setAttribute('data-lang-key', '');
    } else {
        userStatus.innerHTML = translations[currentLanguage]['login'];
        userStatus.setAttribute('data-lang-key', 'login');
    }
}

function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (!value.startsWith('7978')) {
        value = '7978' + value;
    }
    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    let formatted = '+7 (978)';
    if (value.length > 4) {
        formatted += ' ' + value.slice(4, 7);
    }
    if (value.length > 7) {
        formatted += '-' + value.slice(7, 9);
    }
    if (value.length > 9) {
        formatted += '-' + value.slice(9, 11);
    }
    input.value = formatted;
}

function showSpinner(spinnerId = 'spinner') {
    const spinner = document.querySelector(`#${spinnerId}`);
    if (spinner) {
        spinner.style.display = 'block';
        setTimeout(() => spinner.style.display = 'none', 500);
    }
}

function animateCartAdd(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    const productElement = document.querySelector(`.product img[src="${product.image}"]`);
    const cartButton = document.querySelector('.cart-btn');
    if (!productElement || !cartButton) return;
    const img = document.createElement('img');
    img.src = product.image;
    img.className = 'cart-animation';
    const rect = productElement.getBoundingClientRect();
    img.style.left = `${rect.left}px`;
    img.style.top = `${rect.top}px`;
    document.body.appendChild(img);
    const cartRect = cartButton.getBoundingClientRect();
    setTimeout(() => {
        img.style.left = `${cartRect.left}px`;
        img.style.top = `${cartRect.top}px`;
        img.style.width = '20px';
        img.style.height = '20px';
        img.style.opacity = '0';
    }, 50);
    setTimeout(() => img.remove(), 600);
}

function handleNavigation() {
    const hash = window.location.hash || '#home';
    document.querySelectorAll('#products, #productDetail, #discounts, #news, #authModal, #profileModal').forEach(el => {
        if (el) el.style.display = 'none';
    });
    const pagination = document.querySelector('#pagination');
    const discountPagination = document.querySelector('#discountPagination');
    if (pagination) pagination.style.display = 'none';
    if (discountPagination) discountPagination.style.display = 'none';

    if (hash === '#home' || hash === '#catalog') {
        const products = document.querySelector('#products');
        if (products) products.style.display = 'grid';
        if (pagination) pagination.style.display = 'flex';
        currentPage = 1;
        resetFilters();
        filterProducts();
    } else if (hash === '#discounts') {
        const discounts = document.querySelector('#discounts');
        if (discounts) discounts.style.display = 'block';
        if (discountPagination) discountPagination.style.display = 'flex';
        discountPage = 1;
        resetFilters();
        filterDiscounts();
    } else if (hash === '#news') {
        const news = document.querySelector('#news');
        if (news) news.style.display = 'block';
        renderNews();
    } else if (hash === '#profile') {
        if (currentUser) {
            openModal('profileModal');
            showProfile();
        } else {
            openModal('authModal');
            showAuthPage();
        }
    } else if (hash.startsWith('#product-')) {
        const productId = parseInt(hash.split('-')[1]);
        showProductDetail(productId);
    }
}

function resetFilters() {
    const categoryFilter = document.querySelector('#categoryFilter');
    const sortFilter = document.querySelector('#sortFilter');
    const minPrice = document.querySelector('#minPrice');
    const maxPrice = document.querySelector('#maxPrice');
    const discountCategoryFilter = document.querySelector('#discountCategoryFilter');
    const discountSortFilter = document.querySelector('#discountSortFilter');
    const discountMinPrice = document.querySelector('#discountMinPrice');
    const discountMaxPrice = document.querySelector('#discountMaxPrice');

    if (categoryFilter) categoryFilter.value = 'all';
    if (sortFilter) sortFilter.value = 'default';
    if (minPrice) minPrice.value = 0;
    if (maxPrice) maxPrice.value = 150000;
    if (discountCategoryFilter) discountCategoryFilter.value = 'all';
    if (discountSortFilter) discountSortFilter.value = 'default';
    if (discountMinPrice) discountMinPrice.value = 0;
    if (discountMaxPrice) discountMaxPrice.value = 150000;
}

function filterProducts() {
    showSpinner();
    const category = document.querySelector('#categoryFilter')?.value || 'all';
    const minPrice = parseFloat(document.querySelector('#minPrice')?.value) || 0;
    const maxPrice = parseFloat(document.querySelector('#maxPrice')?.value) || Infinity;
    let filtered = productsData.filter(p => {
        const price = p.discount ? p.price * (1 - p.discount / 100) : p.price;
        return (category === 'all' || p.category === category) &&
               price >= minPrice && price <= maxPrice;
    });
    sortProducts(filtered);
}

function sortProducts(products = null) {
    const sort = document.querySelector('#sortFilter')?.value || 'default';
    let sorted = products || productsData;
    if (sort === 'price-asc') {
        sorted = sorted.sort((a, b) => {
            const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
            const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
            return priceA - priceB;
        });
    } else if (sort === 'price-desc') {
        sorted = sorted.sort((a, b) => {
            const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
            const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
            return priceB - priceA;
        });
    } else if (sort === 'name-asc') {
        sorted = sorted.sort((a, b) => a[currentLanguage === 'ru' ? 'name' : 'name_en'].localeCompare(b[currentLanguage === 'ru' ? 'name' : 'name_en']));
    }
    renderProducts(sorted);
}

function filterDiscounts() {
    showSpinner('discountSpinner');
    const category = document.querySelector('#discountCategoryFilter')?.value || 'all';
    const minPrice = parseFloat(document.querySelector('#discountMinPrice')?.value) || 0;
    const maxPrice = parseFloat(document.querySelector('#discountMaxPrice')?.value) || Infinity;
    let filtered = productsData.filter(p => p.discount &&
        (category === 'all' || p.category === category) &&
        (p.price * (1 - p.discount / 100)) >= minPrice &&
        (p.price * (1 - p.discount / 100)) <= maxPrice);
    sortDiscounts(filtered);
}

function sortDiscounts(products = null) {
    const sort = document.querySelector('#discountSortFilter')?.value || 'default';
    let sorted = products || productsData.filter(p => p.discount);
    if (sort === 'price-asc') {
        sorted = sorted.sort((a, b) => (a.price * (1 - a.discount / 100)) - (b.price * (1 - b.discount / 100)));
    } else if (sort === 'price-desc') {
        sorted = sorted.sort((a, b) => (b.price * (1 - b.discount / 100)) - (a.price * (1 - b.discount / 100)));
    } else if (sort === 'name-asc') {
        sorted = sorted.sort((a, b) => a[currentLanguage === 'ru' ? 'name' : 'name_en'].localeCompare(b[currentLanguage === 'ru' ? 'name' : 'name_en']));
    }
    renderDiscounts(sorted);
}

function renderProducts(products = productsData) {
    const productsContainer = document.querySelector('#products');
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = products.slice(start, end);
    if (paginated.length === 0) {
        productsContainer.innerHTML = `<p>${translations[currentLanguage]['no-products']}</p>`;
    } else {
        paginated.forEach(product => {
            const price = product.price.toFixed(2);
            const finalPrice = product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : price;
            const isFavorite = favorites.includes(product.id);
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
                <h3>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h3>
                <p>${product.discount ? `
                    <span class="price-error">${price} ₽</span>
                    <span class="price-final">${finalPrice} ₽</span>
                ` : `${price} ₽`}</p>
                <button onclick="showProductDetail(${product.id})">${translations[currentLanguage]['details-button']}</button>
                <button onclick="addToCart(${product.id})">${translations[currentLanguage]['add-to-cart']}</button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    ${isFavorite ? translations[currentLanguage]['remove-favorite'] : translations[currentLanguage]['add-favorite']}
                </button>
            `;
            productsContainer.appendChild(productElement);
        });
    }
    renderPagination(products.length, 'pagination', currentPage, 'changePage');
}

function renderDiscounts(products = productsData.filter(p => p.discount)) {
    const productsContainer = document.querySelector('#discountProducts');
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    const start = (discountPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = products.slice(start, end);
    if (paginated.length === 0) {
        productsContainer.innerHTML = `<p>${translations[currentLanguage]['no-discounts']}</p>`;
    } else {
        paginated.forEach(product => {
            const price = product.price.toFixed(2);
            const finalPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
            const isFavorite = favorites.includes(product.id);
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
                <h3>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h3>
                <p>
                    <span class="price-error">${price} ₽</span>
                    <span class="price-final">${finalPrice} ₽</span>
                </p>
                <button onclick="showProductDetail(${product.id})">${translations[currentLanguage]['details-button']}</button>
                <button onclick="addToCart(${product.id})">${translations[currentLanguage]['add-to-cart']}</button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    ${isFavorite ? translations[currentLanguage]['remove-favorite'] : translations[currentLanguage]['add-favorite']}
                </button>
            `;
            productsContainer.appendChild(productElement);
        });
    }
    renderPagination(products.length, 'discountPagination', discountPage, 'changeDiscountPage');
}

function renderPagination(totalItems, containerId, currentPage, changePageFunc) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.querySelector(`#${containerId}`);
    if (!pagination) return;
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.onclick = () => window[changePageFunc](i);
        pagination.appendChild(button);
    }
}

function changePage(page) {
    currentPage = page;
    filterProducts();
}

function changeDiscountPage(page) {
    discountPage = page;
    filterDiscounts();
}

function updatePriceRange() {
    const minPrice = document.querySelector('#minPrice');
    const maxPrice = document.querySelector('#maxPrice');
    if (minPrice && maxPrice && parseFloat(minPrice.value) > parseFloat(maxPrice.value)) {
        maxPrice.value = minPrice.value;
    }
    filterProducts();
}

function updateDiscountPriceRange() {
    const minPrice = document.querySelector('#discountMinPrice');
    const maxPrice = document.querySelector('#discountMaxPrice');
    if (minPrice && maxPrice && parseFloat(minPrice.value) > parseFloat(maxPrice.value)) {
        maxPrice.value = minPrice.value;
    }
    filterDiscounts();
}

function showProductDetail(id) {
    currentProductId = id;
    window.location.hash = `#product-${id}`;
    const products = document.querySelector('#products');
    const pagination = document.querySelector('#pagination');
    if (products) products.style.display = 'none';
    if (pagination) pagination.style.display = 'none';
    const productDetail = document.querySelector('#productDetail');
    if (!productDetail) return;
    productDetail.style.display = 'block';
    const product = productsData.find(p => p.id === id);
    if (!product) return;
    const price = product.price.toFixed(2);
    const finalPrice = product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : price;
    const isFavorite = favorites.includes(product.id);
    const productReviews = reviews[id] || [];
    productDetail.innerHTML = `
        <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
        <h2>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h2>
        <p><strong>${translations[currentLanguage]['category']}:</strong> ${translations[currentLanguage][`filter-${product.category}`]}</p>
        <p><strong>${translations[currentLanguage]['price']}:</strong> ${product.discount ? `
            <span class="price-error">${price} ₽</span>
            <span class="price-final">${finalPrice} ₽</span>
        ` : `${price} ₽`}</p>
        <p><strong>${translations[currentLanguage]['description']}:</strong> ${product[currentLanguage === 'ru' ? 'description' : 'description_en']}</p>
        <button onclick="addToCart(${product.id})">${translations[currentLanguage]['add-to-cart']}</button>
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
            ${isFavorite ? translations[currentLanguage]['remove-favorite'] : translations[currentLanguage]['add-favorite']}
        </button>
        <button onclick="openModal('reviewModal'); setReviewProduct(${product.id})">${translations[currentLanguage]['review-button']}</button>
        <button onclick="window.location.hash='#catalog'">${translations[currentLanguage]['back-to-catalog']}</button>
        <div class="reviews">
            <h3>${translations[currentLanguage]['reviews']}</h3>
            <div id="productReviews">${renderReviews(productReviews)}</div>
        </div>
    `;
}

function renderReviews(productReviews) {
    if (!productReviews.length) return `<p>${translations[currentLanguage]['no-reviews']}</p>`;
    return productReviews.map(review => `
        <div class="review">
            <p><strong>${review.name}</strong> (${'★'.repeat(review.rating)})</p>
            <p>${review.text}</p>
        </div>
    `).join('');
}

function setReviewProduct(id) {
    currentProductId = id;
}

function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    animateCartAdd(id);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartCount = document.querySelector('#cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    renderCart();
}

function renderCart() {
    const cartItems = document.querySelector('#cartItems');
    if (!cartItems) return;
    cartItems.innerHTML = '';
    let total = 0;
    if (!cart.length) {
        cartItems.innerHTML = `<p>${translations[currentLanguage]['no-items']}</p>`;
    } else {
        cart.forEach(item => {
            const product = productsData.find(p => p.id === item.id);
            if (!product) return;
            const price = product.discount ? product.price * (1 - product.discount / 100) : product.price;
            const itemTotal = price * item.quantity;
            total += itemTotal;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
                <span>${product[currentLanguage === 'ru' ? 'name' : 'name_en']} (x${item.quantity})</span>
                <span>${itemTotal.toFixed(2)} ₽</span>
                <button onclick="removeFromCart(${item.id})">${translations[currentLanguage]['remove-button']}</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    const cartTotal = document.querySelector('#cartTotal');
    if (cartTotal) cartTotal.textContent = total.toFixed(2);
}

function toggleFavorite(id) {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        openModal('authModal');
        return;
    }
    const index = favorites.indexOf(id);
    const favoriteBtn = document.querySelector(`.favorite-btn[onclick="toggleFavorite(${id})"]`);
    if (index > -1) {
        favorites.splice(index, 1);
        if (favoriteBtn) {
            favoriteBtn.classList.remove('active');
            favoriteBtn.textContent = translations[currentLanguage]['add-favorite'];
        }
    } else {
        favorites.push(id);
        if (favoriteBtn) {
            favoriteBtn.classList.add('active');
            favoriteBtn.textContent = translations[currentLanguage]['remove-favorite'];
        }
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
    if (window.location.hash === '#catalog' || window.location.hash === '#home') {
        renderProducts();
    } else if (window.location.hash === '#discounts') {
        renderDiscounts();
    } else if (window.location.hash.startsWith('#product-')) {
        showProductDetail(id);
    }
}

function renderFavorites() {
    const favoritesList = document.querySelector('#favoritesList');
    if (!favoritesList) return;
    favoritesList.innerHTML = '';
    if (!favorites.length) {
        favoritesList.innerHTML = `<p>${translations[currentLanguage]['no-favorites']}</p>`;
        return;
    }
    favorites.forEach(id => {
        const product = productsData.find(p => p.id === id);
        if (!product) return;
        const price = product.price.toFixed(2);
        const finalPrice = product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : price;
        const favoriteItem = document.createElement('div');
        favoriteItem.className = 'product';
        favoriteItem.innerHTML = `
            <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
            <h3>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h3>
            <p>${product.discount ? `
                <span class="price-error">${price} ₽</span>
                <span class="price-final">${finalPrice} ₽</span>
            ` : `${price} ₽`}</p>
            <button onclick="showProductDetail(${product.id})">${translations[currentLanguage]['details-button']}</button>
            <button onclick="addToCart(${product.id})">${translations[currentLanguage]['add-to-cart']}</button>
            <button class="favorite-btn active" onclick="toggleFavorite(${product.id})">${translations[currentLanguage]['remove-favorite']}</button>
        `;
        favoritesList.appendChild(favoriteItem);
    });
}

function openModal(modalId) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (modal) modal.style.display = 'none';
    });
    const modal = document.querySelector(`#${modalId}`);
    if (modal) modal.style.display = 'flex';
    if (modalId === 'cartModal') renderCart();
    if (modalId === 'favoritesModal') renderFavorites();
    if (modalId === 'profileModal' && currentUser) showProfile();
    if (modalId === 'authModal') showAuthPage();
}

function closeModal(modalId) {
    const modal = document.querySelector(`#${modalId}`);
    if (modal) modal.style.display = 'none';
}

function showAuthPage() {
    const authTitle = document.querySelector('#authTitle');
    const authSubmit = document.querySelector('#authSubmit');
    const switchAuth = document.querySelector('#switchAuth');
    const usernameField = document.querySelector('#usernameField');
    const confirmPasswordField = document.querySelector('#confirmPasswordField');
    if (!authTitle || !authSubmit || !switchAuth || !usernameField || !confirmPasswordField) return;
    const usernameInput = document.querySelector('#usernameInput');
    const phoneInput = document.querySelector('#phoneInput');
    const passwordInput = document.querySelector('#passwordInput');
    const confirmPasswordInput = document.querySelector('#confirmPasswordInput');
    if (usernameInput) usernameInput.value = '';
    if (phoneInput) phoneInput.value = '+7 (978)';
    if (passwordInput) passwordInput.value = '';
    if (confirmPasswordInput) confirmPasswordInput.value = '';
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    if (isRegisterMode) {
        authTitle.textContent = translations[currentLanguage]['register-title'];
        authSubmit.textContent = translations[currentLanguage]['register-button'];
        switchAuth.textContent = translations[currentLanguage]['login-link'];
        usernameField.style.display = 'block';
        confirmPasswordField.style.display = 'block';
    } else {
        authTitle.textContent = translations[currentLanguage]['login-title'];
        authSubmit.textContent = translations[currentLanguage]['login-button'];
        switchAuth.textContent = translations[currentLanguage]['register-link'];
        usernameField.style.display = 'none';
        confirmPasswordField.style.display = 'none';
    }
}

function switchAuthMode() {
    isRegisterMode = !isRegisterMode;
    showAuthPage();
}

function handleAuth() {
    const phone = document.querySelector('#phoneInput')?.value.trim();
    const password = document.querySelector('#passwordInput')?.value;
    const username = document.querySelector('#usernameInput')?.value.trim();
    const confirmPassword = document.querySelector('#confirmPasswordInput')?.value;
    const phoneError = document.querySelector('#phoneAuthError');
    const passwordError = document.querySelector('#passwordAuthError');
    const usernameError = document.querySelector('#usernameAuthError');
    const confirmPasswordError = document.querySelector('#confirmPasswordError');

    if (!phoneError || !passwordError || !usernameError || !confirmPasswordError) return;

    phoneError.textContent = '';
    passwordError.textContent = '';
    usernameError.textContent = '';
    confirmPasswordError.textContent = '';

    const phoneRegex = /^\+7 \(978\) \d{3}-\d{2}-\d{2}$/;
    if (!phone || !password || (isRegisterMode && (!username || !confirmPassword))) {
        phoneError.textContent = translations[currentLanguage]['fill-fields'];
        return;
    }
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = translations[currentLanguage]['phone-error'];
        return;
    }
    if (isRegisterMode) {
        if (username.length < 3 || username.length > 20) {
            usernameError.textContent = translations[currentLanguage]['username-error'];
            return;
        }
        if (Object.values(users).some(u => u.username === username)) {
            usernameError.textContent = translations[currentLanguage]['invalid-username'];
            return;
        }
        if (password.length < 6) {
            passwordError.textContent = translations[currentLanguage]['password-too-short'];
            return;
        }
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = translations[currentLanguage]['password-error'];
            return;
        }
        if (users[phone]) {
            phoneError.textContent = translations[currentLanguage]['user-exists'];
            return;
        }
        users[phone] = { phone, password, username, avatar: 'https://via.placeholder.com/80?text=Avatar' };
        localStorage.setItem('users', JSON.stringify(users));
        currentUser = users[phone];
        localStorage.setItem('user', JSON.stringify(currentUser));
        alert(translations[currentLanguage]['register-success']);
        closeModal('authModal');
        updateUserStatus();
    } else {
        if (users[phone] && users[phone].password === password) {
            currentUser = users[phone];
            localStorage.setItem('user', JSON.stringify(currentUser));
            closeModal('authModal');
            updateUserStatus();
        } else {
            phoneError.textContent = translations[currentLanguage]['invalid-login'];
        }
    }
}

function showProfile() {
    if (!currentUser) return;
    const profileUsername = document.querySelector('#profileUsername');
    const profilePhone = document.querySelector('#profilePhone');
    const profilePassword = document.querySelector('#profilePassword');
    const profileAvatar = document.querySelector('#profileAvatar');
    if (!profileUsername || !profilePhone || !profilePassword || !profileAvatar) return;
    profileUsername.value = currentUser.username;
    profilePhone.value = currentUser.phone;
    profilePassword.value = '';
    profileAvatar.src = currentUser.avatar;
    document.querySelectorAll('#usernameError, #phoneError, #passwordError').forEach(error => error.textContent = '');
    renderOrderHistory();
}

function updateProfile() {
    if (!currentUser) return;
    const username = document.querySelector('#profileUsername')?.value.trim();
    const phone = document.querySelector('#profilePhone')?.value.trim();
    const password = document.querySelector('#profilePassword')?.value;
    const usernameError = document.querySelector('#usernameError');
    const phoneError = document.querySelector('#phoneError');
    const passwordError = document.querySelector('#passwordError');

    if (!usernameError || !phoneError || !passwordError) return;

    usernameError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';

    const phoneRegex = /^\+7 \(978\) \d{3}-\d{2}-\d{2}$/;
    if (!username || !phone) {
        usernameError.textContent = translations[currentLanguage]['fill-fields'];
        return;
    }
    if (username.length < 3 || username.length > 20) {
        usernameError.textContent = translations[currentLanguage]['username-error'];
        return;
    }
    if (Object.values(users).some(u => u.username === username && u.phone !== currentUser.phone)) {
        usernameError.textContent = translations[currentLanguage]['invalid-username'];
        return;
    }
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = translations[currentLanguage]['phone-error'];
        return;
    }
    if (password && password.length < 6) {
        passwordError.textContent = translations[currentLanguage]['password-too-short'];
        return;
    }

    delete users[currentUser.phone];
    currentUser.username = username;
    currentUser.phone = phone;
    if (password) currentUser.password = password;
    users[phone] = currentUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(currentUser));
    alert(translations[currentLanguage]['profile-updated']);
    closeModal('profileModal');
    updateUserStatus();
}

function updateAvatar() {
    const avatarInput = document.querySelector('#avatarInput');
    const profileAvatar = document.querySelector('#profileAvatar');
    if (!avatarInput || !profileAvatar || !avatarInput.files[0]) return;
    const reader = new FileReader();
    reader.onload = () => {
        profileAvatar.src = reader.result;
        currentUser.avatar = reader.result;
        users[currentUser.phone].avatar = reader.result;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify(currentUser));
        alert(translations[currentLanguage]['avatar-success']);
    };
    reader.readAsDataURL(avatarInput.files[0]);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('user');
    favorites = [];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    closeModal('profileModal');
    updateUserStatus();
    alert(translations[currentLanguage]['logout-success']);
    window.location.hash = '#home';
}

function renderOrderHistory() {
    const orderHistory = document.querySelector('#orderHistory');
    if (!orderHistory) return;
    orderHistory.innerHTML = '';
    const userOrders = orders.filter(o => o.phone === currentUser.phone);
    if (!userOrders.length) {
        orderHistory.innerHTML = `<p>${translations[currentLanguage]['no-orders']}</p>`;
        return;
    }
    userOrders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order';
        let itemsHtml = order.items.map(item => {
            const product = productsData.find(p => p.id === item.id);
            if (!product) return '';
            const price = product.discount ? product.price * (1 - product.discount / 100) : product.price;
            return `<p>${product[currentLanguage === 'ru' ? 'name' : 'name_en']} (x${item.quantity}) - ${(price * item.quantity).toFixed(2)} ₽</p>`;
        }).join('');
        orderElement.innerHTML = `
            <p><strong>${translations[currentLanguage]['order-date']}:</strong> ${order.date}</p>
            <p><strong>${translations[currentLanguage]['items']}:</strong></p>
            ${itemsHtml}
            <p><strong>${translations[currentLanguage]['order-total']}:</strong> ${order.total.toFixed(2)} ₽</p>
            <button onclick="downloadOrderPDF(${orders.indexOf(order)})">${translations[currentLanguage]['download-pdf']}</button>
        `;
        orderHistory.appendChild(orderElement);
    });
}

function checkout() {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        openModal('authModal');
        return;
    }
    if (!cart.length) {
        alert(translations[currentLanguage]['no-items']);
        return;
    }
    const total = cart.reduce((sum, item) => {
        const product = productsData.find(p => p.id === item.id);
        if (!product) return sum;
        const price = product.discount ? product.price * (1 - product.discount / 100) : product.price;
        return sum + price * item.quantity;
    }, 0);
    const order = {
        phone: currentUser.phone,
        date: new Date().toLocaleString(),
        items: [...cart],
        total
    };
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    latestOrder = order;
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    closeModal('cartModal');
    openModal('notificationModal');
    const notificationMessage = document.querySelector('#notificationMessage');
    if (notificationMessage) {
        notificationMessage.textContent = translations[currentLanguage]['order-success'];
    }
    renderOrderHistory();
}

function transliterate(text) {
    const translitMap = {
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
        'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
        'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
        'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch',
        'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
        'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
        'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    };
    return text.split('').map(char => translitMap[char] || char).join('');
}

function downloadOrderPDF(orderIndex = null) {
    try {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) {
            console.error("jsPDF is not loaded");
            alert("Error: jsPDF library is not available. Please check the connection.");
            return;
        }

        const doc = new jsPDF();
        const order = orderIndex !== null ? orders[orderIndex] : latestOrder;
        if (!order) {
            console.error("Order not found");
            alert("Error: Order not found.");
            return;
        }

        // Set Helvetica font (supports English characters)
        doc.setFont("helvetica", "normal");
        doc.setFontSize(16);

        // Header
        doc.text("Order Receipt", 105, 20, { align: "center" });

        // Order details
        doc.setFontSize(12);
        const customerName = transliterate(currentUser.username);
        doc.text(`Customer: ${customerName}`, 20, 40);
        doc.text(`Phone Number: ${order.phone}`, 20, 50);
        doc.text(`Order Date: ${order.date}`, 20, 60);

        // Items header
        doc.setFontSize(14);
        doc.text("Items:", 20, 80);

        // Items list
        doc.setFontSize(12);
        let y = 90;
        order.items.forEach(item => {
            const product = productsData.find(p => p.id === item.id);
            if (!product) return;
            const price = product.discount ? product.price * (1 - product.discount / 100) : product.price;
            const itemTotal = (price * item.quantity).toFixed(2);
            const itemName = product['name_en']; // Always use English name for receipt
            doc.text(`${itemName} (x${item.quantity}) - ${itemTotal} ₽`, 30, y);
            y += 10;
        });

        // Total
        doc.setFontSize(14);
        doc.text(`Total: ${order.total.toFixed(2)} ₽`, 20, y + 10);

        // Footer
        doc.setFontSize(10);
        doc.text("Thank you for shopping at TechTrend!", 105, y + 30, { align: "center" });

        // Save PDF with sanitized filename
        const sanitizedDate = order.date.replace(/[: ]/g, '_');
        doc.save(`receipt_${sanitizedDate}.pdf`);
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Failed to generate receipt. Please check the browser console for details.");
    }
}

function submitReview() {
    const reviewName = document.querySelector('#reviewName')?.value.trim();
    const reviewText = document.querySelector('#reviewText')?.value.trim();
    const reviewRating = document.querySelector('#reviewRating')?.value;
    if (!reviewName || !reviewText || !reviewRating) {
        alert(translations[currentLanguage]['fill-fields']);
        return;
    }
    if (!reviews[currentProductId]) reviews[currentProductId] = [];
    reviews[currentProductId].push({
        name: reviewName,
        text: reviewText,
        rating: parseInt(reviewRating)
    });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    closeModal('reviewModal');
    showProductDetail(currentProductId);
}

function renderNews() {
    const sliderContainer = document.querySelector('#sliderContainer');
    if (!sliderContainer) return;
    sliderContainer.innerHTML = '';
    newsData.forEach((news, index) => {
        const newsItem = document.createElement('div');
        newsItem.className = `news-item ${index === currentNewsIndex ? 'active' : ''}`;
        newsItem.innerHTML = `
            <img src="${news.image}" alt="${news[currentLanguage === 'ru' ? 'title' : 'title_en']}">
            <div class="news-content">
                <h3>${news[currentLanguage === 'ru' ? 'title' : 'title_en']}</h3>
                <p>${news[currentLanguage === 'ru' ? 'description' : 'description_en'].substring(0, 100)}...</p>
                <p>${translations[currentLanguage]['news-date']}: ${news.date}</p>
                <button onclick="openNewsModal(${index})">${translations[currentLanguage]['details-button']}</button>
            </div>
        `;
        sliderContainer.appendChild(newsItem);
    });
    updateSlider();
}

function updateSlider() {
    const sliderContainer = document.querySelector('#sliderContainer');
    if (!sliderContainer) return;
    const items = sliderContainer.querySelectorAll('.news-item');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentNewsIndex);
    });
}

function prevNews() {
    currentNewsIndex = (currentNewsIndex - 1 + newsData.length) % newsData.length;
    updateSlider();
}

function nextNews() {
    currentNewsIndex = (currentNewsIndex + 1) % newsData.length;
    updateSlider();
}

function openNewsModal(index) {
    const news = newsData[index];
    if (!news) return;
    const newsModal = document.querySelector('#newsModal');
    if (!newsModal) return;
    document.querySelector('#newsModalImage').src = news.image;
    document.querySelector('#newsModalTitle').textContent = news[currentLanguage === 'ru' ? 'title' : 'title_en'];
    document.querySelector('#newsModalDate').textContent = `${translations[currentLanguage]['news-date']}: ${news.date}`;
    document.querySelector('#newsModalDescription').textContent = news[currentLanguage === 'ru' ? 'description' : 'description_en'];
    newsModal.style.display = 'flex';
}

function closeNewsModal() {
    const newsModal = document.querySelector('#newsModal');
    if (newsModal) newsModal.style.display = 'none';
}

function showSuggestions() {
    const input = document.querySelector('#searchInput')?.value.toLowerCase();
    const suggestions = document.querySelector('#suggestions');
    if (!input || !suggestions) {
        if (suggestions) suggestions.style.display = 'none';
        return;
    }
    const filtered = productsData.filter(p =>
        p[currentLanguage === 'ru' ? 'name' : 'name_en'].toLowerCase().includes(input)
    );
    suggestions.innerHTML = '';
    if (!filtered.length) {
        suggestions.style.display = 'none';
        return;
    }
    filtered.slice(0, 5).forEach(product => {
        const div = document.createElement('div');
        div.className = 'suggestion';
        div.innerHTML = `
            <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
            <span>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</span>
        `;
        div.onclick = () => {
            showProductDetail(product.id);
            suggestions.style.display = 'none';
            document.querySelector('#searchInput').value = '';
        };
        suggestions.appendChild(div);
    });
    suggestions.style.display = 'block';
}

function renderChart() {
    const ctx = document.querySelector('#categoryChart')?.getContext('2d');
    if (!ctx) return;
    if (chartInstance) chartInstance.destroy();
    const categories = ['smartphones', 'laptops', 'accessories'];
    const data = categories.map(cat => productsData.filter(p => p.category === cat).length);
    const isDark = document.body.classList.contains('dark');
    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories.map(cat => translations[currentLanguage][`filter-${cat}`]),
            datasets: [{
                data,
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
                borderColor: isDark ? '#333' : '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top', labels: { color: isDark ? '#ddd' : '#333' } },
                title: {
                    display: true,
                    text: translations[currentLanguage]['chart-title'],
                    color: isDark ? '#ddd' : '#333'
                }
            }
        }
    });
}

function scrollToSection(sectionId) {
    window.location.hash = sectionId;
    document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
}

initialize();