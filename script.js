const productsData = [
    { id: 1, name: "Смартфон Alpha X", name_en: "Alpha X Smartphone", category: "smartphones", price: 59990, discount: 10, image: "https://via.placeholder.com/300x200?text=Alpha_X", description: "Флагманский смартфон с 6.7\" AMOLED и 128GB памяти.", description_en: "Flagship smartphone with 6.7\" AMOLED and 128GB storage." },
    { id: 2, name: "Ноутбук Pro 16", name_en: "Pro 16 Laptop", category: "laptops", price: 129990, image: "https://via.placeholder.com/300x200?text=Pro_16", description: "Мощный ноутбук с 16\" дисплеем и RTX 3060.", description_en: "Powerful laptop with 16\" display and RTX 3060." },
    { id: 3, name: "Беспроводные наушники Air", name_en: "Air Earbuds", category: "accessories", price: 9990, discount: 15, image: "https://via.placeholder.com/300x200?text=Air", description: "Наушники с шумоподавлением.", description_en: "Earbuds with noise cancellation." },
    { id: 4, name: "Смартфон Neo 5G", name_en: "Neo 5G Smartphone", category: "smartphones", price: 39990, image: "https://via.placeholder.com/300x200?text=Neo_5G", description: "Смартфон с поддержкой 5G и 64MP камерой.", description_en: "5G smartphone with 64MP camera." },
    { id: 5, name: "Ноутбук Ultra 14", name_en: "Ultra 14 Laptop", category: "laptops", price: 99990, discount: 20, image: "https://via.placeholder.com/300x200?text=Ultra_14", description: "Легкий ноутбук с 14\" экраном.", description_en: "Lightweight laptop with 14\" screen." },
    { id: 6, name: "Зарядное устройство 65W", name_en: "65W Charger", category: "accessories", price: 2990, image: "https://via.placeholder.com/300x200?text=Charger", description: "Быстрое зарядное устройство.", description_en: "Fast charging device." },
    { id: 7, name: "Смартфон Vision Pro", name_en: "Vision Pro Smartphone", category: "smartphones", price: 79990, image: "https://via.placeholder.com/300x200?text=Vision_Pro", description: "Премиум смартфон с 108MP камерой.", description_en: "Premium smartphone with 108MP camera." },
    { id: 8, name: "Клавиатура RGB", name_en: "RGB Keyboard", category: "accessories", price: 4990, discount: 10, image: "https://via.placeholder.com/300x200?text=Keyboard", description: "Механическая клавиатура с подсветкой.", description_en: "Mechanical keyboard with RGB lighting." },
    { id: 9, name: "Ноутбук Gaming X", name_en: "Gaming X Laptop", category: "laptops", price: 149990, image: "https://via.placeholder.com/300x200?text=Gaming_X", description: "Игровой ноутбук с RTX 3080.", description_en: "Gaming laptop with RTX 3080." },
    { id: 10, name: "Умные часы Fit 3", name_en: "Fit 3 Smartwatch", category: "accessories", price: 12990, image: "https://via.placeholder.com/300x200?text=Smartwatch", description: "Умные часы с мониторингом здоровья.", description_en: "Smartwatch with health monitoring." },
];

const newsData = [
    { title: "Запуск новой серии смартфонов", title_en: "Launch of New Smartphone Series", description: "Представляем Alpha X с революционной камерой.", description_en: "Introducing Alpha X with a revolutionary camera.", date: "2025-05-20", image: "https://via.placeholder.com/300x150?text=News_1" },
    { title: "Обновление прошивки ноутбуков", title_en: "Laptop Firmware Update", description: "Новые функции для серии Pro.", description_en: "New features for Pro series.", date: "2025-05-15", image: "https://via.placeholder.com/300x150?text=News_2" },
    { title: "Скидки на аксессуары", title_en: "Discounts on Accessories", description: "До 30% скидки на наушники и зарядки!", description_en: "Up to 30% off on earbuds and chargers!", date: "2025-05-10", image: "https://via.placeholder.com/300x150?text=News_3" }
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

function initialize() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
    updateLanguage();
    updateCart();
    updateUserStatus();
    renderProducts();
    renderChart();
    window.addEventListener('hashchange', handleNavigation);
    handleNavigation();
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
    if (document.querySelector('#profile').style.display === 'block') showProfile();
    if (document.querySelector('#auth').style.display === 'block') showAuthPage();
}

