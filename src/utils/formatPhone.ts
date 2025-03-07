export function formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cleaned.length !== 13) return "Número inválido"; // Verifica se tem 13 dígitos

    return `+55 ${cleaned.slice(2, 4)} ${cleaned[4]} ${cleaned.slice(5, 9)}-${cleaned.slice(9)}`;
}
