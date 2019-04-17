module.exports = {
    title: 'Mike + GitLab + VuePress = ❤️ ',
    description: 'Vue-powered static site generator running on GitLab Pages makes Mike happy',
    base: '/gitpress/',
    dest: 'public',
    themeConfig: {
        search: false,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Component Test', link: '/comptest'}
        ],
    },
}