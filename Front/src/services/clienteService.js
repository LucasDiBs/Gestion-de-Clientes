import axios from "axios";

const CLIENTE_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes"


class clienteService {

    getAllClientes() {

        return axios.get(CLIENTE_BASE_REST_API_URL);

    }
    saveCliente(cliente) {

        return axios.post(CLIENTE_BASE_REST_API_URL, cliente);

    }

    deleteCliente(clienteId) {

        return axios.delete(CLIENTE_BASE_REST_API_URL + '/' + clienteId);

    }

    getClienteById(clienteId){

        return axios.get(CLIENTE_BASE_REST_API_URL + '/' + clienteId);

    }

    updateCliente(clienteId, cliente) {

        return axios.put(CLIENTE_BASE_REST_API_URL+ '/' + clienteId, cliente);

    }

}

export default new clienteService();