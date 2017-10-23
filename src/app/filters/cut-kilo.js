export default function(val) {
    if (typeof val !== 'string') val += '';
    return val.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g, ' ');
}