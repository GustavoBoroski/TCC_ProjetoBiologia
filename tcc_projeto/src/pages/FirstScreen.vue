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
            <div id="contexto1">
              <h2><strong>Você sabia que existe dois principais formatos de orelhas?</strong></h2>
            </div>
            <div id="contexto">
              <h2><strong>Vamos descobrir qual a chance de você ter uma das duas?</strong></h2>
              <b-col sm="12" id="botao"><b-button to="./info">Próximo</b-button></b-col>
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
.btn-secondary{
  width: 20% !important;
  height: 49px !important;
  margin-bottom: 2% !important;
}
.btn-secondary:focus, .btn-secondary:read-only{
    background-color: #1f2191 !important;
    box-shadow: none !important;
}
.btn-secondary:hover{
    background-color: #f32323;
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
  background-color: white;
  background-image: url("https://www.news-medical.net/image.axd?picture=2021%2F4%2Fshutterstock_1138783001.jpg");
  background-repeat: no-repeat;
  border: 15px solid black;
  box-sizing: border-box;
  border-radius: 25px;
  background-size: 100% !important;
}
#tcc h1 {
  font-size: 30px;
  color: white !important;
  text-shadow: 2px 2px black;
}
#titulo-tcc h2 {
  font-size: 20px;
  color: white !important;
  text-shadow: 2px 2px black;
}
#contexto h2{
  font-size: 25px;
  text-align: center;
  margin-left: 0%;
  margin-top: 5%;
  margin-bottom: 5%;
  color: white !important;
  text-shadow: 2px 2px black;
  text-align: center;
}
#contexto1 h2{
  font-size: 25px;
  text-align: center;
  margin-left: 0%;
  margin-top: 5%;
  color: white !important;
  text-shadow: 2px 2px black;
}
</style>