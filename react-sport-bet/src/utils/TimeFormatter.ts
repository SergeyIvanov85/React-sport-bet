export const formatTime = (date: Date) =>
    date.toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit'
    });