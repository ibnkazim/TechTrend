const productsData = [
    { id: 1, name: "Смартфон Alpha X", name_en: "Alpha X Smartphone", category: "smartphones", price: 59990, discount: 10, image: "https://via.placeholder.com/300x200?text=Alpha_X_Smartphone", description: "Флагманский смартфон с 6.7\" AMOLED и 128GB памяти.", description_en: "Flagship smartphone with 6.7\" AMOLED and 128GB storage." },
    { id: 2, name: "Ноутбук Pro 16", name_en: "Pro 16 Laptop", category: "laptops", price: 129990, discount: 15, image: "https://via.placeholder.com/300x200?text=Pro_16_Laptop", description: "Мощный ноутбук с 16\" дисплеем и RTX 3060.", description_en: "Powerful laptop with 16\" display and RTX 3060." },
    { id: 3, name: "Беспроводные наушники Air", name_en: "Air Earbuds", category: "accessories", price: 9990, discount: 20, image: "https://via.placeholder.com/300x200?text=Air_Earbuds", description: "Наушники с шумоподавлением.", description_en: "Earbuds with noise cancellation." },
    { id: 4, name: "Смартфон Neo 5G", name_en: "Neo 5G Smartphone", category: "smartphones", price: 39990, image: "https://via.placeholder.com/300x200?text=Neo_5G_Smartphone", description: "Смартфон с поддержкой 5G и 64MP камерой.", description_en: "5G smartphone with 64MP camera." },
    { id: 5, name: "Ноутбук Ultra 14", name_en: "Ultra 14 Laptop", category: "laptops", price: 99990, discount: 25, image: "https://via.placeholder.com/300x200?text=Ultra_14_Laptop", description: "Легкий ноутбук с 14\" экраном.", description_en: "Lightweight laptop with 14\" screen." },
    { id: 6, name: "Зарядное устройство 65W", name_en: "65W Charger", category: "accessories", price: 2990, image: "https://via.placeholder.com/300x200?text=65W_Charger", description: "Быстрое зарядное устройство.", description_en: "Fast charging device." },
    { id: 7, name: "Смартфон Vision Pro", name_en: "Vision Pro Smartphone", category: "smartphones", price: 79990, image: "https://via.placeholder.com/300x200?text=Vision_Pro_Smartphone", description: "Премиум смартфон с 108MP камерой.", description_en: "Premium smartphone with 108MP camera." },
    { id: 8, name: "Клавиатура RGB", name_en: "RGB Keyboard", category: "accessories", price: 4990, discount: 10, image: "https://via.placeholder.com/300x200?text=RGB_Keyboard", description: "Механическая клавиатура с подсветкой.", description_en: "Mechanical keyboard with RGB lighting." },
    { id: 9, name: "Ноутбук Gaming X", name_en: "Gaming X Laptop", category: "laptops", price: 149990, image: "https://via.placeholder.com/300x200?text=Gaming_X_Laptop", description: "Игровой ноутбук с RTX 3080.", description_en: "Gaming laptop with RTX 3080." },
    { id: 10, name: "Умные часы Fit 3", name_en: "Fit 3 Smartwatch", category: "accessories", price: 12990, image: "https://via.placeholder.com/300x200?text=Fit_3_Smartwatch", description: "Умные часы с мониторингом здоровья.", description_en: "Smartwatch with health monitoring." },
    { id: 11, name: "Смартфон Beta Z", name_en: "Beta Z Smartphone", category: "smartphones", price: 49990, discount: 5, image: "https://via.placeholder.com/300x200?text=Beta_Z_Smartphone", description: "Смартфон с 6.5\" экраном и 256GB памяти.", description_en: "Smartphone with 6.5\" screen and 256GB storage." },
    { id: 12, name: "Ноутбук Creator 15", name_en: "Creator 15 Laptop", category: "laptops", price: 119990, discount: 15, image: "https://via.placeholder.com/300x200?text=Creator_15_Laptop", description: "Ноутбук для профессионалов с 15\" 4K дисплеем.", description_en: "Laptop for professionals with 15\" 4K display." },
    { id: 13, name: "Беспроводная мышь Pro", name_en: "Pro Wireless Mouse", category: "accessories", price: 3990, discount: 10, image: "https://via.placeholder.com/300x200?text=Pro_Wireless_Mouse", description: "Эргономичная мышь с высокой точностью.", description_en: "Ergonomic mouse with high precision." },
    { id: 14, name: "Смартфон Gamma 7", name_en: "Gamma 7 Smartphone", category: "smartphones", price: 64990, discount: 12, image: "https://via.placeholder.com/300x200?text=Gamma_7_Smartphone", description: "Смартфон с тройной камерой 48MP.", description_en: "Smartphone with triple 48MP camera." },
    { id: 15, name: "Ноутбук Slim 13", name_en: "Slim 13 Laptop", category: "laptops", price: 89990, image: "https://via.placeholder.com/300x200?text=Slim_13_Laptop", description: "Ультратонкий ноутбук с 13\" экраном.", description_en: "Ultralight laptop with 13\" screen." },
    { id: 16, name: "Наушники Studio", name_en: "Studio Headphones", category: "accessories", price: 14990, discount: 20, image: "https://via.placeholder.com/300x200?text=Studio_Headphones", description: "Наушники с высоким качеством звука.", description_en: "Headphones with high-quality sound." },
    { id: 17, name: "Смартфон Delta 9", name_en: "Delta 9 Smartphone", category: "smartphones", price: 54990, discount: 8, image: "https://via.placeholder.com/300x200?text=Delta_9_Smartphone", description: "Смартфон с 6.8\" экраном и 512GB памяти.", description_en: "Smartphone with 6.8\" screen and 512GB storage." },
    { id: 18, name: "Внешний аккумулятор 10000mAh", name_en: "10000mAh Power Bank", category: "accessories", price: 2490, image: "https://via.placeholder.com/300x200?text=10000mAh_Power_Bank", description: "Компактный внешний аккумулятор.", description_en: "Compact power bank." },
    { id: 19, name: "Ноутбук Power 17", name_en: "Power 17 Laptop", category: "laptops", price: 139990, discount: 10, image: "https://via.placeholder.com/300x200?text=Power_17_Laptop", description: "Мощный ноутбук с 17\" экраном.", description_en: "Powerful laptop with 17\" screen." },
    { id: 20, name: "Веб-камера HD", name_en: "HD Webcam", category: "accessories", price: 5990, discount: 5, image: "https://via.placeholder.com/300x200?text=HD_Webcam", description: "Веб-камера с высоким разрешением.", description_en: "High-resolution webcam." },
];

