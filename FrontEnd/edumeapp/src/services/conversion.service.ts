import http from "../http-common";

class phoneService {
    get(value: string) {
        return http.get<any>(`/convert/${value}`)
    }
}
export default new phoneService();