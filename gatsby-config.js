/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: "CV",
    siteName: "CV",
    siteKeywords: `React, CV, Work portfolio, Full Stack Developer`,
    siteDescription: "My Portfolio",
    siteUrl: "https://david-warner.dev",
    basePath: "",
    menuLinks: [
      // title = Link text
      // color = Animation background color on click
      { name: `home`, title: `Home`, color: `#000`, link: `` },
      { name: `experience`, title: `Experience`, color: `#3a3d98`, link: `` },
      { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
      { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
    ],
    email: `a@a.a`,
    social: {
      // Usernames
      twitter: ``,
      gitHub: `renn72`,
      stackOverflow: ``,
      linkedIn: `in/david-warner/`,
      resumeInPdf: `/Resume.png`, // url or local link
    },
    homePage: {
      availableToHire: true,
      dotColors: ["#0e3e1e", "#6CC551"],
      h1Text: `Hi!, I'm David`,
      h2Text: `I'm a fullstack developer looking for my next challenge`,
      typewriter: [
        `I'm a fast learner and always looking to learning new technologies 🤓`,
        `I think one of my values is the <strong>ability to find solutions <strong>`,
        `I like to share what I know`,
        `In my non-coding hours, I'm a runner and a family man.`,
        `Jack Russel's! 🐕`,
        `I also do design and UX work using mostly <span style:'color: #27ae60;'>figma.com</span> `,
      ],
    },
    shapeColor: {
      link: { color: "#171616", hover: "#d1d1d2" },
      shape1: {
        color: `#1d1d1e`,
        opacity: `0.7`,
      },
      shape2: {
        color: `#4a4a4a`,
        opacity: `0.7`,
      },
      shape3: {
        color: `#777778`,
        opacity: `0.7`,
      },
    },
    footer: "heart",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "CV",
        short_name: "DW",
        description: "CV",
        lang: `en`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.png`,
        icon_options: {
          // For all the options available, please see https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/.
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/layout`),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        // color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/experience/_additionalSkills`],
      },
    },
  ],
}
