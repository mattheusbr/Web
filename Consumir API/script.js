const app = Vue.createApp({
    data (){
        return {            
            carregando: false,
            cep: "",
            erro: true,
            msgErro: "",
            dadosCep: {},
        }        
    },
    methods: {        
        ConsultarCEP(){
            this.carregando = true                                    
            axios
            .get(`https://viacep.com.br/ws/${this.cep}/json/`)            
            .then(response => {
                this.dadosCep = response.data                
                if(!dadosCep){
                    msgErro = "CEP não encontrado"
                    this.erro = false
                }                    
            })
            .catch(error => {
                msgErro = "Não foi possivel executar a consulta"
                erro = false                
            })
            .finally(() => this.carregando = false)              
        }
    }   
})

const mountedApp = app.mount('#divMestre')