const newsData = [
    {
        title: "Alpha X: Революция в мобильной фотографии",
        title_en: "Alpha X: Revolution in Mobile Photography",
        description: "Смартфон Alpha X с 108MP камерой и улучшенным ночным режимом теперь доступен со скидкой 10%! Идеально для съемки в любых условиях.",
        description_en: "The Alpha X smartphone with a 108MP camera and enhanced night mode is now available at a 10% discount! Perfect for shooting in any condition.",
        date: "2025-05-26",
        image: "https://via.placeholder.com/300x150?text=Alpha_X_News"
    },
    {
        title: "Pro 16: Новый стандарт производительности",
        title_en: "Pro 16: New Standard of Performance",
        description: "Ноутбук Pro 16 с RTX 3060 получил обновление прошивки, повышающее производительность на 15%. Скидка 15% только до конца мая!",
        description_en: "The Pro 16 laptop with RTX 3060 received a firmware update boosting performance by 15%. 15% off until the end of May!",
        date: "2025-05-24",
        image: "https://via.placeholder.com/300x150?text=Pro_16_News"
    },
    {
        title: "Air Earbuds: Звук без границ",
        title_en: "Air Earbuds: Sound Without Limits",
        description: "Беспроводные наушники Air с шумоподавлением теперь со скидкой 20%. Наслаждайтесь музыкой без отвлекающих факторов!",
        description_en: "Air wireless earbuds with noise cancellation are now 20% off. Enjoy music without distractions!",
        date: "2025-05-22",
        image: "https://via.placeholder.com/300x150?text=Air_Earbuds_News"
    },
    {
        title: "Ultra 14: Легкость, мощность, стиль",
        title_en: "Ultra 14: Light, Powerful, Stylish",
        description: "Ноутбук Ultra 14 с 14\" экраном и скидкой 25% — ваш идеальный спутник для работы и путешествий. Лимитированная акция!",
        description_en: "The Ultra 14 laptop with a 14\" screen and 25% discount is your perfect companion for work and travel. Limited offer!",
        date: "2025-05-20",
        image: "https://via.placeholder.com/300x150?text=Ultra_14_News"
    },
    {
        title: "Gamma 7: Скорость 5G уже здесь",
        title_en: "Gamma 7: 5G Speed is Here",
        description: "Смартфон Gamma 7 с тройной камерой 48MP и поддержкой 5G теперь со скидкой 12%. Обновите свой гаджет сегодня!",
        description_en: "The Gamma 7 smartphone with a triple 48MP camera and 5G support is now 12% off. Upgrade your gadget today!",
        date: "2025-05-18",
        image: "https://via.placeholder.com/300x150?text=Gamma_7_News"
    },
    {
        title: "Studio Headphones: Погружение в музыку",
        title_en: "Studio Headphones: Immersive Music Experience",
        description: "Наушники Studio с кристально чистым звуком и скидкой 20% — лучший выбор для меломанов. Доступны в черном и белом цветах!",
        description_en: "Studio headphones with crystal-clear sound and a 20% discount are the best choice for music lovers. Available in black and white!",
        date: "2025-05-16",
        image: "https://via.placeholder.com/300x150?text=Studio_Headphones_News"
    },
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
        "about-text": "TechTrend — ваш надежный магазин электроники. Мы предлагаем новейшие смартфоны, ноутбуки и аксессуары от ведущих брендов.",
        "contact-title": "Контакты",
        "contact-email": "Email: support@techtrend.ru",
        "contact-phone": "Телефон: +7 (999) 987-65-43",
        "contact-address": "Адрес: г. Москва, ул. Инноваций, д. 5",
        "contact-hours": "Часы работы: Пн-Пт 10:00-19:00, Сб-Вс 11:00-17:00",
        "profile-title": "Профиль",
        "profile-username": "Имя пользователя:",
        "profile-email": "Email:",
        "profile-update": "Обновить профиль",
        "profile-orders": "История заказов",
        "favorites-title": "Избранное",
        "login-title": "Вход",
        "register-title": "Регистрация",
        "username-placeholder": "Имя пользователя",
        "email-placeholder": "Email",
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
        "invalid-login": "Неверный email или пароль",
        "register-success": "Регистрация успешна",
        "chart-title": "Распределение товаров по категориям",
        hello: "Привет",
        "password-error": "Пароли не совпадают",
        "email-error": "Неверный формат email",
        "no-discounts": "Нет товаров со скидками",
        "news-date": "Дата",
        "user-exists": "Пользователь с этим email уже существует",
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
        "about-text": "TechTrend is your trusted electronics store. We offer the latest smartphones, laptops, and accessories from top brands.",
        "contact-title": "Contact",
        "contact-email": "Email: support@techtrend.com",
        "contact-phone": "Phone: +7 (999) 987-6543",
        "contact-address": "Address: Moscow, Innovation St., 5",
        "contact-hours": "Working Hours: Mon-Fri 10:00-19:00, Sat-Sun 11:00-17:00",
        "profile-title": "Profile",
        "profile-username": "Username:",
        "profile-email": "Email:",
        "profile-update": "Update Profile",
        "profile-orders": "Order History",
        "favorites-title": "Favorites",
        "login-title": "Login",
        "register-title": "Register",
        "username-placeholder": "Username",
        "email-placeholder": "Email",
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
        "invalid-login": "Invalid email or password",
        "register-success": "Registration successful",
        "chart-title": "Product Distribution by Category",
        hello: "Hello",
        "password-error": "Passwords do not match",
        "email-error": "Invalid email format",
        "no-discounts": "No discounted items",
        "news-date": "Date",
        "user-exists": "User with this email already exists",
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
    handleNavigation();
    console.log('Initialization complete. News rendered:', newsData.length, 'items'); // Отладка
}