function updateUserStatus() {
    const userStatus = document.querySelector('#userStatus');
    if (currentUser) {
        userStatus.textContent = `${translations[currentLanguage]['hello']}, ${currentUser.username}`;
        userStatus.setAttribute('data-lang-key', '');
    } else {
        userStatus.textContent = translations[currentLanguage]['login'];
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
    if (maxPrice) maxPrice.value = 999999;
    if (discountCategoryFilter) discountCategoryFilter.value = 'all';
    if (discountMinPrice) discountMinPrice.value = 0;
    if (discountMaxPrice) discountMaxPrice.value = 999999;
    document.querySelector('#minPriceValue').textContent = '0';
    document.querySelector('#maxPriceValue').textContent = '999999';
    document.querySelector('#discountMinPriceValue').textContent = '0';
    document.querySelector('#discountMaxPriceValue').textContent = '999999';
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
                <p>
                    ${product.discount ? `<span class="price-discounted">${product.price} ₽</span><span class="price-final">${finalPrice} ₽</span>` : `${product.price} ₽`}
                </p>
                <button onclick="showProductDetail(${product.id})" data-lang-key="details-button">${translations[currentLanguage]['details-button']}</button>
                <button onclick="addToCart(${product.id})" data-lang-key="add-to-cart">${translations[currentLanguage]['add-to-cart']}</button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id}, this)" data-lang-key="${isFavorite ? 'remove-favorite' : 'add-favorite'}">${translations[currentLanguage][isFavorite ? 'remove-favorite' : 'add-favorite']}</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }
    renderPagination(products.length, 'pagination');
}

