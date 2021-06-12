
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/404.tsx")),
  "component---src-pages-about-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/about.tsx")),
  "component---src-pages-categories-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/categories.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/index.tsx")),
  "component---src-templates-post-template-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/templates/post_template.tsx"))
}

