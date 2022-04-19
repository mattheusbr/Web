const meuPrimeiroApp = Vue.createApp({
    data (){
        return {            
            nome: '',
            faculdade: '',
            curso: '',
            cpf: '',
            rg: '',
            dataNascimento: '',
            genero: '',
            dark: false
        }        
    },
    methods: {
        LimparCampos() {                                         
            Object.assign(this.$data, this.$options.data.call(this));                                              
        }   
    }   
})

const mountedApp = meuPrimeiroApp.mount('#divMestre')