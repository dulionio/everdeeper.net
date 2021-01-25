<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Ever Deeper Home</v-card-title>
            <v-card-text>Welcome to Ever Deeper Art Studios</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Latest Project</v-card-title>
            <v-card-text>
              <article v-for="edge in $static.allPortfolioPost.edges" :key="edge.node.id">
                <g-link :to="edge.node.path"><g-image v-if="edge.node.cover_image" :src="edge.node.cover_image" class="cover" /></g-link>
                <div class="post">
                  <h2>{{ edge.node.title }}</h2>
                  <p>{{ edge.node.excerpt }}</p>
                  <p>Posted {{ edge.node.date }}</p>
                  <g-link :to="edge.node.path">Project Details</g-link>
                </div>
              </article>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Ever Deeper',
  },
};
</script>

<static-query>
query{
  allPortfolioPost(limit: 1) {
    edges {
      node {
        id
        title
        excerpt
        cover_image (width: 200, height: 200, fit: contain, background: "white")
        date (format: "MMMM Do, YYYY")
        path
      }
    }
  }
}
</static-query>

<style>
article {
  display: flex;
  margin-bottom: 3em;
}

.cover {
  margin: 20px 30px 0 0;
  width: 200px;
  align-self: flex-start;
}
</style>
