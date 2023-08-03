var colorApi = {
    async getColor() {
        const res = await fetch('http://localhost:3001/color/all',{
            method: 'GET',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                
            }
        })
        const result = await res.json();
        return result
    }
}

export default colorApi