const pphrases = [
    'tiffany',
    'f865426b-35b4-42ab-8eb9-e4b4fa39da14',
    '4bace723-1e65-463a-aebe-dcdc8a1cec6f',
    'david'
];
const vueApp = {
    el: '#app',
    data() {
        return {
            passcode: '',
            authenticationInitiated: false,
            menu: [
                {
                    name: 'Crab cake',
                    url: 'https://th.bing.com/th?id=OSK.HEROFOyjThexqX3VBSaGljddgE1pUCDVmc7g4e9qzNPTjLI&w=472&h=280&c=13&rs=2&o=6&pid=SANGAM',
                    wikiLink: 'https://en.wikipedia.org/wiki/Crab_cake'
                },
                {
                    name: 'Pollo adobo',
                    url: 'https://www.bing.com/th?id=OIP.XwmxAU5-1dw09gd-HDgxtAHaE8&w=146&h=120&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
                    wikiLink: 'https://en.wikipedia.org/wiki/Adobo'
                },
                {
                    name: 'Disneyland turkey leg',
                    url: 'https://www.bing.com/th?id=OIP.CAg86Rlqj8phAbu4KLFkmAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
                },
                {
                    name: 'Mashed potato',
                    url: 'https://th.bing.com/th/id/OIP.GzqKfjbmATkdwUu87oLJCgHaLG?w=197&h=361&c=7&r=0&o=5&pid=1.7',
                    wikiLink: 'https://en.wikipedia.org/wiki/Mashed_potato'
                },
                {
                    name: 'Egg salad',
                    url: 'https://th.bing.com/th?id=OSK.HEROvTqv4m2tnGKSt4gHgKAR4k9Zj-QLdImL-zJyKrarEo4&w=472&h=280&c=13&rs=2&o=6&pid=SANGAM'
                }
            ],
        };
    },
    computed: {
        isThxGivingWeek() {
            return new Date() >= Date.parse('11-19-2023');
        },
        hasAccess() {
            return pphrases.includes(this.passcode) ||
                pphrases.includes(new URL(window.location.href).searchParams.get('user'));
        },
    },
    methods: {
        viewMenu() {
            this.authenticationInitiated = !this.authenticationInitiated;
        }
    },
};

new Vue(vueApp);
