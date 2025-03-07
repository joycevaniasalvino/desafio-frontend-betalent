export function formatPhone(phone: string): string {
<<<<<<< HEAD
    const cleaned = phone.replace(/\D/g, "");

    if (cleaned.length !== 13) return "Número inválido";

    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned[4]} ${cleaned.slice(5, 9)}-${cleaned.slice(9)}`;
=======
    const cleaned = phone.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cleaned.length !== 13) return "Número inválido"; // Verifica se tem 13 dígitos

    return `+55 ${cleaned.slice(2, 4)} ${cleaned[4]} ${cleaned.slice(5, 9)}-${cleaned.slice(9)}`;
>>>>>>> dad962a6537c25adf96b8e0aa67889a03f790582
}
