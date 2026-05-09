const categoryLabels = {
    all: '全部',
    nature: '自然',
    city: '城市',
    people: '人物',
    still: '静物',
    upload: '上传'
};

const sampleImages = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        title: '山谷晨光',
        category: 'nature',
        location: 'Dolomites',
        date: '2026-04-18',
        featured: 1,
        description: '日出越过山脊，雾气在林线之间慢慢散开。'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
        title: '森林小径',
        category: 'nature',
        location: 'Oregon',
        date: '2026-03-22',
        featured: 2,
        description: '树影、苔藓和柔软的光，让画面安静下来。'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
        title: '窗边静物',
        category: 'still',
        location: 'Studio',
        date: '2026-02-12',
        featured: 5,
        description: '自然光扫过桌面，留下温和的纹理和层次。'
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        title: '街角黄昏',
        category: 'city',
        location: 'Copenhagen',
        date: '2026-01-28',
        featured: 4,
        description: '暖色窗光和街道线条组成轻快的城市节奏。'
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
        title: '旷野公路',
        category: 'nature',
        location: 'Iceland',
        date: '2025-12-14',
        featured: 3,
        description: '远山、云层和公路延伸出宽阔的空间感。'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1200&q=80',
        title: '城市天际线',
        category: 'city',
        location: 'New York',
        date: '2025-11-08',
        featured: 6,
        description: '高楼的几何轮廓在傍晚显得干净有力。'
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
        title: '自然肖像',
        category: 'people',
        location: 'Lisbon',
        date: '2025-10-19',
        featured: 7,
        description: '留出呼吸感的人像构图，重点落在表情和光线。'
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1520975682031-a7ef6154c1a7?auto=format&fit=crop&w=1200&q=80',
        title: '咖啡与书',
        category: 'still',
        location: 'Home',
        date: '2025-09-25',
        featured: 8,
        description: '适合用于生活方式、阅读或周末记录的画面。'
    },
    {
        id: 9,
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=70&sat=-25',
        title: '冷调荒原',
        category: 'nature',
        location: 'Highlands',
        date: '2025-08-03',
        featured: 11,
        description: '低饱和度的自然色彩，突出空气和距离。'
    },
    {
        id: 10,
        url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
        title: '建筑切面',
        category: 'city',
        location: 'Berlin',
        date: '2025-07-16',
        featured: 9,
        description: '重复结构与阴影形成简洁的视觉秩序。'
    },
    {
        id: 11,
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
        title: '午后侧光',
        category: 'people',
        location: 'Paris',
        date: '2025-06-11',
        featured: 10,
        description: '侧光让轮廓更加柔和，背景保持克制。'
    },
    {
        id: 12,
        url: 'https://images.unsplash.com/photo-1498575207490-2c1b7b1a5c99?auto=format&fit=crop&w=1200&q=80',
        title: '器物陈列',
        category: 'still',
        location: 'Gallery',
        date: '2025-05-30',
        featured: 12,
        description: '用留白和排列关系呈现物件本身的质感。'
    }
];

const state = {
    images: [...sampleImages],
    filteredImages: [],
    currentFilter: 'all',
    searchQuery: '',
    sortBy: 'featured',
    view: 'grid',
    lightboxIndex: 0
};

const galleryGrid = document.getElementById('galleryGrid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const uploadInput = document.getElementById('uploadInput');
const visibleCount = document.getElementById('visibleCount');
const totalCount = document.getElementById('totalCount');
const categoryCount = document.getElementById('categoryCount');
const gridViewBtn = document.getElementById('gridViewBtn');
const largeViewBtn = document.getElementById('largeViewBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    applyFilters();
});

function bindEvents() {
    searchInput.addEventListener('input', (event) => {
        state.searchQuery = event.target.value.trim().toLowerCase();
        applyFilters();
    });

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((item) => item.classList.remove('is-active'));
            button.classList.add('is-active');
            state.currentFilter = button.dataset.filter;
            applyFilters();
        });
    });

    sortSelect.addEventListener('change', (event) => {
        state.sortBy = event.target.value;
        applyFilters();
    });

    uploadInput.addEventListener('change', handleUploads);

    gridViewBtn.addEventListener('click', () => setView('grid'));
    largeViewBtn.addEventListener('click', () => setView('large'));

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPreviousImage);
    lightboxNext.addEventListener('click', showNextImage);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (lightbox.hidden) {
            return;
        }

        if (event.key === 'Escape') {
            closeLightbox();
        }

        if (event.key === 'ArrowLeft') {
            showPreviousImage();
        }

        if (event.key === 'ArrowRight') {
            showNextImage();
        }
    });
}

function applyFilters() {
    const query = state.searchQuery;

    state.filteredImages = state.images
        .filter((image) => {
            const matchesCategory = state.currentFilter === 'all' || image.category === state.currentFilter;
            const searchable = `${image.title} ${image.location} ${categoryLabels[image.category]} ${image.description}`.toLowerCase();
            const matchesSearch = query === '' || searchable.includes(query);

            return matchesCategory && matchesSearch;
        })
        .sort(sortImages);

    renderGallery();
    renderStats();
}

