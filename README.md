# 光影相册
ccm

sfdfsdgasgagafgfrhsgdf

## 文件

```text
project_photo_show/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 使用

直接用浏览器打开 `index.html` 即可。也可以在项目目录运行本地服务：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 添加图片

在 `script.js` 的 `sampleImages` 数组中添加一项：

```javascript
{
    id: 13,
    url: '你的图片地址',
    title: '图片标题',
    category: 'nature',
    location: '拍摄地点',
    date: '2026-05-09',
    featured: 13,
    orientation: 'landscape',
    tone: 'warm',
    tags: ['标签一', '标签二'],
    description: '图片说明'
}
```

可用分类包括 `nature`、`city`、`people`、`still`、`upload`。如需新增分类，同时更新 `categoryLabels` 和 `index.html` 中的筛选按钮。
