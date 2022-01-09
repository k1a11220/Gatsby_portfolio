module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"G-4DWMXJBX6X","head":true,"anonymize":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/styles/typography"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"linkImagesToOriginal":false,"maxWidth":650,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Beomsoo-log","short_name":"Beomsoo-log","description":"더 나은 제품을 만들기 위한 고민을 기록하고 있습니다.","lang":"ko","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/images/icon.png","icon_options":{"purpose":"any maskable"},"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"abfded2d68398b0949c75a0894fbf871"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