function sortImages(a, b) {
    if (state.sortBy === 'newest') {
        return new Date(b.date) - new Date(a.date);
    }

    if (state.sortBy === 'title') {
        return a.title.localeCompare(b.title, 'zh-CN');
    }

    return a.featured - b.featured;
}

function renderGallery() {
    galleryGrid.innerHTML = '';
    galleryGrid.classList.toggle('large-view', state.view === 'large');
    emptyState.hidden = state.filteredImages.length > 0;

    const fragment = document.createDocumentFragment();

    state.filteredImages.forEach((image, index) => {
        fragment.appendChild(createPhotoCard(image, index));
    });

    galleryGrid.appendChild(fragment);
}

function createPhotoCard(image, index) {
    const article = document.createElement('article');
    article.className = 'photo-card';

    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `查看 ${image.title}`);

    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.title;
    img.loading = 'lazy';
    img.addEventListener('error', () => {
        img.src = createPlaceholder(image);
    }, { once: true });

    const info = document.createElement('div');
    info.className = 'photo-info';
    info.innerHTML = `
        <div class="photo-meta">
            <span class="tag">${categoryLabels[image.category] || image.category}</span>
            <time datetime="${image.date}">${formatDate(image.date)}</time>
        </div>
        <h2>${escapeHtml(image.title)}</h2>
        <p>${escapeHtml(image.description)}</p>
        <div class="photo-meta">
            <span>${escapeHtml(image.location)}</span>
            <span>查看大图</span>
        </div>
    `;

    button.append(img, info);
    button.addEventListener('click', () => openLightbox(index));
    article.appendChild(button);

    return article;
}

function renderStats() {
    const categories = new Set(state.images.map((image) => image.category));
    visibleCount.textContent = state.filteredImages.length;
    totalCount.textContent = state.images.length;
    categoryCount.textContent = categories.size;
}

function handleUploads(event) {
    const files = Array.from(event.target.files).filter((file) => file.type.startsWith('image/'));

    if (files.length === 0) {
        return;
    }

    const uploadedImages = files.map((file, index) => ({
        id: Date.now() + index,
        url: URL.createObjectURL(file),
        title: file.name.replace(/\.[^.]+$/, ''),
        category: 'upload',
        location: '本地上传',
        date: new Date().toISOString().slice(0, 10),
        featured: -index,
        description: '这是从当前设备添加的临时预览图片。'
    }));

    state.images = [...uploadedImages, ...state.images];
    state.currentFilter = 'all';
    updateActiveFilter();
    applyFilters();
    uploadInput.value = '';
}

function updateActiveFilter() {
    filterButtons.forEach((button) => {
        button.classList.toggle('is-active', button.dataset.filter === state.currentFilter);
    });
}

function setView(view) {
    state.view = view;
    gridViewBtn.classList.toggle('is-active', view === 'grid');
    largeViewBtn.classList.toggle('is-active', view === 'large');
    renderGallery();
}

function openLightbox(index) {
    state.lightboxIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
}

function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
}

function showNextImage() {
    if (state.filteredImages.length === 0) {
        return;
    }

    state.lightboxIndex = (state.lightboxIndex + 1) % state.filteredImages.length;
    updateLightbox();
}

function showPreviousImage() {
    if (state.filteredImages.length === 0) {
        return;
    }

    state.lightboxIndex = (state.lightboxIndex - 1 + state.filteredImages.length) % state.filteredImages.length;
    updateLightbox();
}

function updateLightbox() {
    const image = state.filteredImages[state.lightboxIndex];

    if (!image) {
        closeLightbox();
        return;
    }

    lightboxImage.src = image.url;
    lightboxImage.alt = image.title;
    lightboxTitle.textContent = image.title;
    lightboxMeta.textContent = `${categoryLabels[image.category] || image.category} · ${image.location} · ${formatDate(image.date)}`;
    lightboxCounter.textContent = `${state.lightboxIndex + 1} / ${state.filteredImages.length}`;
}

function formatDate(value) {
    return new Intl.DateTimeFormat('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date(value));
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => {
        const entities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };

        return entities[char];
    });
}

function createPlaceholder(image) {
    const label = categoryLabels[image.category] || '图片';
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
            <rect width="800" height="600" fill="#ebe6de"/>
            <circle cx="640" cy="135" r="70" fill="#c28b2c" opacity="0.9"/>
            <path d="M0 430 210 260 360 380 475 290 800 520v80H0z" fill="#0f766e" opacity="0.82"/>
            <text x="52" y="92" fill="#1d2528" font-size="44" font-family="Arial, sans-serif" font-weight="700">${escapeHtml(label)}</text>
            <text x="52" y="155" fill="#667174" font-size="28" font-family="Arial, sans-serif">${escapeHtml(image.title)}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
