
    var app = new Vue({
        el: '#app',
        data: {
            contatore : 1,
            contacts : [
                {
                    name: 'Tullio',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            text: 'ciao tulio, come va?',
                            date: '10/01/2020 15:30:55',
                            status: 'sent'
                        },
                        {
                            text: 'tutto bene dai, e tu?',
                            date: '11/01/2020 17:30:50',
                            status: 'rec'
                        },
                        {
                            text: 'salutami i ragazzi',
                            date: '11/01/2020 17:31:15',
                            status: 'rec'
                        },
                    ]
                },
                {
                    name: 'Giobanni',
                    avatar: 'img/avatar_3.jpg',
                    visible: false,
                },
                {
                    name: 'Danielo',
                    avatar: 'img/avatar_4.jpg',
                    visible: false,
                },
                {
                    name: 'Marcolino',
                    avatar: 'img/avatar_5.jpg',
                    visible: false,
                },
                {
                    name: 'Barbra',
                    avatar: 'img/avatar_6.jpg',
                    visible: false,
                },
                {
                    name: 'Jacobbe',
                    avatar: 'img/avatar_7.jpg',
                    visible: false,
                },
                {
                    name:'Cristina',
                    avatar: 'img/avatar_10.jpg',
                    visible: false,
                },
            ]
        },
        methods: {
            insert(i){
                this.contatore = i;
            },
            change(i) {
                this.contact[i].visible = true;
            }
        }
      })


    
