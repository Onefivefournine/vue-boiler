const countriesMap = {
    RU: 'Россия',
    KZ: 'Казахстан',
    UA: 'Украина',
    BY: 'Белоруссия',
}

export default function mapByCountry(countryCode) {
    if (!countryCode) return 'Нет страны'
    return countriesMap[countryCode] || countryCode
}