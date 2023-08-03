var categoryApi = {
    async getCategoryItems() {
        const res = await fetch('https://vysingsun-api.onrender.com/category/all',{
            method: 'GET',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                
            }
        })
        const result = await res.json();
        return result
    },
    async getCategoryItem() {
        const res = await fetch('https://vysingsun-api.onrender.com/category/categorized-items',{
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

export default categoryApi