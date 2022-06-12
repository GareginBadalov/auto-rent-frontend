import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/auto_rent/?limit=100')
            return response.data.results
        } catch (e) {
            console.log(e);
        }

    }

    static async createCar(brand, model, year, mileage, color, transmission, bodyStyle, price) {
        try {

            const response = await axios.post('http://127.0.0.1:8000/api/auto_rent/', {
                "brand_id": brand,
                "model": model,
                "year": year,
                "mileage": mileage,
                "color": color,
                "transmission": transmission,
                "body_style": bodyStyle,
                "price": price,
            })
                return {
                    "brand_id": response.data.brand_id,
                    "model": response.data.model,
                    "year": response.data.year,
                    "mileage": response.data.mileage,
                    "color": response.data.color,
                    "transmission": response.data.transmission,
                    "body_style": response.data.body_style,
                    "price": response.data.price,
                }
        } catch (e) {
            console.log(e);
        }

    }

    static async changeCar(id, brand, model, year, mileage, color, transmission, bodyStyle, price) {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/auto_rent/${id}/`, {
                "brand_id": brand,
                "model": model,
                "year": year,
                "mileage": mileage,
                "color": color,
                "transmission": transmission,
                "body_style": bodyStyle,
                "price": price,
            })
            return {
                "brand_id": response.data.brand_id,
                "model": response.data.model,
                "year": response.data.year,
                "mileage": response.data.mileage,
                "color": response.data.color,
                "transmission": response.data.transmission,
                "body_style": response.data.body_style,
                "price": response.data.price,
            }
        } catch (e) {
            console.log(e);
        }

    }
    static async deleteCar(id) {
        try {
            return await axios.delete(`http://127.0.0.1:8000/api/auto_rent/${id}/`)
        } catch (e) {
            console.log(e);
        }

    }
}