function renderDiscounts(products = productsData.filter(p => p.discount), page = discountPage) {
    showSpinner('discountSpinner');
    const discountsContainer = document.querySelector('#discounts');
    const discountProducts = document.querySelector('#discountProducts');
    discountsContainer.style.display = 'block';
    discountProducts.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);
    if (paginatedProducts.length === 0) {
        discountProducts.innerHTML = `<p data-lang-key="no-discounts">${translations[currentLanguage]['no-discounts']}</p>`;
    } else {
        paginatedProducts.forEach(product => {
            const isFavorite = favorites.includes(product.id);
            const finalPrice = Math.round(product.price * (1 - product.discount / 100));
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
                <h3>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h3>
                <p>
                    <span class="price-discounted">${product.price} ₽</span>
                    <span class="price-final">${finalPrice} ₽</span>
                </p>
                <button onclick="showProductDetail(${product.id})" data-lang-key="details-button">${translations[currentLanguage]['details-button']}</button>
                <button onclick="addToCart(${product.id})" data-lang-key="add-to-cart">${translations[currentLanguage]['add-to-cart']}</button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id}, this)" data-lang-key="${isFavorite ? 'remove-favorite' : 'add-favorite'}">${translations[currentLanguage][isFavorite ? 'remove-favorite' : 'add-favorite']}</button>
            `;
            discountProducts.appendChild(productDiv);
        });
    }
    renderPagination(products.length, 'discountPagination');
}

function renderNews() {
    const newsContainer = document.querySelector('#news');
    const newsList = document.querySelector('#newsList');
    showSpinner();
    newsContainer.style.display = 'block';
    newsList.innerHTML = '';
    newsData.forEach(item => {
        const newsDiv = document.createElement('div');
        newsDiv.className = 'news-item';
        newsDiv.innerHTML = `
            <img src="${item.image}" alt="${item[currentLanguage === 'ru' ? 'title' : 'title_en']}">
            <div>
                <h3>${item[currentLanguage === 'ru' ? 'title' : 'title_en']}</h3>
                <p>${item[currentLanguage === 'ru' ? 'description' : 'description_en']}</p>
                <p><strong data-lang-key="news-date">${translations[currentLanguage]['news-date']}:</strong> ${item.date}</p>
            </div>
        `;
        newsList.appendChild(newsDiv);
    });
}

function showProductDetail(productId) {
    showSpinner();
    currentProductId = productId;
    const product = productsData.find(p => p.id === productId);
    const isFavorite = favorites.includes(productId);
    const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
    document.querySelectorAll('#products, #pagination, #discounts, #news, #profile, #auth').forEach(el => el.style.display = 'none');
    const productDetail = document.querySelector('#productDetail');
    productDetail.style.display = 'block';
    const productReviews = reviews[productId] || [];
    const reviewsHtml = productReviews.map(review => `
        <div class="review">
            <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p><strong>${review.name}</strong>: ${review.text}</p>
        </div>
    `).join('');
    productDetail.innerHTML = `
        <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
        <h2>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h2>
        <p><strong data-lang-key="price">${translations[currentLanguage]['price']}:</strong> ${product.discount ? `<span class="price-discounted">${product.price} ₽</span><span class="price-final">${finalPrice} ₽</span>` : `${product.price} ₽`}</p>
        <p><strong data-lang-key="category">${translations[currentLanguage]['category']}:</strong> ${translations[currentLanguage][`filter-${product.category}`]}</p>
        <p><strong data-lang-key="description">${translations[currentLanguage]['description']}:</strong> ${product[currentLanguage === 'ru' ? 'description' : 'description_en']}</p>
        <button onclick="addToCart(${product.id})" data-lang-key="add-to-cart">${translations[currentLanguage]['add-to-cart']}</button>
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id}, this)" data-lang-key="${isFavorite ? 'remove-favorite' : 'add-favorite'}">${translations[currentLanguage][isFavorite ? 'remove-favorite' : 'add-favorite']}</button>
        <button onclick="openModal('reviewModal')" data-lang-key="review-button">${translations[currentLanguage]['review-button']}</button>
        <button onclick="renderProducts()" data-lang-key="back-to-catalog">${translations[currentLanguage]['back-to-catalog']}</button>
        <div class="reviews">
            <h3 data-lang-key="reviews">${translations[currentLanguage]['reviews']}</h3>
            ${reviewsHtml || `<p data-lang-key="no-reviews">${translations[currentLanguage]['no-reviews']}</p>`}
        </div>
    `;
    scrollToSection('productDetail');
}

function toggleFavorite(productId, button) {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        window.location.hash = '#auth';
        return;
    }
    const index = favorites.indexOf(productId);
    const isFavorite = index !== -1;
    if (!isFavorite) {
        favorites.push(productId);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    button.classList.toggle('active');
    button.textContent = translations[currentLanguage][isFavorite ? 'add-favorite' : 'remove-favorite'];
    button.setAttribute('data-lang-key', isFavorite ? 'add-favorite' : 'remove-favorite');
    renderFavorites();
    if (document.querySelector('#productDetail').style.display === 'block') {
        showProductDetail(productId);
    } else if (window.location.hash === '#discounts') {
        renderDiscounts();
    } else {
        renderProducts();
    }
}

function renderFavorites() {
    const favoritesList = document.querySelector('#favoritesList');
    favoritesList.innerHTML = '';
    if (favorites.length === 0) {
        favoritesList.innerHTML = `<p data-lang-key="no-favorites">${translations[currentLanguage]['no-favorites']}</p>`;
    } else {
        const favoriteProducts = productsData.filter(p => favorites.includes(p.id));
        favoriteProducts.forEach(product => {
            const finalPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product[currentLanguage === 'ru' ? 'name' : 'name_en']}">
                <h3>${product[currentLanguage === 'ru' ? 'name' : 'name_en']}</h3>
                <p>${product.discount ? `<span class="price-discounted">${product.price} ₽</span> <span class="price-final">${finalPrice} ₽</span>` : `${product.price} ₽`}</p>
                <button onclick="showProductDetail(${product.id})" data-lang-key="details-button">${translations[currentLanguage]['details-button']}</button>
                <button onclick="addToCart(${product.id})" data-lang-key="add-to-cart">${translations[currentLanguage]['add-to-cart']}</button>
                <button class="favorite-btn active" onclick="toggleFavorite(${product.id}, this)" data-lang-key="remove-favorite">${translations[currentLanguage]['remove-favorite']}</button>
            `;
            favoritesList.appendChild(productDiv);
        });
    }
}

