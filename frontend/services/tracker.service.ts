import api from "@/lib/axios";


// GET API
export async function getTracker() {
    const response = await api.get("/api/tracker/allTracker")

    return response.data;
}

// POST API
export async function createTracker(data : any) {
     
    const response = await api.post("/api/tracker/create",data)

    return response.data;
}

// DELETE API
export async function deleteTracker(id : string) {
    
    const response = await api.delete(`/api/tracker/delete/${id}`)

    return response.data;
}

export async function editTracker(trackerId:string ,data : Partial ) {
    const response = await api.patch(`/api/tracker/edit/${trackerId}`,data)

    return response.data;
}