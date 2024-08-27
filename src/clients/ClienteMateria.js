import axios from "axios";

const obtenerPorCodigo = async (codigo) => {
    const data = await axios.get(`http://localhost:8082/API/v1.0/Matricula/materias/${codigo}`)
        .then((r) => r.data);
    return data;
}

const obtenerPorURL = async (url) => {
    const data = await axios.get(`${url}`)
        .then((r) => r.data);
    return data;
}

const agregar = async (materia) => {
    const data = await axios.post(`http://localhost:8082/API/v1.0/Matricula/materias`, materia)
        .then((r) => r.data);
    return data;
}

const actualizar = async (codigo, materia) => {
    const data = await axios.put(`http://localhost:8082/API/v1.0/Matricula/materias/${codigo}`, materia)
        .then((r) => r.data);
    return data;
}

const listar = async () => {
    const data = await axios.get(`http://localhost:8082/API/v1.0/Matricula/materias`)
        .then((r) => r.data);
    return data;
}


const eliminar = async (codigo) => {
    const data = await axios.delete(`http://localhost:8082/API/v1.0/Matricula/materias/${codigo}`)
        .then((r) => r.data);
    return data;
}

export const eliminarFachada = async (codigo) => {
    return await eliminar(codigo)
}

export const listarFachada = async () => {
    return await listar();
}

export const actualizarFachada = async (codigo, materia) => {
    return await actualizar(codigo, materia);
}

export const agregarFachada = async (materia) => {  
    return await agregar(materia);
}

export const obtenerPorURLFachada = async (url) => {
    return await obtenerPorURL(url);
}

export const obtenerPorCodigoFachada = async (codigo) => {
    return await obtenerPorCodigo(codigo);
}


