export default function(val, num = 0) {
    if (val < 1e3) {
        return val.toFixed(num);
    } else if (val >= 1e3 && val < 1e6) {
        return (val / 1e3).toFixed(num) + 'k';
    } else if (val >= 1e6) {
        return (val / 1e6).toFixed(num) + 'M';
    }
}