# 光影相册

一个纯前端图片展示网站，可直接打开 `index.html` 使用。页面内置示例图片，并支持搜索、分类筛选、排序、大图灯箱、本地图片临时上传预览和响应式布局。

## 功能

- 图片网格和大图两种浏览模式
- 按自然、城市、人物、静物分类筛选
- 按标题、地点、描述实时搜索
- 推荐、最新、标题三种排序方式
- 点击图片打开灯箱，支持 Esc、左右方向键操作
- 支持多选本地图片上传预览，不会写入磁盘

## 文件

```text
project_photo_show/
├─ index.html
├─ styles.css
├─ script.js
└─ README.md
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
    date: '2026-05-08',
    featured: 13,
    description: '图片说明'
}
```

可用分类包括 `nature`、`city`、`people`、`still`。如需新增分类，同时更新 `categoryLabels` 和 `index.html` 中的筛选按钮。
