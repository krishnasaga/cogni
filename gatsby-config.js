module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        prismPreset: 'night-owl',
        preset: '@theme-ui/preset-funk',
      }
    }
  ]
};
