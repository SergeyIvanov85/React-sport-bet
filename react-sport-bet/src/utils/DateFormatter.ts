export const formatDate = (date: Date) => {
    const month = date.toLocaleString('en', { month: 'long'});
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}