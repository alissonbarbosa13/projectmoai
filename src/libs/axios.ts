import axios from "axios";
export const api = axios.create ({
    baseURL: "https://managersaas.tecnospeed.com.br:8081/ManagerAPIWeb/nfce/consulta"
})