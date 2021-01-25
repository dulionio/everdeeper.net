import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import colors from 'vuetify/lib/util/colors'

export default function (Vue, { appOptions, router, head }) {
  head.htmlAttrs = { lang: 'en' }
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lily+Script+One:100,300,400,500,700,900'
  });
  const opts = {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.brown.darken3,
          secondary: colors.amber.lighten4,
          accent: colors.amber.lighten5,
          background: colors.amber.lighten5
        },
        dark: {
          primary: colors.amber.lighten4,
          secondary: colors.brown.darken3,
          accent: colors.brown.lighten2,
          background: colors.brown.darken4
        }

      }
    }
  }

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);
  Vue.component('Layout', DefaultLayout);
}
