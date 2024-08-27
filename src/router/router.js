import { createRouter , createWebHashHistory } from "vue-router";
import ConsultarM from "@/pages/ConsultarMateria.vue";
import CrearM from "@/pages/CrearMateria.vue";
import InicioM from "@/pages/InicioMateria.vue";

const routes = [
    {
        path: "/crear",
        name: "crear",
        component: CrearM,
    },
    {
        path: "/consultar",
        name: "consultar",
        component: ConsultarM,
    },
    {
        path: "/",
        name: "inicio",
        component: InicioM,
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

