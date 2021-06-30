
    var app = new Vue({
        el: '#app',
        data: {
            contatore : 0,
            newMex: '',
            filtro: '',
            contacts : [
                {
                    name: 'Tullio',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            text: 'ciao tulio, come va?',
                            date: '10/01/2020 15:30:55',
                            status: 'sent',
                            toggle: false
                        },
                        {
                            text: 'tutto bene dai, e tu?',
                            date: '11/01/2020 17:30:50',
                            status: 'rec',
                            toggle: false
                        },
                        {
                            text: 'salutami i ragazzi',
                            date: '11/01/2020 17:31:15',
                            status: 'rec',
                            toggle: false
                        },
                    ]
                },
                {
                    name: 'Giobanni',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            text: 'ciao, come va?',
                            date: '11/04/2020 07:30:05',
                            status: 'rec',
                            toggle: false
                        },
                        {
                            text: 'ciao giobanni, bene dai, e tu?',
                            date: '11/04/2020 07:37:50',
                            status: 'sent',
                            toggle: false
                        },
                        {
                            text: 'fa caldo',
                            date: '11/04/2020 07:43:15',
                            status: 'rec',
                            toggle: false
                        },
                    ]
                },
                {
                    name: 'Danielo',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            text: 'ciao, tutto bene con il vaccino?',
                            date: '14/08/2020 20:30:17',
                            status: 'sent',
                            toggle: false
                        },
                        {
                            text: 'ho un po di male al braccio, ma niente altro',
                            date: '15/08/2020 08:04:57',
                            status: 'rec',
                            toggle: false
                        },
                        
                    ]
                },
                {
                    name: 'Marcolino',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            text: 'ciao tulio, come va?',
                            date: '10/01/2020 15:30:45',
                            status: 'sent',
                            toggle: false
                        },
                        {
                            text: 'hai sbagliato contatto',
                            date: '11/01/2020 16:10:50',
                            status: 'rec',
                            toggle: false
                        },
                    ]
                },
                {
                    name: 'Barbra',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            text: 'ciao, ricordati di portare i bicchieri domani',
                            date: '10/11/2020 14:30:55',
                            status: 'rec',
                            toggle: false
                        },
                        {
                            text: 'ciao, si ora mi faccio un promemoria',
                            date: '10/11/2020 17:30:50',
                            status: 'sent',
                            toggle: false
                        },
                        {
                            text: 'serve altro?',
                            date: '10/11/2020 17:31:15',
                            status: 'sent',
                            toggle: false
                        },
                    ]
                },
                {
                    name: 'Jacobbe',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            text: 'ciao jac, come va?',
                            date: '09/06/2020 15:30:55',
                            status: 'sent',
                            toggle: false
                        },
                        {
                            text: 'tutto bene dai, e tu?',
                            date: '09/06/2020 17:30:50',
                            status: 'rec',
                            toggle: false
                        },
                        {
                            text: 'hai cominicato a lavorare?',
                            date: '09/06/2020 17:31:15',
                            status: 'sent',
                            toggle: false
                        },
                        {
                            text: 'si ho cominciato ieri',
                            date: '09/06/2020 17:34:02',
                            status: 'rec',
                            toggle: false
                        },
                    ]
                },
                {
                    name:'Cristina',
                    avatar: 'img/avatar_10.jpg',
                    visible: true,
                    messages: [
                        {
                            text: 'ciao cristina, non ho capito, puoi rispiegare?',
                            date: '28/06/2021 10:05:55',
                            status: 'sent',
                            toggle: false
                        },
                        {
                            text: 'certo, cosa non hai capito?',
                            date: '28/06/2021 10:05:57',
                            status: 'rec',
                            toggle: false
                        },
                    ]
                },
            ],
        },

        methods: {
            insert(i){
                this.contatore = i;
            },
            // scrivi messaggio
            addMex(obj) {
                if ( obj ){
                    this.contacts[this.contatore].messages.push({text:this.newMex, date:this.momento(), status: 'sent'});
                    this.newMex = '';

                    setTimeout(function(){ app.contacts[app.contatore].messages.push({text:'ok', date:app.momento(), status: 'rec'})}, 1000);
                }
            },

            // add data momento
            momento(){
                return dayjs().format('DD/MM/YYYY') + ' ' + dayjs().format('HH:mm:ss')
            },

            // func filtro nomi
            filterUser() {
                this.contacts.forEach(element => {
                    let nameLow = element.name.toLowerCase();
                    let filtroLow = this.filtro.toLowerCase();
                    if(nameLow.includes(filtroLow) == true){
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                    
                    console.log(element.visible);
                });
            },

            tF() {
                if(this.sect == false) {
                    this.sect == true;
                } else {
                    this.sect == false;
                }
                console.log(this.sect);
            }
            
        }
        
    })


    
// <div id="app">
//   <button @click='toggle = !toggle'> click here </button>
//   <div v-show='toggle'>showing</div>
// </div>