import { fetchData } from "./api";

export interface Funcionario {
    id: number;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
}
export const getFuncionarios = async (): Promise<Funcionario[]> => {
    return fetchData<Funcionario[]>("/employees");
};
