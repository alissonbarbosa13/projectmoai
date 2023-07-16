import { api } from "../libs/axios";

export function getNotas(){
    return api.get(`/`,{
        params: {}
    })
}