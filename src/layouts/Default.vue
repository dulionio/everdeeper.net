<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <div>
      <v-app-bar color="secondary">
        <v-spacer />
        <v-toolbar-title class="primary--text">Ever Deeper</v-toolbar-title>
        <v-spacer />
        <template v-slot:extension>
          <v-tabs centered>
            <v-tab to="/" exact>Home</v-tab>
            <v-tab to="/portfolio/">Portfolio</v-tab>
            <v-tab to="/commissions/">Commissions</v-tab>
            <v-tab to="/artist/">Meet the Artist</v-tab>
          </v-tabs>
          <v-btn icon absolute to="/" width="120" height="120" elevation="15" title="Home" active-class="no-active" class="logo mt-n6 accent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 367" height="95" width="95">
              <polygon
                class="logo-1"
                points="117.74 26.22 87.3 31.43 56.87 59.26 56.87 75.78 8.17 126.22 20.35 148.83 17.74 164.48 28.17 171.44 29.04 193.17 51.65 205.35 99.48 176.65 127.3 184.48 172.52 259.26 217.74 295.78 303.94 86.65 240.35 58.39 182.96 21 150.78 4.48 132.52 7.96 117.74 26.22"
              />
              <path class="logo-1" d="M79.48,4.48l45,13.41Z" />
              <polyline
                class="logo-1"
                points="182.04 102.67 198.61 63.61 170.78 16.01 176.87 80.13 141.22 80.13 116 47.96 124.48 17.89 79.48 4.48 87.3 31.43"
              />
              <polyline class="logo-1" points="127.3 184.48 167.3 173.17 189.04 133.17 176.87 80.13 198.61 63.61 246.47 133.17 172.52 259.26 167.3 173.17" />
              <polyline class="logo-1" points="28.17 171.44 54.26 184.48 99.48 176.65 79.91 150.13 99.48 85.35 116 47.96" />
              <polyline class="logo-1" points="56.87 75.78 76 52.74 87.3 31.43" />
              <polygon class="logo-3" points="8.17 126.22 20.35 148.83 42.09 133.17 25.13 133.17 8.17 126.22" />
              <line class="logo-1" x1="79.48" y1="4.48" x2="79.48" y2="38.59" />
              <polyline class="logo-1" points="101.98 46.42 116 47.96 117.74 26.22 101.98 46.42 76 52.74 79.48 79.26 42.09 133.17 79.91 150.13 54.26 184.48" />
              <polygon class="logo-1" points="145.89 26.22 133.43 54.42 162.96 71.92 167.3 38.59 145.89 26.22" />
              <polyline class="logo-1" points="99.48 85.35 141.22 80.13 133.43 54.42 116 47.96" />
              <polyline class="logo-1" points="132.52 7.96 145.89 26.22 150.78 4.48" />
              <line class="logo-1" x1="176.87" y1="80.13" x2="187.21" y2="44.24" />
              <line class="logo-1" x1="25.13" y1="133.17" x2="20.35" y2="148.83" />
              <polyline class="logo-1" points="189.04 133.17 217.74 295.78 246.47 357.66 344.06 86.65 303.94 86.65 246.47 133.17 240.35 58.39" />
              <line class="logo-1" x1="217.74" y1="295.78" x2="246.47" y2="133.17" />
              <polyline class="logo-1" points="246.47 357.66 281.54 141 344.06 86.65" />
              <polyline class="logo-1" points="141.22 80.13 162.96 71.92 176.87 80.13 167.3 38.59 169.91 14.82" />
              <polygon class="logo-2" points="99.48 85.35 84.7 94.04 79.48 79.26 99.48 85.35" />
            </svg>
          </v-btn>
        </template>
      </v-app-bar>
    </div>
    <v-container fluid>
      <v-row>
        <v-col md="8" offset-md="2">
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
.v-toolbar__title {
  font-family: 'Lily Script One';
  font-size: 2.7em;
}
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
.logo-1 {
  fill: none;
}
.logo-2 {
  fill: #b9722c;
}
.logo-1,
.logo-2,
.logo-3 {
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}
</style>