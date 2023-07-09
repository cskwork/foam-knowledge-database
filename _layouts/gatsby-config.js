module.exports = {
  pathPrefix: `/cskwork.github.io/foam-knowledge-database/`,
  siteMetadata: {
    title: `Knowledge`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/docs",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
