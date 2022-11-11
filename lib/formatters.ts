export const getDescriptionContent = (data: string) => {
	// extracting valuable content into an array
	const formattedArray: string[] = data
		.replace(/\n/g, '%')
		.split('%')
		.map(line => line.trim())
		.filter(item => item.length > 0)

	// making key-value pairs out of an array
	const makeObject = (arr: string[]) => {
		const keys = ['about', 'responsibilities', 'compensation']
		let values: string[] = []
		arr.forEach((item, index) => (index % 2 == 0 ? values.push(item) : null))
		const object = Object.fromEntries(
			values.map((value, index) => [keys[index], value])
		)

		return object
	}

	return makeObject(formattedArray)
}

export const formatForList = (value: string) => {
	return value
		.split('.')
		.slice(0, -1)
		.map(item => item.trim())
}

export const formatSalary = (value: string) => {
	const euroSign = '€ '
	const numeric = value
		.split('-')
		.map(item => item.replace(/k/g, ' 000'))
		.join('--')

	return euroSign + numeric
}

export const formatPhoneNumber = (phoneNumber: string) => {
	return phoneNumber.replace(/(\d{1})(\d{2})(\d{4})(\d{4})/, '$1 ($2) $3-$4')
}

export const formatAdress = (address: string) => {
	const [streetNumber, city, streetName, streetWord] = address.split(' ')
	const newAddress = `${city}, ${streetName} ${streetWord} ${streetNumber}`
	return newAddress
}
