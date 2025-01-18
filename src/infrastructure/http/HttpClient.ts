import { CURRENT_BASE_URL } from "../../constants/constants";
import axios, { AxiosInstance, AxiosResponse } from "axios";



export abstract class HttpClient {
  protected instance: AxiosInstance | undefined;

  protected createInstance(): AxiosInstance {
    this.instance = axios.create({
      baseURL: CURRENT_BASE_URL,
    });

    this.initializeInterceptors();
    return this.instance;
  }

  private initializeInterceptors = () => {
    // Intercept response to handle success and error
    this.instance?.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );

    // Intercept request to add token and dynamically set Content-Type
    this.instance?.interceptors.request.use((config: any) => {
      const token = localStorage.getItem("jwtToken");

      // Add Authorization header if token exists
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      // Dynamically set Content-Type header
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] = "application/json";
      }

      return config;
    });
  };

  private handleResponse = (response: AxiosResponse) => {
    return response;
  };

  private handleError = (error: any) => {
    console.error("API Error:", error);

    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        message: error.response.data?.message || "Something went wrong",
        errors: error.response.data?.errors || null,
      });
    }

    return Promise.reject({
      status: 500,
      message: "Network error, please try again later",
    });
  };
}

/*import axios, { AxiosInstance, AxiosResponse } from "axios";
const CURRENT_BASE_URL = "https://localhost:7133/api/Employee";

export abstract class HttpClient {
  protected instance: AxiosInstance | undefined;

  protected createInstance(): AxiosInstance {
    this.instance = axios.create({
      baseURL: CURRENT_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.initializeResponseInterceptor();
    return this.instance;
  }

  private initializeResponseInterceptor = () => {
    this.instance?.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );

    this.instance?.interceptors.request.use((config: any) => {
      const token = localStorage.getItem("jwtToken");

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    });
  };

  private handleResponse = (response: AxiosResponse) => response;

  private handleError = (error: any) => {
    console.error("API Error:", error);

    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        message: error.response.data?.message || "Something went wrong",
        errors: error.response.data?.errors || null,
      });
    }

    return Promise.reject({
      status: 500,
      message: "Network error, please try again later",
    });
  };

 
}
*/