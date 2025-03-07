export function formatDate(dateString: string): string {
    const date = new Date(dateString);
<<<<<<< HEAD
    if (isNaN(date.getTime())) return "Data inválida";
=======
    if (isNaN(date.getTime())) return "Data inválida"; // Evita erro caso o formato esteja errado
>>>>>>> dad962a6537c25adf96b8e0aa67889a03f790582

    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}
