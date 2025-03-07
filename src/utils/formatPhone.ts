export function formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, "");

    if (cleaned.length !== 13) return "Número inválido";

    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned[4]} ${cleaned.slice(5, 9)}-${cleaned.slice(9)}`;
}
