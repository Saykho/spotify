import axios from "axios";
import { ValueStorageService } from "../value-storage/value-storage-service";
import { ValueStorageKeys } from "../value-storage/value-storage-keys";
import { Pages } from "../../consts/pages";
import { history } from "../../history";

const instance = axios.create({
    baseURL: "https://api.spotify.com/v1/"
});

instance.interceptors.request.use(config => {
    const token = ValueStorageService.getItem(ValueStorageKeys.Token);
    config.headers!['Authorization'] = 'Bearer ' + token;
    return config;
});

instance.interceptors.response.use(
    response => {
        return response;
    }, error => {
        const status = error.response.status;
        const data = error.response.data.error;

        if ([400, 404].includes(status)) {
           alert(data);
        } else if ([401, 403].includes(status)) {
            history.push(Pages.login);
        } else {
            alert("Servet is not available...");
        }
        return Promise.reject(error);
    }
);

class HttpClientImpl {
    post<T>(url: string, data: any): Promise<T> {
        return instance.post<T>(url, data).then(x => x.data);
    }

    put<T>(url: string, data: any): Promise<T> {
        return instance.put<T>(url, data).then(x => x.data);
    }

    get<T>(url: string): Promise<T> {
        return instance.get<T>(url).then(x => x.data);
    }

    delete<T>(url: string, data: any): Promise<T> {
        return instance.delete<T>(url, {data}).then(x => x.data);
    }
}

export const HttpClient = new HttpClientImpl();