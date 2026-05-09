# 光影相册


## 功能

- 网格、大图、列表三种浏览模式
- 按自然、城市、人物、静物、收藏、上传分类筛选
- 按标题、地点、标签、色调、方向和说明实时搜索
- 按推荐、最新、标题、地点排序
- 支持横图、竖图、方图以及暖色、冷色、中性色调筛选
- 收藏图片并保存到当前浏览器的 `localStorage`
- 批量选择图片，并对所选图片一键收藏
- 点击图片打开灯箱，支持上一张、下一张、Esc 关闭、方向键切换和 `F` 收藏
- 灯箱内支持播放幻灯片、下载当前图片、复制图片链接
- 支持多选本地图片上传预览，也支持拖拽图片到页面添加

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
