const STORAGE_KEY = 'lightGalleryFavorites';
const SLIDESHOW_DELAY = 3600;

const categoryLabels = {
    all: '全部',
    nature: '自然',
    city: '城市',
    people: '人物',
    still: '静物',
    upload: '上传',
    favorite: '收藏'
};

const orientationLabels = {
    landscape: '横图',
    portrait: '竖图',
    square: '方图'
};

const toneLabels = {
    warm: '暖色',
    cool: '冷色',
    neutral: '中性'
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
        orientation: 'landscape',
        tone: 'warm',
        tags: ['山谷', '晨光', '自然'],
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
        orientation: 'landscape',
        tone: 'cool',
        tags: ['森林', '徒步', '绿色'],
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
        orientation: 'landscape',
        tone: 'neutral',
        tags: ['室内', '静物', '桌面'],
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
        orientation: 'landscape',
        tone: 'warm',
        tags: ['街道', '黄昏', '城市'],
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
        orientation: 'landscape',
        tone: 'neutral',
        tags: ['公路', '远山', '旅行'],
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
        orientation: 'landscape',
        tone: 'cool',
        tags: ['建筑', '天际线', '夜色'],
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
        orientation: 'portrait',
        tone: 'warm',
        tags: ['肖像', '自然光', '人物'],
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
        orientation: 'landscape',
        tone: 'warm',
        tags: ['咖啡', '阅读', '生活方式'],
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
        orientation: 'landscape',
        tone: 'cool',
        tags: ['低饱和', '荒原', '风景'],
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
        orientation: 'portrait',
        tone: 'neutral',
        tags: ['建筑', '几何', '线条'],
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
        orientation: 'portrait',
        tone: 'neutral',
        tags: ['人像', '侧光', '巴黎'],
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
        orientation: 'square',
        tone: 'neutral',
        tags: ['器物', '陈列', '留白'],
        description: '用留白和排列关系呈现物件本身的质感。'
    }
];

const state = {
    images: [...sampleImages],
    filteredImages: [],
    currentFilter: 'all',
    searchQuery: '',
    sortBy: 'featured',
    orientation: 'all',
    tone: 'all',
    view: 'grid',
    lightboxIndex: 0,
    favorites: new Set(loadFavorites()),
    selected: new Set(),
    selectMode: false,
    slideshowTimer: null
};

const galleryGrid = document.getElementById('galleryGrid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const orientationSelect = document.getElementById('orientationSelect');
const toneSelect = document.getElementById('toneSelect');
const uploadInput = document.getElementById('uploadInput');
const dropZone = document.getElementById('dropZone');
const visibleCount = document.getElementById('visibleCount');
const totalCount = document.getElementById('totalCount');
const favoriteCount = document.getElementById('favoriteCount');
const selectedCount = document.getElementById('selectedCount');
const gridViewBtn = document.getElementById('gridViewBtn');
const largeViewBtn = document.getElementById('largeViewBtn');
const listViewBtn = document.getElementById('listViewBtn');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const selectModeBtn = document.getElementById('selectModeBtn');
const selectionBar = document.getElementById('selectionBar');
const selectionSummary = document.getElementById('selectionSummary');
const favoriteSelectedBtn = document.getElementById('favoriteSelectedBtn');
const clearSelectionBtn = document.getElementById('clearSelectionBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxTags = document.getElementById('lightboxTags');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const favoriteLightboxBtn = document.getElementById('favoriteLightboxBtn');
const downloadLightboxBtn = document.getElementById('downloadLightboxBtn');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const slideshowBtn = document.getElementById('slideshowBtn');

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
            state.currentFilter = button.dataset.filter;
            updateActiveFilter();
            applyFilters();
        });
    });

    sortSelect.addEventListener('change', (event) => {
        state.sortBy = event.target.value;
        applyFilters();
    });

    orientationSelect.addEventListener('change', (event) => {
        state.orientation = event.target.value;
        applyFilters();
    });

    toneSelect.addEventListener('change', (event) => {
        state.tone = event.target.value;
        applyFilters();
    });

    uploadInput.addEventListener('change', (event) => {
        addUploadedFiles(event.target.files);
        uploadInput.value = '';
    });

    ['dragenter', 'dragover'].forEach((eventName) => {
        dropZone.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropZone.classList.add('is-dragging');
        });
    });

    ['dragleave', 'drop'].forEach((eventName) => {
        dropZone.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropZone.classList.remove('is-dragging');
        });
    });

    dropZone.addEventListener('drop', (event) => {
        addUploadedFiles(event.dataTransfer.files);
    });

    gridViewBtn.addEventListener('click', () => setView('grid'));
    largeViewBtn.addEventListener('click', () => setView('large'));
    listViewBtn.addEventListener('click', () => setView('list'));
    clearFiltersBtn.addEventListener('click', resetFilters);
    selectModeBtn.addEventListener('click', toggleSelectMode);
    favoriteSelectedBtn.addEventListener('click', favoriteSelectedImages);
    clearSelectionBtn.addEventListener('click', clearSelection);

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPreviousImage);
    lightboxNext.addEventListener('click', showNextImage);
    favoriteLightboxBtn.addEventListener('click', toggleCurrentFavorite);
    downloadLightboxBtn.addEventListener('click', downloadCurrentImage);
    copyLinkBtn.addEventListener('click', copyCurrentImageLink);
    slideshowBtn.addEventListener('click', toggleSlideshow);

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

        if (event.key.toLowerCase() === 'f') {
            toggleCurrentFavorite();
        }
    });
}

