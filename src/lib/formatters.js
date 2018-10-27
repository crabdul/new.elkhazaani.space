import { format } from 'date-fns';

// eslint-disable-next-line
export const formatDate = (date) => format(date, 'D MMM, YYYY');

export const formatDateLong = (date) => {
    const a = date.split('/');
    const d = `${a[1]}/${a[0]}/${a[2]}`;
    return format(d, 'D MMMM, YYYY');
}