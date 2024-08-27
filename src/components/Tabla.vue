<template>
  <div class="container">
    <div class="mns" v-if="mostrar">
      <h1>El producto se elimino</h1>
      <h3>con exito</h3>
      <button @click="ok">SIGUIENTE</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Accion1</th>
          <th>Accion2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="materia in materias" :key="materia.codigo">
          <td>{{ materia.codigo }}</td>
          <td>{{ materia.nombre }}</td>
          <td>
            <button @click="obtener(materia.links[0].href)">Actualizar</button>
          </td>
          <td><button @click="elimino(materia.codigo)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  obtenerPorURLFachada,
  eliminarFachada,
} from "@/clients/ClienteMateria";

export default {
  props: {
    materias: { type: Array },
  },

  data() {
    return {
      materia: null,
      mostrar: false,
    };
  },

  methods: {
    async obtener(url) {
      console.log(url);
      this.materia = await obtenerPorURLFachada(url);
      this.$emit("materia", this.materia);
    },

    async elimino(codigo) {
      console.log(codigo);
      await eliminarFachada(codigo);
      this.mostrar = true;
    },
    ok() {
      this.$emit("elimino", true);
      this.mostrar = false;
    },
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th, .table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}

.table tr:nth-child(even) {
  background-color: #f9f9f9;
}




</style>