function applyFilters() {
    const query = state.searchQuery;

    state.filteredImages = state.images
        .filter((image) => {
            const matchesCategory = state.currentFilter === 'all'
                || image.category === state.currentFilter
                || (state.currentFilter === 'favorite' && isFavorite(image.id));
            const matchesOrientation = state.orientation === 'all' || image.orientation === state.orientation;
            const matchesTone = state.tone === 'all' || image.tone === state.tone;
            const searchable = [
                image.title,
                image.location,
                categoryLabels[image.category],
                orientationLabels[image.orientation],
                toneLabels[image.tone],
                image.description,
                ...(image.tags || [])
            ].join(' ').toLowerCase();
            const matchesSearch = query === '' || searchable.includes(query);

            return matchesCategory && matchesOrientation && matchesTone && matchesSearch;
        })
        .sort(sortImages);

    pruneSelection();
    renderGallery();
    renderStats();
    renderSelectionBar();
}

function sortImages(a, b) {
    if (state.sortBy === 'newest') {
        return new Date(b.date) - new Date(a.date);
    }

    if (state.sortBy === 'title') {
        return a.title.localeCompare(b.title, 'zh-CN');
    }

    if (state.sortBy === 'location') {
        return a.location.localeCompare(b.location, 'zh-CN');
    }

    return a.featured - b.featured;
}

