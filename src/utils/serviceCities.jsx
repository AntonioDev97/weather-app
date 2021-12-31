const cities = [
    { city: 'Tlaxcala', country: 'Mexico', countryCode: 'MX' },
    { city: 'Guadalajara', country: 'Mexico', countryCode: 'MX' },
    { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'  },
    { city: 'Washington', country: 'United States', countryCode: 'US'  },
]

export const getCities = () => cities;
export const getCountryNameByCode = (code) => cities.find(item => item.countryCode === code).country; 