function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.contains('light');
    body.classList.remove('light', 'dark');
    body.classList.add(isLight ? 'dark' : 'light');
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
    if (document.querySelector('#profileModal').style.display === 'flex') showProfile();
    if (document.querySelector('#authModal').style.display === 'flex') showAuthPage();
}

function updateUserStatus() {
    const userStatus = document.querySelector('#userStatus');
    if (currentUser) {
        userStatus.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;
        userStatus.setAttribute('data-lang-key', '');
    } else {
        userStatus.innerHTML = translations[currentLanguage]['login'];
        userStatus.setAttribute('data-lang-key', 'login');
    }
}

function showSpinner(spinnerId = 'spinner') {
    document.querySelector(`#${spinnerId}`).style.display = 'block';
    setTimeout(() => document.querySelector(`#${spinnerId}`).style.display = 'none', 500);
}

function animateCartAdd(productId) {
    const product = productsData.find(p => p.id === productId);
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

function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function handleNavigation() {
    const hash = window.location.hash || '#home';
    document.querySelectorAll('#products, #productDetail, #discounts, #news, #authModal, #profileModal').forEach(el => el.style.display = 'none');
    document.querySelector('#pagination').style.display = 'none';
    document.querySelector('#discountPagination').style.display = 'none';
    if (hash === '#home' || hash === '#catalog') {
        document.querySelector('#products').style.display = 'grid';
        document.querySelector('#pagination').style.display = 'flex';
        currentPage = 1;
        resetFilters();
        filterProducts();
    } else if (hash === '#discounts') {
        document.querySelector('#discounts').style.display = 'block';
        document.querySelector('#discountPagination').style.display = 'flex';
        discountPage = 1;
        resetFilters();
        filterDiscounts();
    } else if (hash === '#news') {
        document.querySelector('#news').style.display = 'block';
        renderNews();
    } else if (hash === '#profile') {
        if (currentUser) {
            showProfile();
        } else {
            window.location.hash = '#auth';
            showAuthPage();
        }
    } else if (hash === '#auth') {
        showAuthPage();
    } else if (hash === '#about' || hash === '#contact') {
        document.querySelector('#products').style.display = 'grid';
        document.querySelector('#pagination').style.display = 'flex';
        currentPage = 1;
        resetFilters();
        filterProducts();
    }
    scrollToSection(hash.slice(1));
}

function resetFilters() {
    const searchInput = document.querySelector('#searchInput');
    const categoryFilter = document.querySelector('#categoryFilter');
    const minPrice = document.querySelector('#minPrice');
    const maxPrice = document.querySelector('#maxPrice');
    const discountCategoryFilter = document.querySelector('#discountCategoryFilter');
    const discountMinPrice = document.querySelector('#discountMinPrice');
    const discountMaxPrice = document.querySelector('#discountMaxPrice');
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'all';
    if (minPrice) minPrice.value = 0;
    if (maxPrice) maxPrice.value = 150000;
    if (discountCategoryFilter) discountCategoryFilter.value = 'all';
    if (discountMinPrice) discountMinPrice.value = 0;
    if (discountMaxPrice) discountMaxPrice.value = 150000;
}

function renderProducts(products = productsData, page = currentPage) {
    showSpinner();
    const productsContainer = document.querySelector('#products');
    const productDetail = document.querySelector('#productDetail');
    productsContainer.style.display = 'grid';
    productDetail.style.display = 'none';
    productsContainer.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);
    if (paginatedProducts.length === 0) {
        productsContainer.innerHTML = `<p data-lang-key="no-products">${translations[currentLanguage]['no-products']}</p>`;
    } else {
        paginatedProducts.forEach(product => {
            const isFavorite = favorites.includes(product.id);
            const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
                <h3>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h3>
                <p>${product.discount ? `<span class="price-discounted">${product.price} ₽</span><span class="price-final">${finalPrice} ₽</span>` : `${product.price} ₽`}</p>
                <button onclick="showProductDetail(${product.id})" data-lang-key="details-button">${translations[currentLanguage]['details-button']}</button>
                <button onclick="addToCart(${product.id})" data-lang-key="add-to-cart">${translations[currentLanguage]['add-to-cart']}</button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})" data-lang-key="${isFavorite ? 'remove-favorite' : 'add-favorite'}">${translations[currentLanguage][isFavorite ? 'remove-favorite' : 'add-favorite']}</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }
    renderPagination(products.length, page, 'pagination', changePage);
}

function changePage(page) {
    currentPage = page;
    filterProducts();
    scrollToSection('catalog');
}

function changeDiscountPage(page) {
    discountPage = page;
    filterDiscounts();
    scrollToSection('discounts');
}

function filterProducts() {
    showSpinner();
    const search = document.querySelector('#searchInput').value.toLowerCase();
    const category = document.querySelector('#categoryFilter').value;
    const minPrice = parseInt(document.querySelector('#minPrice').value) || 0;
    const maxPrice = parseInt(document.querySelector('#maxPrice').value) || Infinity;
    const sort = document.querySelector('#sortFilter').value;

    let filteredProducts = productsData.filter(product => {
        const name = product[currentLanguage === 'ru' ? 'name' : 'name_en'].toLowerCase();
        const price = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
        return name.includes(search) &&
               (category === 'all' || product.category === category) &&
               price >= minPrice &&
               price <= maxPrice;
    });

    if (sort === 'price-asc') {
        filteredProducts.sort((a, b) => {
            const priceA = a.discount ? Math.round(a.price * (1 - a.discount / 100)) : a.price;
            const priceB = b.discount ? Math.round(b.price * (1 - b.discount / 100)) : b.price;
            return priceA - priceB;
        });
    } else if (sort === 'price-desc') {
        filteredProducts.sort((a, b) => {
            const priceA = a.discount ? Math.round(a.price * (1 - a.discount / 100)) : a.price;
            const priceB = b.discount ? Math.round(b.price * (1 - b.discount / 100)) : b.price;
            return priceB - priceA;
        });
    } else if (sort === 'name-asc') {
        filteredProducts.sort((a, b) => a[currentLanguage === 'ru' ? 'name' : 'name_en'].localeCompare(b[currentLanguage === 'ru' ? 'name' : 'name_en']));
    }

    renderProducts(filteredProducts);
}

function sortProducts() {
    filterProducts();
}

function updatePriceRange() {
    const minPrice = document.querySelector('#minPrice');
    const maxPrice = document.querySelector('#maxPrice');
    if (parseInt(minPrice.value) > parseInt(maxPrice.value)) {
        minPrice.value = maxPrice.value;
    }
    filterProducts();
}

function renderDiscounts(products = productsData.filter(p => p.discount), page = discountPage) {
    showSpinner('discountSpinner');
    const productsContainer = document.querySelector('#discountProducts');
    productsContainer.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);
    if (paginatedProducts.length === 0) {
        productsContainer.innerHTML = `<p data-lang-key="no-discounts">${translations[currentLanguage]['no-discounts']}</p>`;
    } else {
        paginatedProducts.forEach(product => {
            const isFavorite = favorites.includes(product.id);
            const finalPrice = Math.round(product.price * (1 - product.discount / 100));
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
                <h3>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h3>
                <p><span class="price-discounted">${product.price} ₽</span><span class="price-final">${finalPrice} ₽</span></p>
                <button onclick="showProductDetail(${product.id})" data-lang-key="details-button">${translations[currentLanguage]['details-button']}</button>
                <button onclick="addToCart(${product.id})" data-lang-key="add-to-cart">${translations[currentLanguage]['add-to-cart']}</button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})" data-lang-key="${isFavorite ? 'remove-favorite' : 'add-favorite'}">${translations[currentLanguage][isFavorite ? 'remove-favorite' : 'add-favorite']}</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }
    renderPagination(products.length, page, 'discountPagination', changeDiscountPage);
}

function filterDiscounts() {
    showSpinner('discountSpinner');
    const category = document.querySelector('#discountCategoryFilter').value;
    const minPrice = parseInt(document.querySelector('#discountMinPrice').value) || 0;
    const maxPrice = parseInt(document.querySelector('#discountMaxPrice').value) || Infinity;
    const sort = document.querySelector('#discountSortFilter').value;

    let filteredProducts = productsData.filter(product => product.discount).filter(product => {
        const price = Math.round(product.price * (1 - product.discount / 100));
        return (category === 'all' || product.category === category) &&
               price >= minPrice &&
               price <= maxPrice;
    });

    if (sort === 'price-asc') {
        filteredProducts.sort((a, b) => {
            const priceA = Math.round(a.price * (1 - a.discount / 100));
            const priceB = Math.round(b.price * (1 - b.discount / 100));
            return priceA - priceB;
        });
    } else if (sort === 'price-desc') {
        filteredProducts.sort((a, b) => {
            const priceA = Math.round(a.price * (1 - a.discount / 100));
            const priceB = Math.round(b.price * (1 - b.discount / 100));
            return priceB - priceA;
        });
    } else if (sort === 'name-asc') {
        filteredProducts.sort((a, b) => a[currentLanguage === 'ru' ? 'name' : 'name_en'].localeCompare(b[currentLanguage === 'ru' ? 'name' : 'name_en']));
    }

    renderDiscounts(filteredProducts);
}

function sortDiscounts() {
    filterDiscounts();
}

function updateDiscountPriceRange() {
    const minPrice = document.querySelector('#discountMinPrice');
    const maxPrice = document.querySelector('#discountMaxPrice');
    if (parseInt(minPrice.value) > parseInt(maxPrice.value)) {
        minPrice.value = maxPrice.value;
    }
    filterDiscounts();
}

function renderPagination(totalItems, currentPage, containerId, pageChangeHandler) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const container = document.querySelector(`#${containerId}`);
    container.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.onclick = () => pageChangeHandler(i);
        container.appendChild(button);
    }
}