function renderGallery() {
    galleryGrid.innerHTML = '';
    galleryGrid.classList.toggle('large-view', state.view === 'large');
    galleryGrid.classList.toggle('list-view', state.view === 'list');
    galleryGrid.classList.toggle('select-mode', state.selectMode);
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
    article.classList.toggle('is-selected', state.selected.has(String(image.id)));

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'photo-open';
    button.setAttribute('aria-label', `${state.selectMode ? '选择' : '查看'} ${image.title}`);

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
        <div class="chip-row">
            ${(image.tags || []).slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
        </div>
        <div class="photo-meta">
            <span>${escapeHtml(image.location)}</span>
            <span>${orientationLabels[image.orientation]} · ${toneLabels[image.tone]}</span>
        </div>
    `;

    const favoriteBtn = document.createElement('button');
    favoriteBtn.type = 'button';
    favoriteBtn.className = 'card-action favorite-toggle';
    favoriteBtn.setAttribute('aria-label', `${isFavorite(image.id) ? '取消收藏' : '收藏'} ${image.title}`);
    favoriteBtn.textContent = isFavorite(image.id) ? '★' : '☆';
    favoriteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleFavorite(image.id);
    });

    const selectBadge = document.createElement('span');
    selectBadge.className = 'select-badge';
    selectBadge.textContent = state.selected.has(String(image.id)) ? '✓' : '';
    selectBadge.setAttribute('aria-hidden', 'true');

    button.append(img, info);
    button.addEventListener('click', () => {
        if (state.selectMode) {
            toggleSelected(image.id);
            return;
        }

        openLightbox(index);
    });

    article.append(button, favoriteBtn, selectBadge);
    return article;
}

function renderStats() {
    visibleCount.textContent = state.filteredImages.length;
    totalCount.textContent = state.images.length;
    favoriteCount.textContent = state.favorites.size;
    selectedCount.textContent = state.selected.size;
}

function renderSelectionBar() {
    selectionBar.hidden = !state.selectMode;
    selectionSummary.textContent = `已选择 ${state.selected.size} 张`;
    selectModeBtn.classList.toggle('is-active', state.selectMode);
    selectModeBtn.setAttribute('aria-pressed', String(state.selectMode));
}

function addUploadedFiles(fileList) {
    const files = Array.from(fileList).filter((file) => file.type.startsWith('image/'));

    if (files.length === 0) {
        return;
    }

    const uploadedImages = files.map((file, index) => ({
        id: `upload-${Date.now()}-${index}`,
        url: URL.createObjectURL(file),
        title: file.name.replace(/\.[^.]+$/, ''),
        category: 'upload',
        location: '本地上传',
        date: new Date().toISOString().slice(0, 10),
        featured: -index,
        orientation: 'landscape',
        tone: 'neutral',
        tags: ['本地', '上传', '预览'],
        description: '这是从当前设备添加的临时预览图片。'
    }));

    state.images = [...uploadedImages, ...state.images];
    state.currentFilter = 'all';
    updateActiveFilter();
    applyFilters();
}

function setView(view) {
    state.view = view;
    gridViewBtn.classList.toggle('is-active', view === 'grid');
    largeViewBtn.classList.toggle('is-active', view === 'large');
    listViewBtn.classList.toggle('is-active', view === 'list');
    renderGallery();
}

function resetFilters() {
    state.currentFilter = 'all';
    state.searchQuery = '';
    state.sortBy = 'featured';
    state.orientation = 'all';
    state.tone = 'all';
    searchInput.value = '';
    sortSelect.value = 'featured';
    orientationSelect.value = 'all';
    toneSelect.value = 'all';
    updateActiveFilter();
    applyFilters();
}

function toggleSelectMode() {
    state.selectMode = !state.selectMode;

    if (!state.selectMode) {
        state.selected.clear();
    }

    renderGallery();
    renderStats();
    renderSelectionBar();
}

function toggleSelected(id) {
    const key = String(id);

    if (state.selected.has(key)) {
        state.selected.delete(key);
    } else {
        state.selected.add(key);
    }

    renderGallery();
    renderStats();
    renderSelectionBar();
}

function clearSelection() {
    state.selected.clear();
    renderGallery();
    renderStats();
    renderSelectionBar();
}

function favoriteSelectedImages() {
    state.selected.forEach((id) => state.favorites.add(id));
    saveFavorites();
    applyFilters();
}

function pruneSelection() {
    const visibleIds = new Set(state.filteredImages.map((image) => String(image.id)));
    state.selected.forEach((id) => {
        if (!visibleIds.has(id)) {
            state.selected.delete(id);
        }
    });
}

function updateActiveFilter() {
    filterButtons.forEach((button) => {
        button.classList.toggle('is-active', button.dataset.filter === state.currentFilter);
    });
}

function openLightbox(index) {
    state.lightboxIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
}

function closeLightbox() {
    stopSlideshow();
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
    lightboxMeta.textContent = `${categoryLabels[image.category] || image.category} · ${image.location} · ${formatDate(image.date)} · ${orientationLabels[image.orientation]} · ${toneLabels[image.tone]}`;
    lightboxCounter.textContent = `${state.lightboxIndex + 1} / ${state.filteredImages.length}`;
    lightboxDescription.textContent = image.description;
    lightboxTags.innerHTML = (image.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
    favoriteLightboxBtn.textContent = isFavorite(image.id) ? '取消收藏' : '收藏';
}

function toggleFavorite(id) {
    const key = String(id);

    if (state.favorites.has(key)) {
        state.favorites.delete(key);
    } else {
        state.favorites.add(key);
    }

    saveFavorites();
    applyFilters();

    if (!lightbox.hidden) {
        updateLightbox();
    }
}

function toggleCurrentFavorite() {
    const image = state.filteredImages[state.lightboxIndex];

    if (image) {
        toggleFavorite(image.id);
    }
}

function isFavorite(id) {
    return state.favorites.has(String(id));
}

function loadFavorites() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(saved) ? saved.map(String) : [];
    } catch (error) {
        return [];
    }
}

function saveFavorites() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.favorites]));
    } catch (error) {
        console.warn('收藏状态无法写入当前浏览器存储。', error);
    }
}

function toggleSlideshow() {
    if (state.slideshowTimer) {
        stopSlideshow();
        return;
    }

    slideshowBtn.textContent = '暂停';
    slideshowBtn.setAttribute('aria-pressed', 'true');
    state.slideshowTimer = window.setInterval(showNextImage, SLIDESHOW_DELAY);
}

function stopSlideshow() {
    if (!state.slideshowTimer) {
        return;
    }

    window.clearInterval(state.slideshowTimer);
    state.slideshowTimer = null;
    slideshowBtn.textContent = '播放';
    slideshowBtn.setAttribute('aria-pressed', 'false');
}

function downloadCurrentImage() {
    const image = state.filteredImages[state.lightboxIndex];

    if (!image) {
        return;
    }

    const link = document.createElement('a');
    link.href = image.url;
    link.download = `${image.title}.jpg`;
    link.target = '_blank';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
}

async function copyCurrentImageLink() {
    const image = state.filteredImages[state.lightboxIndex];

    if (!image) {
        return;
    }

    try {
        await navigator.clipboard.writeText(image.url);
        copyLinkBtn.textContent = '已复制';
        window.setTimeout(() => {
            copyLinkBtn.textContent = '复制链接';
        }, 1300);
    } catch (error) {
        window.prompt('复制图片链接', image.url);
    }
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
            <rect width="800" height="600" fill="#f2efe8"/>
            <circle cx="640" cy="135" r="70" fill="#d98746" opacity="0.92"/>
            <path d="M0 430 210 260 360 380 475 290 800 520v80H0z" fill="#166f66" opacity="0.82"/>
            <text x="52" y="92" fill="#1d2528" font-size="44" font-family="Arial, sans-serif" font-weight="700">${escapeHtml(label)}</text>
            <text x="52" y="155" fill="#667174" font-size="28" font-family="Arial, sans-serif">${escapeHtml(image.title)}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
