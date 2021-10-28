<template>
  <div class="divPrincipal">
    <b-container class="formContainer">
      <div class="segundaDiv">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <h2 style="text-align: center; margin-bottom: 3% !important">Selecione a tonalidade dos olhos dos seus antepassados</h2>
          <b-container class="avosPaiMae">
            <b-row>
              <b-col sm="2">
                <b-form-group id="input-group-3" label="Avô (Pai)" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tipo1"
                    :options="tipos1"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="2">
                <b-form-group id="input-group-3" label="Avó (Pai)" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tipo2"
                    :options="tipos2"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="2">
                <b-form-group id="input-group-3" label="Avô (Mãe)" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tipo3"
                    :options="tipos3"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="2">
                <b-form-group id="input-group-3" label="Avó (Mãe)" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tipo4"
                    :options="tipos4"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
          <hr>
          <b-container class="PaiMae">
            <b-row>
              <b-col sm="2">
                <b-form-group id="input-group-3" label="Pai" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tipo5"
                    :options="tipos5"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="2">
                <b-form-group id="input-group-3" label="Mãe" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tipo6"
                    :options="tipos6"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
          <div id="botoes">
            <b-button type="submit" variant="primary">Calcular</b-button>
            <b-button type="reset" variant="danger">Limpar campos</b-button>
          </div>
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tipo1: null,
        tipo2: null,
        tipo3: null,
        tipo4: null,
        tipo5: null,
        tipo6: null,
      },
      tipos1: [
        { text: "Selecione um", value: null },
        "Claro",
        "Escuro",
      ],
      tipos2: [
        { text: "Selecione um", value: null },
        "Claro",
        "Escuro",
      ],
      tipos3: [
        { text: "Selecione um", value: null },
        "Claro",
        "Escuro",
      ],
      tipos4: [
        { text: "Selecione um", value: null },
        "Claro",
        "Escuro",
      ],
      tipos5: [
        { text: "Selecione um", value: null },
        "Claro",
        "Escuro",
      ],
      tipos6: [
        { text: "Selecione um", value: null },
        "Claro",
        "Escuro",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.tipo1 = null;
      this.form.tipo2 = null;
      this.form.tipo3 = null;
      this.form.tipo4 = null;
      this.form.tipo5 = null;
      this.form.tipo6 = null;
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