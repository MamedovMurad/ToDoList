import axios, { AxiosError, AxiosResponse } from "axios";
import { IPost } from "../Model/post";




axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";



axios.interceptors.response.use(
    async (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { data, status, statusText } = error.response!;
      switch (status) {
        case 400:
          console.log(data);
          if (typeof data === "string") {
            console.log(statusText);
          }
  
          if (data.errors) {
            const modalStateErrors = [];
            for (const k in data.errors)
              if (data.errors[k]) {
                modalStateErrors.push(data.errors[k]);
              }
            throw modalStateErrors.flat();
          }
          break;
  
        case 404:
          console.log(data);
  
          break;
        case 500:
          console.log(data);
  
          break;
      }
      return Promise.reject(error);
    }
  );



  const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};


const Products = {
    list: () => requests.get<IPost[]>(`/posts`)
    }




      const agent = {
        Products,
      };
      
      export default agent;