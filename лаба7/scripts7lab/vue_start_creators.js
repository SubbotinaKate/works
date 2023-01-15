let app = new Vue({
    el: "#app",
    data: {
        avtor_name: 'none',
        avtor_login: 'none',
        subscribers: '0',
        signed: '0',
        post_count: '0',
        Select_Avtor: "elementary", 
        pdata: data_info
    },
    computed:{
        Sortpdata: function(){           
            return this.pdata.filter(p =>{
                if(this.Select_Avtor === '' || this.Select_Avtor === 'elementary'){
                    this.avtor_name = "Все посты";
                    this.avtor_login = "@UserAccountLogin"
                    this.subscribers = 0;
                    this.signed = 0;
                    this.post_count = this.pdata.length;
                    return true;
                }else{
                    if(this.Select_Avtor === p.creator){
                        for(let i = 0; i<creators_info.length; i++){
                            if(p.creator == creators_info[i].login){
                                this.avtor_name = creators_info[i].name;
                                this.avtor_login = creators_info[i].login;
                                this.subscribers = creators_info[i].subscribers;
                                this.signed = creators_info[i].signed;
                                this.post_count = creators_info[i].post_count;
                            }
                        };
                    }
                    return this.Select_Avtor === p.creator;
                }
            })
        }
    }
});