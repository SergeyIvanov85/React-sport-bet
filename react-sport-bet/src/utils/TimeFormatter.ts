export const formatTime = (date: Date) => (
    date.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit'
    })
);