function showProductDetail(id) {
    showSpinner();
    currentProductId = id;
    const product = productsData.find(p => p.id === id);
    if (!product) return;
    const productsContainer = document.querySelector('#products');
    const productDetail = document.querySelector('#productDetail');
    const isFavorite = favorites.includes(product.id);
    const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
    productsContainer.style.display = 'none';
    productDetail.style.display = 'block';
    document.querySelector('#pagination').style.display = 'none';
    productDetail.innerHTML = `
        <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
        <h2>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h2>
        <p data-lang-key="price">${translations[currentLanguage]['price']}: ${product.discount ? `<span class="price-discounted">${product.price} ₽</span><span class="price-final">${finalPrice} ₽</span>` : `${product.price} ₽`}</p>
        <p data-lang-key="category">${translations[currentLanguage]['category']}: ${translations[currentLanguage][`filter-${product.category}`]}</p>
        <p data-lang-key="description">${translations[currentLanguage]['description']}: ${product[currentLanguage === 'ru' ? 'description' : 'description_en']}</p>
        <button onclick="addToCart(${product.id})" data-lang-key="add-to-cart">${translations[currentLanguage]['add-to-cart']}</button>
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})" data-lang-key="${isFavorite ? 'remove-favorite' : 'add-favorite'}">${translations[currentLanguage][isFavorite ? 'remove-favorite' : 'add-favorite']}</button>
        <button onclick="window.location.hash='#catalog';renderProducts()" data-lang-key="back-to-catalog">${translations[currentLanguage]['back-to-catalog']}</button>
        <div class="reviews">
            <h3 data-lang-key="reviews">${translations[currentLanguage]['reviews']}</h3>
            <div id="reviewsList"></div>
            <button onclick="openModal('reviewModal')" data-lang-key="review-button">${translations[currentLanguage]['review-button']}</button>
        </div>
    `;
    renderReviews(id);
    window.location.hash = `#product-${id}`;
}

