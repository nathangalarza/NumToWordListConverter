import http from "../http-common";
 
class conversionService {

    get(value: string){
        return http.get<any>(`/convert/${value}`)
    }

}

export default new conversionService();