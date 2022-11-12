const getTimeDifference = (startPoint: string, endPoint: string) => {
	const date1 = Date.parse(startPoint)
	const date2 = Date.parse(endPoint)

	const formatter = new Intl.RelativeTimeFormat('en')
	const ranges = {
		years: 3600 * 24 * 365,
		months: 3600 * 24 * 30,
		weeks: 3600 * 24 * 7,
		days: 3600 * 24,
		hours: 3600,
		minutes: 60,
		seconds: 1,
	}

	const secondsAgo = (date1 - date2) / 1000

	let key: keyof typeof ranges
	for (key in ranges) {
		if (ranges[key] <= Math.abs(secondsAgo)) {
			const difference = secondsAgo / ranges[key]
			return formatter.format(Math.round(difference), key)
		}
	}
}

export default getTimeDifference
