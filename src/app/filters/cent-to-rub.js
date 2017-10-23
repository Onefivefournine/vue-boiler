export default function(cents, fixDigits = 1) {
    if (typeof cents !== 'number') return cents + ' ₽';
    return (cents / 100).toFixed(fixDigits) + ' ₽';
}