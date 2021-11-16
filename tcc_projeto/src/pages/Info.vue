<template>
  <div class="divExterna">
    <b-container class="containerPrinc">
      <div class="containeru">
        <b-row>
          <b-col sm="12">
            <div id="tcc">
              <h1>Introdução ao conteudo</h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12">
            <div id="titulo-tcc">
              <h2><strong>Antes de começarmos, vamos ver um pouco sobre os lóbulos recessivos e dominantes.</strong></h2>
            </div>
            <div id="contexto1">
              <h2><strong>Lóbulos Recessivos</strong></h2>
            </div>
            <div id="texto1">
              <h2>
                <strong>
                    Falando um pouco dos lóbulos da orelha anexados, 
                    ou lóbulos recessivos, são mais difíceis de serem encontrados, 
                    e possuem uma característica diferente dos dominantes. 
                    Seus tamanhos são menores e possuem o lóbulo anexado ao lado da cabeça. 
                    <br>
                    Um fator importante, seria o fato de que pais recessivos não podem 
                    dar à luz a uma criança dominante. Isso pode acontecer quando ocorrer a 
                    união dos alelos, aquele que tiver maior influência, será o dominante, 
                    porém, caso o dominante não expresse algum movimento, 
                    o recessivo irá mostrar suas características. 
                </strong>
            </h2>
            </div>

            <div id="contexto">
              <h2><strong>Lóbulos Dominantes</strong></h2>
            </div>
            <div id="texto2">
                <h2>
                    <strong>
                        Os lóbulos dominantes ou como chamados de lóbulos de orelha livres, 
                        são conhecidos por serem muito comuns, ou seja, 
                        são os mais vistos na população em relação aos recessivos. 
                        <br>
                        Por conta da influência do alelo dominante, 
                        a orelha recebe características maiores e acabam 
                        possuindo um lóbulo maior e separado da lateral da cabeça. 
                    </strong>
                </h2>
            </div>
            <b-col sm="12" id="botao"><b-button to="./game">Próximo</b-button></b-col>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.btn-secondary{
  width: 20% !important;
  height: 49px !important;
  margin-bottom: 2% !important;
  margin-top: 30px !important;
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
  background-image: url("https://wl-incrivel.cf.tsp.li/resize/728x/jpg/a91/1d5/c7384b5453acef6cb586dd8980.jpg");
  background-repeat: no-repeat;
  border: 15px solid black;
  box-sizing: border-box;
  border-radius: 25px;
  background-size: 100% !important;
  height: 850px !important;
}
#tcc h1 {
    margin-top: 30px !important;
    font-size: 50px;
    color: white !important;
    text-shadow: 2px 2px black;
}
#titulo-tcc h2 {
    font-size: 25px;
    color: white !important;
    text-shadow: 2px 2px black;
}
#contexto h2{
  font-size: 25px;
  text-align: justify;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
  color: white !important;
  text-shadow: 2px 2px black;
}
#contexto1 h2{
  font-size: 25px;
  text-align: justify;
  margin-left: 5%;
  margin-top: 5%;
  color: white !important;
  text-shadow: 2px 2px black;
}
#texto1 h2{
  font-size: 20px;
  text-align: justify;
  margin-left: 5%;
  margin-top: 2%;
  color: white !important;
  text-shadow: 2px 2px black;
  margin-right: 60px !important;
}
#texto2 h2{
  font-size: 20px;
  text-align: justify;
  margin-left: 5%;
  margin-top: -2%;
  color: white !important;
  text-shadow: 2px 2px black;
  margin-right: 60px !important;
}
</style>