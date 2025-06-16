# Frontend Guidelines

## 概述
本文档定义了电话号码生成器项目的前端开发规范和最佳实践，确保代码一致性、可维护性和用户体验的统一性。

## 🎨 设计系统

### 字体规范
**不使用 Google Fonts**
- ❌ 避免使用 Google Fonts（如 Inter、Roboto 等）
- ✅ 使用系统默认字体栈，确保快速加载和隐私保护
- ✅ 依赖 Tailwind CSS 的默认字体配置

```css
/* 推荐的字体栈 */
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

### 图标系统
**使用 React Icons**
- ✅ 主要图标库：`react-icons`
- ✅ 国旗图标：`country-flag-icons`
- ✅ Ant Design 图标：`@ant-design/icons`（仅用于 Ant Design 组件）

```tsx
// 推荐用法
import { FiPhone, FiCopy, FiExternalLink } from 'react-icons/fi';
import { US, CN, GB } from 'country-flag-icons/react/3x2';
import { ExportOutlined } from '@ant-design/icons';

// 图标尺寸规范
<FiPhone className="size-4" />      // 小图标 16px
<FiPhone className="size-5" />      // 中图标 20px  
<FiPhone className="size-6" />      // 大图标 24px
<FiPhone className="size-8" />      // 特大图标 32px
```

## 🎯 样式规范

### CSS 架构
```
app/
├── globals.css          # 全局样式和 CSS 变量
├── constants/           # 样式和布局常量
│   └── layout.ts       # 布局相关常量
├── components/          # 组件特定样式
└── [page]/             # 页面特定样式
```

### 常量管理
**布局常量**
```tsx
// app/constants/layout.ts
export const BODY_PADDING = "px-4 sm:px-6";