function renderReviews(productId) {
    const reviewsList = document.querySelector('#reviewsList');
    const productReviews = reviews[productId] || [];
    reviewsList.innerHTML = '';
    if (productReviews.length === 0) {
        reviewsList.innerHTML = `<p data-lang-key="no-reviews">${translations[currentLanguage]['no-reviews']}</p>`;
        return;
    }
    productReviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.innerHTML = `
            <p><strong>${review.name}</strong> (${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)})</p>
            <p>${review.text}</p>
        `;
        reviewsList.appendChild(reviewDiv);
    });
}

function submitReview() {
    const name = document.querySelector('#reviewName').value.trim();
    const text = document.querySelector('#reviewText').value.trim();
    const rating = parseInt(document.querySelector('#reviewRating').value);
    if (!name || !text) {
        alert(translations[currentLanguage]['fill-fields']);
        return;
    }
    if (!reviews[currentProductId]) reviews[currentProductId] = [];
    reviews[currentProductId].push({ name, text, rating });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    closeModal('reviewModal');
    showProductDetail(currentProductId);
}

function addToCart(id) {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        window.location.hash = '#auth';
        showAuthPage();
        return;
    }
    const existingItem = cart.find(item => item.id === id && item.userEmail === currentUser.email);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, quantity: 1, userEmail: currentUser.email });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    animateCartAdd(id);
}

function updateCart() {
    const cartCount = document.querySelector('#cartCount');
    const userCart = cart.filter(item => item.userEmail === currentUser?.email);
    const totalItems = userCart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    renderCart();
}

