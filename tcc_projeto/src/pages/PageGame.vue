<template>
  <div class="divPrincipal">
    <b-container class="formContainer">
      <div class="segundaDiv">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <h2 style="text-align: center; margin-bottom: 3% !important">Selecione o tipo de lóbulo que seus pais possuem.</h2>
          <b-container class="avosPaiMae">
            <b-row>
              <b-col sm="2">
                <b-form-group id="input-group-3" label="Pai" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tipo1"
                    :options="tipos1"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="10">
                <b-form-group id="input-group-3" label="Mãe" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tipo2"
                    :options="tipos2"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
          <hr>
          <div id="botoes">
            <b-button type="submit" variant="primary">Calcular</b-button>
            <b-button type="reset" variant="danger">Limpar campos</b-button>
          </div>
        </b-form>

        <b-card class="mt-3" header="Resultado abaixo:">
          <pre class="m-0">{{ result }}</pre>
          <b-container class="imagens">
            <b-row>
              <b-col sm="4">
                <ImagemRecessivo/>
              </b-col>
            </b-row>
          </b-container>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import ImagemRecessivo from "../components/ImagemRecessivo.vue";
export default {
  components:{
    ImagemRecessivo,
  },
  data() {      
    return {
      result: null, 
      form: {
        tipo1: null,
        tipo2: null,
      },
      tipos1: [
        { text: "Selecione um", value: null },
        "Dominante",
        "Recessivo",
      ],
      tipos2: [
        { text: "Selecione um", value: null },
        "Dominante",
        "Recessivo",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if(this.form.tipo1 == "Dominante" && this.form.tipo2 == "Dominante"){
        return this.result = "75% - Dom / 25% - Rec"
      }
      if(this.form.tipo1 == "Dominante" && this.form.tipo2 == "Recessivo"){
        return this.result = "50% - Dom / 50% - Rec"
      }
      if(this.form.tipo1 == "Recessivo" && this.form.tipo2 == "Recessivo"){
        return this.result = "100% - Rec"
      }
      if(this.form.tipo1 == "Recessivo" && this.form.tipo2 == "Dominante"){
        return this.result = "50% - Rec / 50% - Dom"
      }
    },
    onReset(event) {
      event.preventDefault();
      this.form.tipo1 = null;
      this.form.tipo2 = null;
      this.result = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.PaiMae{
  margin-left: 32% !important;
}
.avosPaiMae{
  margin-left: 15% !important;
}
#botoes{
  text-align: center !important;
  margin-top: 5% !important;
}
.divPrincipal{
  background-color: #1f2191;
  margin-top: 2% !important;
}
.formContainer{
  width: 74% !important;
  height: 100% !important;
}
.segundaDiv{
  text-align: center;
  background-color: white;
  border: 15px solid black;
  box-sizing: border-box;
  border-radius: 25px;
}
</style>