// 使用方式
import { BODY_PADDING } from '../constants/layout';
<div className={cn("container", BODY_PADDING)}>
```

**注意**: Next.js layout.tsx 文件只能导出特定的字段（metadata, default function），其他常量应放在独立的常量文件中。

### CSS 变量使用
```css
:root {
  /* 动画时长 */
  --animation-duration-fast: 200ms;
  --animation-duration-normal: 300ms;
  --animation-duration-slow: 500ms;
  
  /* 圆角规范 */
  --border-radius-card: 1rem;
  --border-radius-large: 1.5rem;
  
  /* 阴影层级 */
  --shadow-elevation-1: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-elevation-2: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-elevation-3: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Tailwind CSS 使用规范

#### 响应式设计
```tsx
// 移动端优先的响应式设计
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
  
// 间距响应式
<div className="p-4 md:p-8">

// 文字大小响应式  
<h1 className="text-2xl md:text-3xl lg:text-5xl">
```

#### 动画和过渡
```tsx
// 标准过渡效果
<div className="transition-all duration-300 ease-out">

// 悬停效果
<div className="hover:scale-105 hover:shadow-lg hover:-translate-y-1">

// 渐入动画
<div className="animate-in fade-in slide-in-from-bottom-3 duration-1000">
```

#### 颜色使用
```tsx
// 使用 DaisyUI 语义化颜色
<div className="bg-primary text-primary-content">
<div className="bg-base-100 text-base-content">
<div className="text-base-content/70">  // 70% 透明度

// 渐变背景
<div className="bg-gradient-to-br from-primary to-primary-focus">
```

## 🧩 组件规范

### 组件分类
```
app/
├── server-components/   # 服务端组件（SEO 优化）
├── client-component/    # 客户端组件（交互功能）
└── page-content/       # 页面内容组件
```

### 组件命名规范
- **文件名**：小写加连字符 `component-name.tsx`
- **组件名**：PascalCase `ComponentName`
- **Props 接口**：`ComponentNameProps`

```tsx
// ✅ 推荐
interface PhoneGeneratorProps {
  country: string;
  style: GenerateStyles;
}

export const PhoneGenerator = ({ country, style }: PhoneGeneratorProps) => {
  // 组件实现
};
```

### 组件结构模板
```tsx
import React from 'react';
import { ComponentProps } from './types';

/**
 * 组件描述
 * @param props - 组件属性
 */
export const ComponentName = ({ prop1, prop2 }: ComponentProps) => {
  // 1. Hooks
  const [state, setState] = useState();
  
  // 2. 计算属性
  const computedValue = useMemo(() => {
    return someCalculation(prop1);
  }, [prop1]);
  
  // 3. 事件处理
  const handleClick = useCallback(() => {
    // 处理逻辑
  }, []);
  
  // 4. 渲染
  return (
    <div className="component-container">
      {/* 组件内容 */}
    </div>
  );
};
```

## 🎭 用户体验规范

### 交互反馈
```tsx
// 加载状态
<Button loading={isLoading}>Generate</Button>

// 成功反馈
message.success('Generated successfully!');

// 悬停效果
<div className="group">
  <div className="group-hover:scale-110 transition-transform">
    Content
  </div>
</div>
```

### 无障碍访问
```tsx
// 语义化 HTML
<section aria-labelledby="countries-heading">
  <h2 id="countries-heading">Available Countries</h2>
</section>

// 屏幕阅读器支持
<h3 className="sr-only">Hidden heading for screen readers</h3>

// 键盘导航
<button className="focus-ring focus:outline-2 focus:outline-primary">
```

### 性能优化
```tsx
// 懒加载
const LazyComponent = lazy(() => import('./HeavyComponent'));

// 图片优化
<Image 
  src={imageSrc} 
  alt="Description"
  width={200}
  height={150}
  loading="lazy"
/>

// 防抖处理
const debouncedSearch = useMemo(
  () => debounce(handleSearch, 300),
  [handleSearch]
);
```

## 📱 移动端优化

### 触摸友好设计
```tsx
// 最小触摸目标 44px
<button className="min-h-11 min-w-11 p-3">

// 手势友好的间距
<div className="space-y-4 md:space-y-6">
```

### 移动端特定样式
```tsx
// 移动端隐藏/显示
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>

// 移动端优化的网格
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
```

## 🔧 开发工具配置

### TypeScript 规范
```tsx
// 严格类型定义
interface StrictProps {
  required: string;
  optional?: number;
  callback: (value: string) => void;
}

// 避免 any 类型
// ❌ 避免
const data: any = fetchData();

// ✅ 推荐
const data: ApiResponse<UserData> = fetchData();
```

### 代码格式化
```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "warn"
  }
}
```

## 🚀 性能最佳实践

### 包大小优化
```tsx
// 按需导入
import { debounce } from 'lodash-es';  // ✅
import _ from 'lodash';                // ❌

// Tree shaking 友好的导入
import { Button } from 'antd';         // ✅
import * as antd from 'antd';          // ❌
```

### 渲染优化
```tsx
// 使用 React.memo 优化重渲染
export const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* 复杂渲染逻辑 */}</div>;
});

// 使用 useMemo 缓存计算结果
const expensiveValue = useMemo(() => {
  return heavyCalculation(props.data);
}, [props.data]);
```

## 📋 代码审查清单

### 提交前检查
- [ ] 移除了所有 console.log
- [ ] 添加了适当的 TypeScript 类型
- [ ] 组件具有适当的 props 验证
- [ ] 添加了必要的无障碍属性
- [ ] 测试了移动端响应式
- [ ] 优化了图片和资源加载
- [ ] 遵循了命名规范

### 性能检查
- [ ] 避免了不必要的重渲染
- [ ] 使用了适当的 React hooks
- [ ] 实现了适当的错误边界
- [ ] 优化了包大小和加载时间

## 🔄 更新日志

### v1.0.0 (2024-01-XX)
- 初始版本发布
- 建立基础设计系统
- 定义组件规范
- 移除 Google Fonts 依赖
- 确立 React Icons 作为主要图标库

---

**注意**: 本文档会随着项目发展持续更新，请定期查看最新版本。 