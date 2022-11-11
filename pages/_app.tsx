import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context/StateContext'
import { AnimatePresence, motion } from 'framer-motion'
import { pageTransition } from '../lib/animations'

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={router.route}
				initial='initial'
				animate='animate'
				exit='exit'
				variants={pageTransition}
			>
				<ContextProvider>
					<Component {...pageProps} />
				</ContextProvider>
			</motion.div>
		</AnimatePresence>
	)
}
