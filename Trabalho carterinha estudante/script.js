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
           document.location.reload(true);
        }   
    }   
})

const mountedApp = meuPrimeiroApp.mount('#divPrincipal')