function openModal(modalId) {
    if (modalId === 'favoritesModal') {
        renderFavorites();
    }
    document.querySelector(`#${modalId}`).style.display = 'flex';
}

function closeModal(modalId) {
    document.querySelector(`#${modalId}`).style.display = 'none';
}

function renderPagination(totalItems, containerId) {
    const paginationContainer = document.querySelector(`#${containerId}`);
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === (containerId === 'pagination' ? currentPage : discountPage) ? 'active' : '';
        button.onclick = () => {
            if (containerId === 'pagination') {
                currentPage = i;
                filterProducts();
            } else {
                discountPage = i;
                filterDiscounts();
            }
        };
        paginationContainer.appendChild(button);
    }
}

function updatePriceRange() {
    const minPrice = parseInt(document.querySelector('#minPrice').value);
    const maxPrice = parseInt(document.querySelector('#maxPrice').value);
    document.querySelector('#minPriceValue').textContent = minPrice;
    document.querySelector('#maxPriceValue').textContent = maxPrice;
    filterProducts();
}

function updateDiscountPriceRange() {
    const minPrice = parseInt(document.querySelector('#discountMinPrice').value);
    const maxPrice = parseInt(document.querySelector('#discountMaxPrice').value);
    document.querySelector('#discountMinPriceValue').textContent = minPrice;
    document.querySelector('#discountMaxPriceValue').textContent = maxPrice;
    filterDiscounts();
}

function filterProducts() {
    showSpinner();
    const category = document.querySelector('#categoryFilter').value;
    const searchQuery = document.querySelector('#searchInput').value.toLowerCase();
    const minPrice = parseInt(document.querySelector('#minPrice').value);
    const maxPrice = parseInt(document.querySelector('#maxPrice').value);
    let filteredProducts = productsData;
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    filteredProducts = filteredProducts.filter(p => 
        p[currentLanguage === 'ru' ? 'name' : 'name_en'].toLowerCase().includes(searchQuery) &&
        p.price >= minPrice && p.price <= maxPrice
    );
    sortProducts(filteredProducts);
}

function filterDiscounts() {
    showSpinner('discountSpinner');
    const category = document.querySelector('#discountCategoryFilter').value;
    const searchQuery = document.querySelector('#searchInput').value.toLowerCase();
    const minPrice = parseInt(document.querySelector('#discountMinPrice').value);
    const maxPrice = parseInt(document.querySelector('#discountMaxPrice').value);
    let filteredProducts = productsData.filter(p => p.discount);
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    filteredProducts = filteredProducts.filter(p => 
        p[currentLanguage === 'ru' ? 'name' : 'name_en'].toLowerCase().includes(searchQuery) &&
        p.price >= minPrice && p.price <= maxPrice
    );
    sortDiscounts(filteredProducts);
}

function sortProducts(products) {
    const sortBy = document.querySelector('#sortFilter').value;
    let sortedProducts = [...products];
    if (sortBy === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
        sortedProducts.sort((a, b) => a[currentLanguage === 'ru' ? 'name' : 'name_en'].localeCompare(b[currentLanguage === 'ru' ? 'name' : 'name_en']));
    }
    renderProducts(sortedProducts, currentPage);
}

function sortDiscounts(products) {
    const sortBy = document.querySelector('#discountSortFilter').value;
    let sortedProducts = [...products];
    if (sortBy === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
        sortedProducts.sort((a, b) => a[currentLanguage === 'ru' ? 'name' : 'name_en'].localeCompare(b[currentLanguage === 'ru' ? 'name' : 'name_en']));
    }
    renderDiscounts(sortedProducts, discountPage);
}

function addToCart(productId) {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        window.location.hash = '#auth';
        return;
    }
    const product = productsData.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    animateCartAdd(productId);
    updateCart();
}

function updateCart() {
    document.querySelector('#cartCount').textContent = cart.length;
    renderCart();
}

