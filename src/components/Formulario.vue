<template>
  <div class="container">
    <div class="mns" v-if="mostrarMensajeDeexito">
      <h1>El producto se guardo</h1>
      <h3>con exito</h3>
      <button @click="limpiar">SIGUIENTE</button>
    </div>
    <div class="form-group">
      <label for="codigo">Codigo</label>
      <input
        type="text"
        class="form-control"
        v-model="codigo"
        :readonly="noBloquear || mostrarBotonActualizar"
      />
    </div>
    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input
        type="text"
        class="form-control"
        v-model="nombre"
        :readonly="noBloquear"
      />
    </div>
    <div class="form-group">
      <label for="descripcion">Descripcion</label>
      <input
        type="text"
        class="form-control"
        v-model="descripcion"
        :readonly="noBloquear"
      />
    </div>
    <div class="form-group">
      <label for="creditos">Creditos</label>
      <input
        type="number"
        class="form-control"
        v-model="creditos"
        :readonly="noBloquear"
      />
    </div>
    <div class="botones">
      <button
        @click="guardar"
        v-if="mostrarBotonGuardar || ocultarBotonGuardar"
      >
        GUARDAR
      </button>
      <button v-if="mostrarBotonActualizar" @click="actualizar()">
        ACTUALIZAR
      </button>
    </div>
  </div>
</template>

<script>
import { agregarFachada, actualizarFachada } from "@/clients/ClienteMateria";
export default {
  data() {
    return {
      codigo: null,
      nombre: null,
      descripcion: null,
      creditos: 0,
      noBloquear: false,
      mostrarMensajeDeexito: false,
      ocultarBotonGuardar: false,
    };
  },
  props: {
    materia: {
      type: Object,
      required: false,
    },
    mostrarBotonActualizar: {
      type: Boolean,
      required: false,
    },
    mostrarBotonGuardar: {
      type: Boolean,
      required: false,
    },
  },

  methods: {
    async guardar() {
      let materia = {
        codigo: this.codigo,
        nombre: this.nombre,
        descripcion: this.descripcion,
        creditos: this.creditos,
      };
      await agregarFachada(materia);
      this.noBloquear = true;
      this.mostrarMensajeDeexito = true;
      this.ocultarBotonGuardar = false;
    },
    limpiar() {
      this.codigo = null;
      this.nombre = null;
      this.descripcion = null;
      this.creditos = 0;
      this.noBloquear = false;
      this.mostrarMensajeDeexito = false;
    },

    async actualizar() {
      let materia = {
        codigo: this.codigo,
        nombre: this.nombre,
        descripcion: this.descripcion,
        creditos: this.creditos,
      };
      await actualizarFachada(this.codigo, materia);
      this.$emit("loactualizar", true);
      this.limpiar();
    },
  },
  watch: {
    materia: {
      handler() {
        this.codigo = this.materia.codigo;
        this.nombre = this.materia.nombre;
        this.descripcion = this.materia.descripcion;
        this.creditos = this.materia.creditos;
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.container {
  width: 30%;
  padding: auto;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.mns {
  text-align: center;
  margin-bottom: 20px;
}

.mns h1 {
  color: #4caf50;
}

.mns h3 {
  color: #8bc34a;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
}

.form-group input {
  width: 100%;
  padding: 5px; /* Reduced padding for smaller inputs */
  border: 1px solid #ddd;
  border-radius: 4px;
}

.botones {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #1976d2;
}
</style>