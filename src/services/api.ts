const BASE_URL = "http://localhost:3000";

export const fetchData = async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`Erro ao buscar ${endpoint}`);
    }

    return response.json();
};