function renderCart() {
    const cartItems = document.querySelector('#cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const finalPrice = item.discount ? Math.round(item.price * (1 - item.discount / 100)) : item.price;
        total += finalPrice;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item[currentLanguage === 'ru' ? 'name' : 'name_en']}">
            <span>${item[currentLanguage === 'ru' ? 'name' : 'name_en']} - ${finalPrice} ₽</span>
            <button onclick="removeFromCart(${index})" data-lang-key="remove-button">${translations[currentLanguage]['remove-button']}</button>
        `;
        cartItems.appendChild(cartItem);
    });
    document.querySelector('#cartTotal').textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function checkout() {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        window.location.hash = '#auth';
        return;
    }
    if (cart.length === 0) {
        alert(translations[currentLanguage]['no-items']);
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.discount ? Math.round(item.price * (1 - item.discount / 100)) : item.price), 0);
    const order = {
        id: `ORD_${Date.now()}`,
        date: new Date().toLocaleString(),
        items: [...cart],
        total: total,
        userId: currentUser.email,
        status: 'completed'
    };
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    latestOrder = order;
    document.querySelector('#notificationMessage').textContent = `${translations[currentLanguage]['order-success']} Order ID: ${order.id}`;
    openModal('notificationModal');
    cart.length = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    closeModal('cartModal');
}

function downloadOrderPDF(order = latestOrder) {
    if (!order) return;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(translations[currentLanguage]['order-receipt'], 20, 20);
    doc.setFontSize(12);
    doc.text(`${translations[currentLanguage]['order-date']}: ${order.date}`, 20, 30);
    doc.text(`${translations[currentLanguage]['username']}: ${currentUser.username}`, 20, 40);
    doc.text(translations[currentLanguage]['items'], 20, 50);
    order.items.forEach((item, index) => {
        const finalPrice = item.discount ? Math.round(item.price * (1 - item.discount / 100)) : item.price;
        doc.text(`${item[currentLanguage === 'ru' ? 'name' : 'name_en']}: ${finalPrice} ₽`, 20, 60 + (index * 10));
    });
    doc.text(`${translations[currentLanguage]['order-total']}: ${order.total} ₽`, 20, 60 + (order.items.length * 10));
    doc.save(`Order_${order.id}.pdf`);
}

function submitReview() {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        window.location.hash = '#auth';
        return;
    }
    const name = document.querySelector('#reviewName').value.trim();
    const text = document.querySelector('#reviewText').value.trim();
    const rating = parseInt(document.querySelector('#reviewRating').value);
    if (!name || !text) {
        alert(translations[currentLanguage]['fill-fields']);
        return;
    }
    if (!reviews[currentProductId]) {
        reviews[currentProductId] = [];
    }
    reviews[currentProductId].push({ name, text, rating, userId: currentUser.email });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    alert(translations[currentLanguage]['review-success']);
    closeModal('reviewModal');
    document.querySelector('#reviewName').value = '';
    document.querySelector('#reviewText').value = '';
    showProductDetail(currentProductId);
}

function showProfile() {
    if (!currentUser) {
        alert(translations[currentLanguage]['login-required']);
        showAuthPage();
        return;
    }
    showSpinner();
    document.querySelectorAll('#products, #productDetail, #discounts, #news, #authModal').forEach(el => el.style.display = 'none');
    document.querySelector('#pagination').style.display = 'none';
    document.querySelector('#discountPagination').style.display = 'none';
    openModal('profileModal');
    document.querySelector('#profileUsername').value = currentUser.username;
    document.querySelector('#profileEmail').value = currentUser.email;
    document.querySelector('#profileAvatar').src = currentUser.avatar || 'https://via.placeholder.com/80?text=Avatar';
    document.querySelector('#profilePassword').value = '';
    document.querySelector('#usernameError').textContent = '';
    document.querySelector('#emailError').textContent = '';
    document.querySelector('#passwordError').textContent = '';
    const orderHistory = document.querySelector('#orderHistory');
    orderHistory.innerHTML = '';
    const userOrders = orders.filter(o => o.userId === currentUser.email);
    if (userOrders.length === 0) {
        orderHistory.innerHTML = `<p data-lang-key="no-orders">${translations[currentLanguage]['no-orders']}</p>`;
    } else {
        userOrders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order';
            orderDiv.innerHTML = `
                <p><strong data-lang-key="order-date">${translations[currentLanguage]['order-date']}:</strong> ${order.date}</p>
                <p><strong data-lang-key="items">${translations[currentLanguage]['items']}:</strong> ${order.items.map(item => item[currentLanguage === 'ru' ? 'name' : 'name_en']).join(', ')}</p>
                <p><strong data-lang-key="order-total">${translations[currentLanguage]['order-total']}:</strong> ${order.total} ₽</p>
                <button onclick="downloadOrderPDF(${JSON.stringify(order)})" data-lang-key="download-pdf">${translations[currentLanguage]['download-pdf']}</button>
            `;
            orderHistory.appendChild(orderDiv);
        });
    }
}

function updateProfile() {
    const username = document.querySelector('#profileUsername').value.trim();
    const email = document.querySelector('#profileEmail').value.trim();
    const password = document.querySelector('#profilePassword').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;
    document.querySelector('#usernameError').textContent = '';
    document.querySelector('#emailError').textContent = '';
    document.querySelector('#passwordError').textContent = '';
    
    if (!username || username.length < 3 || username.length > 20) {
        document.querySelector('#usernameError').textContent = translations[currentLanguage]['username-error'];
        hasError = true;
    }
    if (!email || !emailRegex.test(email)) {
        document.querySelector('#emailError').textContent = translations[currentLanguage]['email-error'];
        hasError = true;
    }
    if (password && password.length < 6) {
        document.querySelector('#passwordError').textContent = translations[currentLanguage]['password-too-short'];
        hasError = true;
    }
    if (email !== currentUser.email && Object.values(users).some(u => u.email === email)) {
        document.querySelector('#emailError').textContent = translations[currentLanguage]['user-exists'];
        hasError = true;
    }
    if (username !== currentUser.username && Object.values(users).some(u => u.username === username)) {
        document.querySelector('#usernameError').textContent = translations[currentLanguage]['invalid-username'];
        hasError = true;
    }
    if (hasError) return;
    
    if (email !== currentUser.email) {
        delete users[currentUser.email];
        currentUser.email = email;
        users[email] = currentUser;
    }
    if (username !== currentUser.username) {
        currentUser.username = username;
        users[currentUser.email] = currentUser;
    }
    if (password) {
        currentUser.password = password;
        users[currentUser.email] = currentUser;
    }
    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('users', JSON.stringify(users));
    alert(translations[currentLanguage]['profile-updated']);
    updateUserStatus();
    showProfile();
}

function updateAvatar() {
    const file = document.querySelector('#avatarInput').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentUser.avatar = e.target.result;
            localStorage.setItem('user', JSON.stringify(currentUser));
            users[currentUser.email] = currentUser;
            localStorage.setItem('users', JSON.stringify(users));
            document.querySelector('#profileAvatar').src = currentUser.avatar;
            alert(translations[currentLanguage]['avatar-success']);
        };
        reader.readAsDataURL(file);
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('user');
    updateUserStatus();
    alert(translations[currentLanguage]['logout-success']);
    window.location.hash = '#home';
    handleNavigation();
}

function showAuthPage() {
    showSpinner();
    document.querySelectorAll('#products, #productDetail, #discounts, #news, #profileModal').forEach(el => el.style.display = 'none');
    document.querySelector('#pagination').style.display = 'none';
    document.querySelector('#discountPagination').style.display = 'none';
    openModal('authModal');
    isRegisterMode = false;
    updateAuthForm();
}
function switchAuthMode() {
    isRegisterMode = !isRegisterMode;
    updateAuthForm();
}

function updateAuthForm() {
    const authTitle = document.querySelector('#authTitle');
    const authSubmit = document.querySelector('#authSubmit');
    const switchAuth = document.querySelector('#switchAuth');
    const confirmPasswordInput = document.querySelector('#confirmPasswordField');
    const usernameInput = document.querySelector('#usernameField');
    authTitle.textContent = translations[currentLanguage][isRegisterMode ? 'register-title' : 'login-title'];
    authTitle.setAttribute('data-lang-key', isRegisterMode ? 'register-title' : 'login-title');
    authSubmit.textContent = translations[currentLanguage][isRegisterMode ? 'register-button' : 'login-button'];
    authSubmit.setAttribute('data-lang-key', isRegisterMode ? 'register-button' : 'login-button');
    switchAuth.textContent = translations[currentLanguage][isRegisterMode ? 'login-link' : 'register-link'];
    switchAuth.setAttribute('data-lang-key', isRegisterMode ? 'login-link' : 'register-link');
    confirmPasswordInput.style.display = isRegisterMode ? 'block' : 'none';
    usernameInput.style.display = isRegisterMode ? 'block' : 'none';
    document.querySelector('#usernameInput').value = '';
    document.querySelector('#emailInput').value = '';
    document.querySelector('#passwordInput').value = '';
    document.querySelector('#confirmPasswordInput').value = '';
    document.querySelector('#usernameAuthError').textContent = '';
    document.querySelector('#emailAuthError').textContent = '';
    document.querySelector('#passwordAuthError').textContent = '';
    document.querySelector('#confirmPasswordError').textContent = '';
}

function handleAuth() {
    const username = document.querySelector('#usernameInput').value.trim();
    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
    const confirmPassword = document.querySelector('#confirmPasswordInput').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;
    document.querySelector('#usernameAuthError').textContent = '';
    document.querySelector('#emailAuthError').textContent = '';
    document.querySelector('#passwordAuthError').textContent = '';
    document.querySelector('#confirmPasswordError').textContent = '';
    
    if (!email || !password || (isRegisterMode && (!username || !confirmPassword))) {
        document.querySelector('#emailAuthError').textContent = translations[currentLanguage]['fill-fields'];
        hasError = true;
    }
    if (!emailRegex.test(email)) {
        document.querySelector('#emailAuthError').textContent = translations[currentLanguage]['email-error'];
        hasError = true;
    }
    if (isRegisterMode) {
        if (username.length < 3 || username.length > 20) {
            document.querySelector('#usernameAuthError').textContent = translations[currentLanguage]['username-error'];
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
        if (Object.values(users).some(u => u.username === username)) {
            document.querySelector('#usernameAuthError').textContent = translations[currentLanguage]['invalid-username'];
            hasError = true;
        }
        if (hasError) return;
        
        const newUser = {
            username,
            email,
            password,
            avatar: null
        };
        users[email] = newUser;
        localStorage.setItem('users', JSON.stringify(users));
        currentUser = newUser;
        localStorage.setItem('user', JSON.stringify(currentUser));
        alert(translations[currentLanguage]['register-success']);
        resetFilters();
        filterProducts();
        window.location.hash = '#home';
        handleNavigation();
    } else {
        if (users[email] && users[email].password === password) {
            currentUser = users[email];
            localStorage.setItem('user', JSON.stringify(currentUser));
            alert(translations[currentLanguage]['login-button']);
            resetFilters();
            filterProducts();
            window.location.hash = '#home';
            handleNavigation();
        } else {
            document.querySelector('#emailAuthError').textContent = translations[currentLanguage]['invalid-login'];
        }
    }
}

function renderChart() {
    const ctx = document.querySelector('#categoryChart').getContext('2d');
    const categoryCounts = {
        smartphones: productsData.filter(p => p.category === 'smartphones').length,
        laptops: productsData.filter(p => p.category === 'laptops').length,
        accessories: productsData.filter(p => p.category === 'accessories').length
    };
    if (chartInstance) {
        chartInstance.destroy();
    }
    const isDarkTheme = document.body.classList.contains('dark');
    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                translations[currentLanguage]['filter-smartphones'],
                translations[currentLanguage]['filter-laptops'],
                translations[currentLanguage]['filter-accessories']
            ],
            datasets: [{
                data: [categoryCounts.smartphones, categoryCounts.laptops, categoryCounts.accessories],
                backgroundColor: ['#4CAF50', '#2E7D32', '#81C784'],
                borderColor: isDarkTheme ? '#333' : '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: isDarkTheme ? '#e0e0e0' : '#000',
                        font: { size: 12 }
                    }
                },
                title: {
                    display: true,
                    text: translations[currentLanguage]['chart-title'],
                    color: isDarkTheme ? '#e0e0e0' : '#000',
                    font: { size: 14 }
                }
            }
        }
    });
}

initialize();