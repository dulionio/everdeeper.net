<template>
  <Layout>
    <g-image v-if="$page.portfolioPost.cover_image" :src="$page.portfolioPost.cover_image" class="cover" />
    <div v-html="$page.portfolioPost.content" />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio Post'
  }
}
</script>

<page-query>
query($path: String!) {
  portfolioPost(path: $path) {
    cover_image
    content
  }
}
</page-query>

<style>
.cover {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>