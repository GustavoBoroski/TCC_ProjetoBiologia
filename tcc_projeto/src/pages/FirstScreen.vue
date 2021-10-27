<template>
  <div class="divExterna">
    <b-container class="containerPrinc">
      <div class="containeru">
        <b-row>
          <div id="imagem">
            <b-card
              id="ola"
              overlay
              img-src="https://www.unicesumar.edu.br/home/assets/img/logo.png"
              img-alt="Card Image"
              text-variant="white"
            >
            </b-card>
          </div>
        </b-row>
        <b-row>
          <b-col sm="12">
            <div id="tcc">
              <h1>Trabalho de Conclusão de Curso</h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12">
            <div id="titulo-tcc">
              <h2><strong>Ensino de Programação para Crianças do Ensino Médio</strong></h2>
            </div>
            <div id="contexto">
              <h2><strong>Você quer saber qual era a chance de você ter olhos claros ou escuros?</strong></h2>
              <h2><strong>Então clique no botão abaixo!</strong></h2>
              <b-button to="./game">Próximo</b-button>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.img {
  /* position: absolute; */
  
}
.btn-secondary:focus, .btn-secondary:read-only{
    /* background-color: #1f2191 !important; */
    /* box-shadow: none !important; */
}
.btn-secondary:hover{
    /* background-color: #1f2191; */
}
.divExterna{
  background-color: #1f2191;
  margin-top: 5% !important;
}
.containerPrinc{
  width: 74% !important;
  height: 100% !important;
}
#imagem {
  margin-left: 25%;
  width: 50%;
  height: 50%;
  /* text-align: center; */
}
.containeru {
  text-align: center;
  /* position: absolute; */
  background-color: white;
  /* display: inline-block; */
  /* width: 50%; */
  /* height: 50%; */
  /* margin-left: 2%; */
  background-image: url("https://www.readocs.com/wp-content/uploads/cornea-1.jpg");
  
}
#tcc h1 {
  font-size: 30px;
  color: black !important;
}
#titulo-tcc h2 {
  font-size: 20px;
  color: black !important;
}
#contexto h2{
  font-size: 25px;
  text-align: justify;
  margin-left: 5%;
  margin-top: 10%;
  color: black !important;
}
</style>