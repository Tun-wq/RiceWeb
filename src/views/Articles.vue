<!-- todo:整块都有待重构 -->
<template>
  <div class="layout">
    <div class="nav">
      <header>
        <div class="name">木合鸟</div>
        <div class="links">
          <a class="link" href="/">首页</a>
          <a class="link active" href="/articles">文章</a>
          <a class="link" href="/thoughts">碎碎念</a>
        </div>
      </header>
    </div>
    <main class="blog-container">
      <div>
        <h1 class="blog-title">归档</h1>
        <div class="blog-list">
          <div class="blog-item">
            <div class="blog-date">
              <span class="date-text">12/17/2025</span>
            </div>
            <a class="blog-link" href="https://www.baidu.com">文章1</a>
          </div>
          <div class="blog-item">
            <div class="blog-date">
              <span class="date-text">8/14/2025</span>
            </div>
            <a class="blog-link" href="https://www.baidu.com">文章2</a>
          </div>
        </div>
      </div>
      <!-- todo:这里要补一个分页栏 -->
    </main>
    <!-- todo:footer也要抽出来统一成一个组件 -->
    <footer class="custom-footer">
      <div class="footer-top">
          <span class="copyright">&copy; 木合鸟 since 2025.</span>
          <div class="footer-actions">
              <span class="action-item login-item">
                  <img height="14" width="14" src="/src/assets/image/user.svg" />
              </span>
          </div>
      </div>
      <hr class="footer-divider" />
      <div class="footer-bottom">
          <a href="https://beian.miit.gov.cn/" target="_blank" class="footer-link icp-link" rel="noopener">
              浙 ICP 备 2021011234 号<i class="ri-arrow-right-up-line"></i>
          </a>
          <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33080202000472" target="_blank" class="footer-link police-record" rel="noopener">
              <img alt="MPS Icon" loading="lazy" width="14" height="14" decoding="async" class="police-icon" src="/src/assets/image/pic5.jpg" />
              浙公网安备 33080202001234 号<i class="ri-arrow-right-up-line"></i>
          </a>
      </div>
    </footer>
  </div>
</template>

<script></script>

<style scoped>
* {
  font-family: Noto Serif SC, serif;
}

.layout {
  padding: 2rem 1.5rem;
  color: #0C0A09;
}
@media screen and (min-width: 640px) {
  .layout {
    padding: 2rem 3rem;
  }
}

.nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 3rem;
  z-index: 50;
  transition: all 300ms ease-in-out;
}
@media screen and (min-width: 640px) {
  .nav {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

header {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
@media (min-width: 576px) {
  header {
    max-width: 576px;
  }
}

.links {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #79716B;
}

.link {
  transition: color 150ms;
  color: inherit;
  text-decoration: none;
}

.link:hover {
  color: #0C0A09;
}
.link.active {
  color: #0C0A09;
}

.blog-container {
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  min-height: 80svh;
}
@media (min-width: 576px) {
  .blog-container {
    max-width: 576px;
  }
}

.blog-title {
  font-size: 1.5rem;  /* text-2xl */
  line-height: 2rem;
  font-weight: 700;   /* font-bold */
  margin-top: 2rem;   /* my-8 = 2rem */
  margin-bottom: 2rem;
}

.blog-list {
  margin-top: 1rem;   /* mt-4 */
  display: flex;
  flex-direction: column;
  gap: 1rem;          /* gap-4 */
}
.blog-item {
  display: flex;
}
.blog-date {
  position: relative; /* relative */
  margin-right: 2.25rem; /* mr-9 */
  color: #79716B;     /* text-muted-foreground (假设颜色) */
  white-space: nowrap;
}
.blog-date::after {
  content: '0000/00/00'; /* after:content-['0000/00/00'] */
  visibility: hidden;    /* after:invisible */
}
.date-text {
  position: absolute;   /* absolute */
}
.blog-link {
  font-weight: 500;     /* font-medium */
  color: inherit;       /* 默认继承颜色 */
  text-decoration: none;
  transition: color 0.2s ease-in-out; /* transition-colors */
}
.blog-link:hover {
  color: #79716B;       /* hover:text-muted-foreground */
}

.custom-footer {
  margin-left: auto;
  margin-right: auto;
  color: #79716B; /* text-muted-foreground */
  font-size: 0.875rem; /* text-sm (14px) */
  line-height: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* gap-4 */
}
@media (min-width: 576px) {
  .custom-footer {
    max-width: 576px;
  }
}

/* 页脚顶部区域 */
.footer-top {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* gap-2 */
}

/* 版权信息 */
.copyright {
  flex-grow: 1; /* grow */
}
.footer-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem; /* gap-2 */
}

/* 操作按钮和链接 */
.action-item {
    cursor: pointer;
    transition: color 0.2s ease-in-out; /* transition-colors */
}

.action-item:hover {
    color: #0C0A09; /* hover:text-foreground (假设为黑色) */
}

/* 登录按钮 */
.login-item {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
}
/* 分割线 */
.footer-divider {
    border: none;
    border-top: 1px solid #79716B;
    margin: 0;
    opacity: 0.2;
}

/* 页脚底部区域 */
.footer-bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem; /* gap-2 */
    font-size: 0.75rem; /* text-xs (12px) */
    line-height: 1rem;
    opacity: 0.7; /* opacity-70 */
}

/* 页脚链接 */
.footer-link {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease-in-out; /* transition-colors */
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
}

.footer-link:hover {
    color: #0C0A09; /* hover:text-foreground */
}

/* 图标在链接内 */
.footer-link i {
    font-size: 0.875rem;
}

/* ICP备案链接 */
.icp-link {
    /* 无特殊样式 */
}

/* 公安备案链接 */
.police-record {
    position: relative; /* 用于定位图标 */
}

/* 公安备案图标 */
.police-icon {
    position: relative;
    top: -0.125rem; /* -top-0.5 */
    left: -0.125rem; /* -left-0.5 */
    display: inline-block;
    vertical-align: middle;
}

</style>
