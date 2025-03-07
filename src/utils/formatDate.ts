export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Data inválida"; // Evita erro caso o formato esteja errado

    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}
