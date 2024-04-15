const {
    description
} = require('../package')

module.exports = {
    title: 'Eva\'s blog',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        editLinks: false,
        logo: '/homepage.png',
        nav: [{
            text: 'Eva\'s sites',
            items: [{
                text: 'Home',
                link: 'https://crystall1ne.dev/'
            },
            {
                text: 'Bruh',
                link: 'https://crystall1ne.dev/'
            },
            ]
        },
        ],
        sidebar: [{
            title: '2024',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                /**{
                    title: 'April 2024',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2024/04/2024-04-',
                    ],
                },*/
                {
                    title: 'March 2024',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2024/03/2024-03-18-twvtb3j5ievpz2h0',
                    ],
                },
                {
                    title: 'February 2024',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2024/02/2024-02-09-rebranding-crystall1ne-dev',
                    ],
                },
                {
                    title: 'January 2024',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2024/01/2024-01-04-new-apps-and-old',
                    ],
                },   
            ]
        },
        {
            title: '2023',
            collapsable: false, 
            sidebarDepth: 1,
            children: [
                {
                    title: 'November 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/11/2023-11-27-twvtb3j5ifnldmvu',
                    ],
                },
                {
                    title: 'August 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/08/2023-08-08-the-safehouse',
                        '/posts/2023/08/2023-08-08-not-so-distant-futures',
                    ],
                },
                {
                    title: 'July 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/07/2023-07-27-twvtb3j5ifnpea',
                        '/posts/2023/07/2023-07-11-twvtb3j5iezvdxi',
                        '/posts/2023/07/2023-07-11-twvtb3j5iezpdmu',
                        '/posts/2023/07/2023-07-09-twvtb3j5ifrocmvl',
                        '/posts/2023/07/2023-07-09-twvtb3j5ifr3bw',
                        '/posts/2023/07/2023-07-07-twvtb3j5idax',
                        '/posts/2023/07/2023-07-04-my-airpods-max-died',
                    ],
                },
                {
                    title: 'June 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/06/2023-06-29-stream-plans',
                        '/posts/2023/06/2023-06-16-bye-reddit',
                        '/posts/2023/06/2023-06-09-wwdc23-macos',
                        '/posts/2023/06/2023-06-09-wwdc23-mac',
                        '/posts/2023/06/2023-06-09-wwdc23-ios',
                        '/posts/2023/06/2023-06-09-apple-silicon',
                        '/posts/2023/06/2023-06-03-lmfao',
                    ],
                },
                {
                    title: 'May 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/05/2023-05-31-over-three-years',
                        '/posts/2023/05/2023-05-18-to-stellas-parents',
                        '/posts/2023/05/2023-05-17-changing-names',
                        '/posts/2023/05/2023-05-16-making-amends',
                        '/posts/2023/05/2023-05-16-gay',
                        '/posts/2023/05/2023-05-15-downfall-pt-4',
                        '/posts/2023/05/2023-05-15-downfall-pt-3',
                        '/posts/2023/05/2023-05-15-downfall-pt-2',
                        '/posts/2023/05/2023-05-15-downfall',
                        '/posts/2023/05/2023-05-05-system-reset',
                        '/posts/2023/05/2023-05-03-peapoddevs',
                        '/posts/2023/05/2023-05-03-metal-1-2-or-3',
                        '/posts/2023/05/2023-05-02-undetermined-future',
                    ],
                },
                {
                    title: 'April 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/04/2023-04-27-license-keys',
                        '/posts/2023/04/2023-04-26-self-confidence',
                    ],
                },
                {
                    title: 'March 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/03/2023-03-17-objective-c',
                        '/posts/2023/03/2023-03-09-hardware-failure',
                        '/posts/2023/03/2023-03-03-to-mykola',
                    ],
                },
                {
                    title: 'February 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/02/2023-02-13-sideloading-and-jit',
                        '/posts/2023/02/2023-02-13-macos-support-theory',
                        '/posts/2023/02/2023-02-08-x619ap',
                    ],
                },
                {
                    title: 'January 2023',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2023/01/2023-01-31-rmdl',
                        '/posts/2023/01/2023-01-30-ai-com-elli',
                        '/posts/2023/01/2023-01-18-macbook-pro',
                        '/posts/2023/01/2023-01-15-xrcraft',
                        '/posts/2023/01/2023-01-15-a-few-thoughts',
                        '/posts/2023/01/2023-01-12-stella',
                        '/posts/2023/01/2023-01-12-psych-ward',
                        '/posts/2023/01/2023-01-05-upgrading-to-2023',
                    ],
                },
            ]
        },
        {
            title: '2022',
            collapsable: true,
            sidebarDepth: 1,
            children: [
                {
                    title: 'December 2022',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2022/12/2022-12-14-patreon-changes',
                        '/posts/2022/12/2022-12-13-system-support',
                    ],
                },
                {
                    title: 'November 2022',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2022/11/2022-11-30-future-plans',
                        '/posts/2022/11/2022-11-30-friends',
                        '/posts/2022/11/2022-11-29-blocked',
                        '/posts/2022/11/2022-11-11-trade-ins',
                        '/posts/2022/11/2022-11-09-silence',
                        '/posts/2022/11/2022-11-08-shutting-down-my-repo',
                        '/posts/2022/11/2022-11-07-fr',
                        '/posts/2022/11/2022-11-07-exciting-things',
                        '/posts/2022/11/2022-11-04-heres-to-the-end',
                    ],
                },
                {
                    title: 'October 2022',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2022/10/2022-10-31-goodbye-old-friend',
                        '/posts/2022/10/2022-10-01-updates',    
                    ],
                },
                {
                    title: 'September 2022',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2022/09/2022-09-06-school',
                    ],
                },
                {
                    title: 'August 2022',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2022/08/2022-08-16-goodbye-jailbreakers',
                        '/posts/2022/08/2022-08-14-patching-intel-macs-now-live',
                        '/posts/2022/08/2022-08-12-08-13-22',
                    ],
                },
                {
                    title: 'July 2022',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/posts/2022/07/2022-07-31-making-my-debut',
                    ],
                },
                
                
                
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-fulltext-search',
		['flexsearch'],
        ['@vuepress/medium-zoom',
            {
                selector: ".theme-succinct-content :not(a) > img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}