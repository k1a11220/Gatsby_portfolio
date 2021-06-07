
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/.cache/dev-404-page.js")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/index.tsx")),
  "component---src-pages-info-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/pages/info.tsx")),
  "component---src-templates-post-template-tsx": preferDefault(require("/Users/beomsoo/Documents/GitHub/blog/src/templates/post_template.tsx"))
}

