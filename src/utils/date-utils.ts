export const postDateFormat = (date: Date) =>
    date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
