export default function parseDate(date, short) {
    if (date) return fecha.format(Date.parse(date), short ? 'DD MMM YYYY' : 'DD MMM YYYY HH:mm:ss')
    return 'Не определено'
}