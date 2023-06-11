import axios from 'axios'
import { ICoffe } from '../modals'


export const services = {
    async getAll(categoryId: number) {
        const response = await axios.get<ICoffe[]>(`http://localhost:4200/coffe?${categoryId > 0 ? `category=${categoryId}` : ''}`)

        return response.data
    },

    async getAllAny() {
        const response = await axios.get<ICoffe[]>(`http://localhost:4200/coffe`)

        return response.data
    },

    async getById(id: string) {
        const response = await axios.get<ICoffe[]>(`http://localhost:4200/coffe?id=${id}`)

        return response.data[0]
    },
}