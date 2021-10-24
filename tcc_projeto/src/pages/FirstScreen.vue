<template>
    <div>
        <div class="home-i">
            <b-container class="home-c">
                <b-row>
                    <b-col sm="12">
                        <b-card
                            overlay
                            img-src="https://www.unicesumar.edu.br/home/assets/img/logo.png"
                            img-alt="Card Image"
                            text-variant="white"
                            title="Trabalho de Conclusão de Curso"
                            sub-title="Ensino de Programação para Crianças do Ensino Médio"
                        >
                        
                            <div>
                                <b-card-text class="texto1">Quer saber qual a chance de se ter olhos claros ou escuros?</b-card-text>
                                <b-card-text class="texto2">Clique no botão abaixo!</b-card-text>
                                <b-button href="#" variant="primary" to="/game">Próximo</b-button>
                            </div>

                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    height: 100% !important;
    background-color: white;
}
.home-i{
    background-color: #4b5dff !important;
}
.texto1{
    color: black !important;
    font-size: 35px;
    margin-top: 2%;
}
.texto2{
    color: black !important;
    font-size: 30px;
    margin-top:3%;
}
.card-title{
    color: black !important;
    font-size: 50px;
    margin-top: 25%;
    text-align: center;
}
.text-muted{
    color: black !important;
    font-size: 25px;
    text-align: center;
}
.btn-primary{
    width: 150px !important;
    height: 50px !important;
    font-size: 20px !important;
}
</style>