function renderCart() {
    const cartItems = document.querySelector('#cartItems');
    const cartTotal = document.querySelector('#cartTotal');
    cartItems.innerHTML = '';
    let total = 0;
    const userCart = cart.filter(item => item.userEmail === currentUser?.email);
    if (userCart.length === 0) {
        cartItems.innerHTML = `<p data-lang-key="no-items">${translations[currentLanguage]['no-items']}</p>`;
        cartTotal.textContent = '0';
        return;
    }
    userCart.forEach(item => {
        const product = productsData.find(p => p.id === item.id);
        if (!product) return;
        const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
        const itemTotal = finalPrice * item.quantity;
        total += itemTotal;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
            <span>${product[currentLanguage === 'ru' ? 'name' : 'name_en']} (x${item.quantity})</span>
            <span>${itemTotal} ₽</span>
            <button onclick="removeFromCart(${item.id})" data-lang-key="remove-button">${translations[currentLanguage]['remove-button']}</button>
        `;
        cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = total;
}

function removeFromCart(id) {
    cart = cart.filter(item => !(item.id === id && item.userEmail === currentUser.email));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function checkout() {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        window.location.hash = '#auth';
        showAuthPage();
        return;
    }
    const userCart = cart.filter(item => item.userEmail === currentUser.email);
    if (userCart.length === 0) {
        alert(translations[currentLanguage]['no-items']);
        return;
    }
    const order = {
        id: orders.length + 1,
        userEmail: currentUser.email,
        date: new Date().toISOString(),
        items: userCart,
        total: userCart.reduce((sum, item) => {
            const product = productsData.find(p => p.id === item.id);
            const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
            return sum + finalPrice * item.quantity;
        }, 0)
    };
    orders.push(order);
    latestOrder = order;
    localStorage.setItem('orders', JSON.stringify(orders));
    cart = cart.filter(item => item.userEmail !== currentUser.email);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    closeModal('cartModal');
    openModal('notificationModal');
    document.querySelector('#notificationMessage').innerHTML = `
        <p data-lang-key="order-success">${translations[currentLanguage]['order-success']}</p>
        <p>${translations[currentLanguage]['order-total']}: ${order.total} ₽</p>
    `;
}

function downloadOrderPDF() {
    if (!latestOrder) return;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(translations[currentLanguage]['order-receipt'], 10, 10);
    doc.setFontSize(12);
    doc.text(`${translations[currentLanguage]['username']}: ${currentUser.email}`, 10, 20);
    doc.text(`${translations[currentLanguage]['order-date']}: ${new Date(latestOrder.date).toLocaleString()}`, 10, 30);
    doc.text(`${translations[currentLanguage]['items']}:`, 10, 40);
    let yPos = 50;
    latestOrder.items.forEach((item, index) => {
        const product = productsData.find(p => p.id === item.id);
        const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
        doc.text(`${index + 1}. ${product[currentLanguage === 'ru' ? 'name' : 'name_en']} (x${item.quantity}) - ${finalPrice * item.quantity} ₽`, 15, yPos);
        yPos += 10;
    });
    doc.text(`${translations[currentLanguage]['order-total']}: ${latestOrder.total} ₽`, 10, yPos);
    doc.save('order_receipt.pdf');
}

function toggleFavorite(id) {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        window.location.hash = '#auth';
        showAuthPage();
        return;
    }
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    if (document.querySelector('#productDetail').style.display === 'block') {
        showProductDetail(currentProductId);
    } else if (window.location.hash === '#favorites') {
        renderFavorites();
    } else {
        renderProducts();
        renderDiscounts();
    }
}

function renderFavorites() {
    const favoritesList = document.querySelector('#favoritesList');
    favoritesList.innerHTML = '';
    const favoriteProducts = productsData.filter(p => favorites.includes(p.id));
    if (favoriteProducts.length === 0) {
        favoritesList.innerHTML = `<p data-lang-key="no-favorites">${translations[currentLanguage]['no-favorites']}</p>`;
        return;
    }
    favoriteProducts.forEach(product => {
        const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
            <h3>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h3>
            <p>${product.discount ? `<span class="price-discounted">${product.price} ₽</span><span class="price-final">${finalPrice} ₽</span>` : `${product.price} ₽`}</p>
            <button onclick="showProductDetail(${product.id})" data-lang-key="details-button">${translations[currentLanguage]['details-button']}</button>
            <button onclick="addToCart(${product.id})" data-lang-key="add-to-cart">${translations[currentLanguage]['add-to-cart']}</button>
            <button class="favorite-btn active" onclick="toggleFavorite(${product.id})" data-lang-key="remove-favorite">${translations[currentLanguage]['remove-favorite']}</button>
        `;
        favoritesList.appendChild(productDiv);
    });
}

function renderNews() {
    const sliderContainer = document.querySelector('#sliderContainer');
    if (!sliderContainer) {
        console.error('Slider container not found! Check index.html for #sliderContainer');
        return;
    }
    sliderContainer.innerHTML = '';
    console.log('Rendering news:', newsData); // Отладка
    newsData.forEach((news, index) => {
        const slide = document.createElement('div');
        slide.className = 'news-slide';
        slide.innerHTML = `
            <img src="${news.image}" alt="${news[currentLanguage === 'ru' ? 'title' : 'title_en']}">
            <h3>${news[currentLanguage === 'ru' ? 'title' : 'title_en']}</h3>
            <p data-lang-key="news-date">${translations[currentLanguage]['news-date']}: ${news.date}</p>
            <p>${news[currentLanguage === 'ru' ? 'description' : 'description_en'].substring(0, 50)}...</p>
        `;
        slide.onclick = () => openNewsModal(index);
        sliderContainer.appendChild(slide);
    });
    updateSlider();
}

function updateSlider() {
    const sliderContainer = document.querySelector('#sliderContainer');
    const slideWidth = document.querySelector('.news-slide').offsetWidth + 20;
    sliderContainer.style.transform = `translateX(-${currentNewsIndex * slideWidth}px)`;
}

function prevNews() {
    currentNewsIndex = Math.max(0, currentNewsIndex - 1);
    updateSlider();
}

function nextNews() {
    currentNewsIndex = Math.min(newsData.length - 3, currentNewsIndex + 1);
    updateSlider();
}

function openNewsModal(index) {
    const news = newsData[index];
    document.querySelector('#newsModalImage').src = news.image;
    document.querySelector('#newsModalTitle').textContent = news[currentLanguage === 'ru' ? 'title' : 'title_en'];
    document.querySelector('#newsModalDate').textContent = `${translations[currentLanguage]['news-date']}: ${news.date}`;
    document.querySelector('#newsModalDescription').textContent = news[currentLanguage === 'ru' ? 'description' : 'description_en'];
    document.querySelector('#newsModal').style.display = 'flex';
}

function closeNewsModal() {
    document.querySelector('#newsModal').style.display = 'none';
}

function showAuthPage() {
    openModal('authModal');
    isRegisterMode = false;
    document.querySelector('#authTitle').setAttribute('data-lang-key', 'login-title');
    document.querySelector('#authTitle').textContent = translations[currentLanguage]['login-title'];
    document.querySelector('#authSubmit').setAttribute('data-lang-key', 'login-button');
    document.querySelector('#authSubmit').textContent = translations[currentLanguage]['login-button'];
    document.querySelector('#switchAuth').setAttribute('data-lang-key', 'register-link');
    document.querySelector('#switchAuth').textContent = translations[currentLanguage]['register-link'];
    document.querySelector('#usernameField').style.display = 'none';
    document.querySelector('#confirmPasswordField').style.display = 'none';
    clearAuthErrors();
}

