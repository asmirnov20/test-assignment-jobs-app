import Link from 'next/link'
import { Button } from '../components'

const ErrorPage = () => {
	return (
		<div className='bg-wheat grid h-screen place-content-center text-3xl font-bold text-[#a35c0b]'>
			<span> Ooops... An Error Occured :(</span>
			<div className='flex justify-center'>
				<Link href='/'>
					<Button text='Return Home' />
				</Link>
			</div>
		</div>
	)
}

export default ErrorPage
