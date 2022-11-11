import { TailSpin } from 'react-loader-spinner'

const Spinner = () => {
	return (
		<div className='absolute right-[40%] top-14'>
			<TailSpin
				color='#00BFFF'
				height={80}
				width={80}
				visible
			/>
		</div>
	)
}

export default Spinner
