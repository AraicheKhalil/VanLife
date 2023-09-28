
export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : `/api/vans/`
    const resp = await fetch(url)
    if (!resp.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: resp.statusText,
            status: resp.status
        }
    }
    const data = await resp.json()
    return data.vans
}

export async function getHostVans(id){
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const resp = await fetch(url)
    if (!resp.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: resp.statusText,
            status: resp.status
        }
    }
    const data = await resp.json()
    return data.vans
}



export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}


