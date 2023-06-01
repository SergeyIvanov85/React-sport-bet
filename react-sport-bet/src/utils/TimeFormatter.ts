export const formatTime = (dateStr: string) =>
    new Date(dateStr).toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit'
    });