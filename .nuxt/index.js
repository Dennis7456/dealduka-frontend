import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_2d14bc77 from 'nuxt_plugin_plugin_2d14bc77' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_axios_5466bbe6 from 'nuxt_plugin_axios_5466bbe6' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_antdui_2b2dca90 from 'nuxt_plugin_antdui_2b2dca90' // Source: ../plugins/antd-ui (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"deal-duka","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fmedia\u002Ffavicons\u002Ffavicomatic\u002Ffavicon.ico"},{"rel":"apple-touch-icon-precomposed","sizes":"57x57","href":"\u002Fmedia\u002Ffavicomaticwhitebg\u002Ffavicomatic\u002Fapple-touch-icon-57x57.png"},{"rel":"apple-touch-icon-precomposed","sizes":"114x114","href":"\u002Fmedia\u002Ffavicomaticwhitebg\u002Ffavicomatic\u002Fapple-touch-icon-114x114.png"},{"rel":"apple-touch-icon-precomposed","sizes":"72x72","href":"\u002Fmedia\u002Ffavicomaticwhitebg\u002Ffavicomatic\u002Fapple-touch-icon-72x72.png"},{"rel":"apple-touch-icon-precomposed","sizes":"144x144","href":"\u002Fmedia\u002Ffavicomaticwhitebg\u002Ffavicomatic\u002Fapple-touch-icon-144x144.png"},{"rel":"apple-touch-icon-precomposed","sizes":"60x60","href":"\u002Fmedia\u002Ffavicomaticwhitebg\u002Ffavicomatic\u002Fapple-touch-icon-60x60.png"},{"rel":"apple-touch-icon-precomposed","sizes":"120x120","href":"\u002Fmedia\u002Ffavicomaticwhitebg\u002Ffavicomatic\u002Fapple-touch-icon-120x120.png"},{"rel":"apple-touch-icon-precomposed","sizes":"76x76","href":"\u002Fmedia\u002Ffavicomaticwhitebg\u002Ffavicomatic\u002Fapple-touch-icon-76x76.png"},{"rel":"apple-touch-icon-precomposed","sizes":"152x152","href":"\u002Fmedia\u002Ffavicomaticwhitebg\u002Ffavicomatic\u002Fapple-touch-icon-152x152.png"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Fmedia\u002Ffavicons\u002Ffavicomatic\u002Ffavicon-196x196.png","sizes":"196x196"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Fmedia\u002Ffavicons\u002Ffavicomatic\u002Ffavicon-96x96.png","sizes":"96x96"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Fmedia\u002Ffavicons\u002Ffavicomatic\u002Ffavicon-32x32.png","sizes":"32x32"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Fmedia\u002Ffavicons\u002Ffavicomatic\u002Ffavicon-16x16.png","sizes":"16x16"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Fmedia\u002Ffavicons\u002Ffavicomatic\u002Ffavicon-128.png","sizes":"128x128"},{"name":"application-name","content":"&nbsp;"},{"name":"msapplication-TileColor","content":"#FFFFFF"},{"name":"msapplication-TileImage","content":"mstile-144x144.png"},{"name":"msapplication-square70x70logo","content":"mstile-70x70.png"},{"name":"msapplication-square150x150logo","content":"mstile-150x150.png"},{"name":"msapplication-wide310x150logo","content":"mstile-310x150.png"},{"name":"msapplication-square310x310logo","content":"mstile-310x310.png"}],"noscript":[{"innerHTML":"We're sorry but bonik-vuetify doesn't work properly without JavaScript enabled. Please enable it to continue."}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_2d14bc77 === 'function') {
    await nuxt_plugin_plugin_2d14bc77(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5466bbe6 === 'function') {
    await nuxt_plugin_axios_5466bbe6(app.context, inject)
  }

  if (typeof nuxt_plugin_antdui_2b2dca90 === 'function') {
    await nuxt_plugin_antdui_2b2dca90(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
