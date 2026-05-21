import api from "@/lib/axios";


 
export async function checkBackendApi() {
    const response = await api.get("/api/health")

    return response.data
}