function switchAuthMode() {
    isRegisterMode = !isRegisterMode;
    document.querySelector('#authTitle').setAttribute('data-lang-key', isRegisterMode ? 'register-title' : 'login-title');
    document.querySelector('#authTitle').textContent = translations[currentLanguage][isRegisterMode ? 'register-title' : 'login-title'];
    document.querySelector('#authSubmit').setAttribute('data-lang-key', isRegisterMode ? 'register-button' : 'login-button');
    document.querySelector('#authSubmit').textContent = translations[currentLanguage][isRegisterMode ? 'register-button' : 'login-button'];
    document.querySelector('#switchAuth').setAttribute('data-lang-key', isRegisterMode ? 'login-link' : 'register-link');
    document.querySelector('#switchAuth').textContent = translations[currentLanguage][isRegisterMode ? 'login-link' : 'register-link'];
    document.querySelector('#usernameField').style.display = isRegisterMode ? 'block' : 'none';
    document.querySelector('#confirmPasswordField').style.display = isRegisterMode ? 'block' : 'none';
    clearAuthErrors();
}

function clearAuthErrors() {
    document.querySelector('#usernameAuthError').textContent = '';
    document.querySelector('#emailAuthError').textContent = '';
    document.querySelector('#passwordAuthError').textContent = '';
    document.querySelector('#confirmPasswordError').textContent = '';
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleAuth() {
    const username = document.querySelector('#usernameInput').value.trim();
    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
    const confirmPassword = document.querySelector('#confirmPasswordInput').value.trim();
    clearAuthErrors();

    let hasError = false;

    if (isRegisterMode) {
        if (!username || username.length < 3 || username.length > 20) {
            document.querySelector('#usernameAuthError').textContent = translations[currentLanguage]['username-error'];
            hasError = true;
        }
        if (!validateEmail(email)) {
            document.querySelector('#emailAuthError').textContent = translations[currentLanguage]['email-error'];
            hasError = true;
        }
        if (password.length < 6) {
            document.querySelector('#passwordAuthError').textContent = translations[currentLanguage]['password-too-short'];
            hasError = true;
        }
        if (password !== confirmPassword) {
            document.querySelector('#confirmPasswordError').textContent = translations[currentLanguage]['password-error'];
            hasError = true;
        }
        if (users[email]) {
            document.querySelector('#emailAuthError').textContent = translations[currentLanguage]['user-exists'];
            hasError = true;
        }
        if (!hasError) {
            users[email] = { username, email, password, avatar: 'https://via.placeholder.com/80?text=Avatar' };
            localStorage.setItem('users', JSON.stringify(users));
            currentUser = { email, username, avatar: users[email].avatar };
            localStorage.setItem('user', JSON.stringify(currentUser));
            alert(translations[currentLanguage]['register-success']);
            closeModal('authModal');
            updateUserStatus();
            window.location.hash = '#profile';
            showProfile();
        }
    } else {
        if (!validateEmail(email)) {
            document.querySelector('#emailAuthError').textContent = translations[currentLanguage]['email-error'];
            hasError = true;
        }
        if (!password) {
            document.querySelector('#passwordAuthError').textContent = translations[currentLanguage]['fill-fields'];
            hasError = true;
        }
        if (users[email] && users[email].password === password) {
            currentUser = { email, username: users[email].username, avatar: users[email].avatar };
            localStorage.setItem('user', JSON.stringify(currentUser));
            closeModal('authModal');
            updateUserStatus();
            window.location.hash = '#profile';
            showProfile();
        } else {
            document.querySelector('#emailAuthError').textContent = translations[currentLanguage]['invalid-login'];
            hasError = true;
        }
    }
}

function showProfile() {
    if (!currentUser) {
        window.location.hash = '#auth';
        showAuthPage();
        return;
    }
    openModal('profileModal');
    document.querySelector('#profileUsername').value = currentUser.username;
    document.querySelector('#profileEmail').value = currentUser.email;
    document.querySelector('#profilePassword').value = '';
    document.querySelector('#profileAvatar').src = currentUser.avatar;
    renderOrderHistory();
    clearProfileErrors();
}

function clearProfileErrors() {
    document.querySelector('#usernameError').textContent = '';
    document.querySelector('#emailError').textContent = '';
    document.querySelector('#passwordError').textContent = '';
}

function updateProfile() {
    const username = document.querySelector('#profileUsername').value.trim();
    const email = document.querySelector('#profileEmail').value.trim();
    const password = document.querySelector('#profilePassword').value.trim();
    clearProfileErrors();

    let hasError = false;

    if (!username || username.length < 3 || username.length > 20) {
        document.querySelector('#usernameError').textContent = translations[currentLanguage]['username-error'];
        hasError = true;
    }
    if (!validateEmail(email)) {
        document.querySelector('#emailError').textContent = translations[currentLanguage]['email-error'];
        hasError = true;
    }
    if (email !== currentUser.email && users[email]) {
        document.querySelector('#emailError').textContent = translations[currentLanguage]['user-exists'];
        hasError = true;
    }
    if (password && password.length < 6) {
        document.querySelector('#passwordError').textContent = translations[currentLanguage]['password-too-short'];
        hasError = true;
    }

    if (!hasError) {
        if (email !== currentUser.email) {
            users[email] = users[currentUser.email];
            delete users[currentUser.email];
        }
        users[email] = {
            ...users[email],
            username,
            email,
            password: password || users[email].password,
            avatar: currentUser.avatar
        };
        currentUser = { email, username, avatar: users[email].avatar };
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify(currentUser));
        cart = cart.map(item => item.userEmail === currentUser.email ? { ...item, userEmail: email } : item);
        orders = orders.map(order => order.userEmail === currentUser.email ? { ...order, userEmail: email } : order);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('orders', JSON.stringify(orders));
        alert(translations[currentLanguage]['profile-updated']);
        updateUserStatus();
        showProfile();
    }
}

