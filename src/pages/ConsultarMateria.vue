<template>

<div>
    <button @click="consultar">CONSULTAR</button>
    <TablaVue
    :materias="materias"
    @materia = obtener($event)
    @elimino = relistar($event)
    />
    <FormularioVue
    :materia="materia"
    :mostrarBotonActualizar="true"
    :mostrarBotonGuardar="false"
    @loactualizar= relistar($event)
    />

</div>
  
</template>

<script>
import TablaVue from '@/components/Tabla.vue';
import FormularioVue from '@/components/Formulario.vue';
import {listarFachada} from "@/clients/ClienteMateria";

export default {

    components:{
        TablaVue,
        FormularioVue
    },

    data(){
        return{
            materias: [],
            materia:null
        }
    },

    methods:{
        async consultar(){
            this.materias = await listarFachada();
        },

        obtener(materia){
            this.materia = materia;
            console.log(this.materia);
        },

        relistar(data){
            if(data){
                this.consultar();
            }
        }

        
    }


}
</script>

<style>

</style>