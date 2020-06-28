module.exports = {

    author: "@SterlingSmith",
    siteTitle: "Sterling Smith Portfolio",
    siteShortTitle: "ss.", // Used as logo text in header, footer, and splash screen
    siteDescription: "Hi there! I'm Sterling Smith, a fractional product manager, startup founder and freelance app developer based in Austin.",
    siteUrl: "https://sterling.ooo",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    mediumRssFeed: "https://rss2json.com/#rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sterlingwrites https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sterlingwrites",
    shownArticles: 3,
    
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/sterlingssmith/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@sterlingwrites"
        },
        {
            name: "Github",
            url: "https://github.com/sterling-smith"
        },
        // {
        //     name: "Behance",
        //     url: "https://www.behance.net/konstanmnster"
        // },
    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}