function updateAvatar() {
    const file = document.querySelector('#avatarInput').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            currentUser.avatar = reader.result;
            users[currentUser.email].avatar = reader.result;
            localStorage.setItem('user', JSON.stringify(currentUser));
            localStorage.setItem('users', JSON.stringify(users));
            document.querySelector('#profileAvatar').src = reader.result;
            alert(translations[currentLanguage]['avatar-success']);
            updateUserStatus();
        };
        reader.readAsDataURL(file);
    }
}

function renderOrderHistory() {
    const orderHistory = document.querySelector('#orderHistory');
    orderHistory.innerHTML = '';
    const userOrders = orders.filter(order => order.userEmail === currentUser.email);
    if (userOrders.length === 0) {
        orderHistory.innerHTML = `<p data-lang-key="no-orders">${translations[currentLanguage]['no-orders']}</p>`;
        return;
    }
    userOrders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order';
        let itemsList = '';
        order.items.forEach(item => {
            const product = productsData.find(p => p.id === item.id);
            if (product) {
                const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
                itemsList += `<p>${product[currentLanguage === 'ru' ? 'name' : 'name_en']} (x${item.quantity}) - ${finalPrice * item.quantity} ₽</p>`;
            }
        });
        orderDiv.innerHTML = `
            <p data-lang-key="order-date">${translations[currentLanguage]['order-date']}: ${new Date(order.date).toLocaleString()}</p>
            <p data-lang-key="items">${translations[currentLanguage]['items']}:</p>
            ${itemsList}
            <p data-lang-key="order-total">${translations[currentLanguage]['order-total']}: ${order.total} ₽</p>
            <button onclick="downloadOrderPDF(${order.id})" data-lang-key="download-pdf">${translations[currentLanguage]['download-pdf']}</button>
        `;
        orderHistory.appendChild(orderDiv);
    });
}

function downloadOrderPDF(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(translations[currentLanguage]['order-receipt'], 10, 10);
    doc.setFontSize(12);
    doc.text(`${translations[currentLanguage]['username']}: ${currentUser.email}`, 10, 20);
    doc.text(`${translations[currentLanguage]['order-date']}: ${new Date(order.date).toLocaleString()}`, 10, 30);
    doc.text(`${translations[currentLanguage]['items']}:`, 10, 40);
    let yPos = 50;
    order.items.forEach((item, index) => {
        const product = productsData.find(p => p.id === item.id);
        const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
        doc.text(`${index + 1}. ${product[currentLanguage === 'ru' ? 'name' : 'name_en']} (x${item.quantity}) - ${finalPrice * item.quantity} ₽`, 15, yPos);
        yPos += 10;
    });
    doc.text(`${translations[currentLanguage]['order-total']}: ${order.total} ₽`, 10, yPos);
    doc.save(`order_${order.id}_receipt.pdf`);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('user');
    updateUserStatus();
    updateCart();
    closeModal('profileModal');
    alert(translations[currentLanguage]['logout-success']);
    window.location.hash = '#home';
}

function renderChart() {
    const ctx = document.querySelector('#categoryChart').getContext("2d");
    const categories = ["smartphones", "laptops", "accessories"];
    const data = categories.map(cat => productsData.filter(p => p.category === cat).length);
    const backgroundColors = ["#FF6384", "#36A2EB", "#FFCE56"];
    const borderColors = ["#FF6384", "#36A2EB", "#FFCE56"];

    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: "pie",
        data: 300,
        datasets: [{
            data: [data],
            backgroundColor: ["#FF6384", "#36FFFFEB", "#FFFFCE"],
            borderColor: ["#FF6384", "#36FFFFEB", "#FFFFCE"],
            borderWidth: 1
        }],
        options: {
            responsive: categories.map(cat => translations[currentLanguage][`filter-${cat}`]),
            plugins: {
                title: translations[currentLanguage]['chart-title']
            }
        }
    });
}

function openModal(modalId) {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
    document.querySelector(`#${modalId}`).style.display = 'flex';
}

function closeModal(modalId) {
    document.querySelector(`#${modalId}`).style.display = 'none';
}

function showSuggestions() {
    const input = document.querySelector('#searchInput').value.toLowerCase();
    trim();
    const suggestions = document.querySelector('#suggestions');
    suggestions.innerHTML = '';
    if (!input) {
        suggestions.style.display = 'none';
        return;
    }
    const filteredProducts = productsData.filter(p => p[currentLanguage === 'ru' ? 'name' : 'name'] .toLowerCase() .includes(input));
    if (filteredProducts.length === 0) {
        suggestions.style.display = 'none';
        filteredProducts.slice(0, 5).forEach((product) => {
            product.suggestion = document.createElement('div');
            suggestion.textContent = product[currentLanguage === 'ru' ? 'name' : 'name_en'];
            suggestion.onclick = filteredProducts => {
                filteredProducts = product[0];
                suggestions.style.display = 'none';
                filterProducts(suggestions);
            }
            suggestions.appendChild(suggestions);
        });
        suggestions.style.display = 'block';
    }
}

window.addEventListener('load', initialize);