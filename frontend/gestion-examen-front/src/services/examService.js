import axios from "axios"


const API_URL = 'http://localhost:8080/api/exam'


const ExamService = {
    save: async (data) => {
        try {
            if (data?.presence === false) {
                return null;
            }
            const response = await axios.post(`${API_URL}/save`, data);
            console.info(response)
            return response.data;
        } catch (error) {
            // Handle error
            console.error('Error saving data:', error);
            throw error;
        }
    },

    update: async () => {
        try {
            const response = await axios.get(`${API_URL}/`);
            return response.data;
        } catch (error) {
            // Handle error
            console.error('Error updating data:', error);
            throw error;
        }
    },

    remove: async () => {
        try {
            const response = await axios.get(`${API_URL}/`);
            return response.data;
        } catch (error) {
            // Handle error
            console.error('Error removing data:', error);
            throw error;
        }
    },

    getAll: async () => {
        try {
            const response = await axios.get(`${API_URL}/`);
            return response.data;
        } catch (error) {
            // Handle error
            console.error('Error getting all data:', error);
            throw error;
        }
    },
};

export default ExamService;