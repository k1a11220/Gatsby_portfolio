
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/index.tsx")),
  "component---src-pages-info-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/info.tsx")),
  "component---src-templates-post-template-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/templates/post_template.tsx"))
}

