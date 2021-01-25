module.exports = {
  siteName: 'EverDeeper',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PortfolioPost',
        path: './content/portfolio/**/*.md',
      }
    }
  ],
  templates: {
    PortfolioPost: '/portfolio/:id'
  }
}
