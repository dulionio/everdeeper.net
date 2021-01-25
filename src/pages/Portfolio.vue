<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Portfolio</v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-for="edge in $page.allPortfolioPost.edges" :key="edge.node.id">
        <v-col>
          <v-card class="article">
            <g-link :to="edge.node.path"><g-image v-if="edge.node.cover_image" :src="edge.node.cover_image" class="cover" /></g-link>
            <div>
              <v-card-title>{{ edge.node.title }}</v-card-title>
              <v-card-text>
                <p>{{ edge.node.excerpt }}</p>
                <p>Posted {{ edge.node.date }} ({{ edge.node.timeToRead }} minute read).</p>
                <g-link :to="edge.node.path">Read Post</g-link>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card>
            <Pager :info="$page.allPortfolioPost.pageInfo" linkClass="pager" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome';

export default {
  components: {
    Pager,
  },
  metaInfo: {
    title: 'Portfolio',
  },
};
</script>

<page-query>
query ($page: Int) {
  allPortfolioPost(perPage: 4, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        cover_image (width: 200, height: 200, fit: contain, background: "white")
        date (format: "MMMM Do, YYYY")
        timeToRead
        path
      }
    }
  }
}
</page-query>

<style scoped>
.article {
  display: flex;
}

.cover {
  margin: 0 0 0 0;
  width: 200px;
  align-self: flex-start;
}

.pager {
  font-size: 1.25em;
  padding: 5px;
}
</style>