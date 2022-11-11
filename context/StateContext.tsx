import { createContext, useState, useEffect, useContext } from 'react'

interface Props {
	children: React.ReactNode
}

const Context = createContext<AppContext | null>(null)

export const ContextProvider = ({ children }: Props) => {
	const [screenWidth, setScreenWidth] = useState<number>(0)
	const isTabletOrBigger = screenWidth > 800

	useEffect(() => {
		const updateScreen = () => setScreenWidth(window.innerWidth)
		updateScreen()

		window.addEventListener('resize', updateScreen)
		return () => window.removeEventListener('resize', updateScreen)
	}, [])

	return (
		<Context.Provider
			value={{
				isTabletOrBigger,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)
