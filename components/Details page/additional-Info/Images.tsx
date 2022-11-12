import Heading from '../Heading'
import Image from 'next/image'

interface Props {
	pictures: string[]
}

const Images = ({ pictures }: Props) => {
	return (
		<section className='relative'>
			<Heading text='Attached Images' />

			<div className='mt-9 flex gap-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:justify-center flex-wrap'>
				{pictures.map(item => (
					<div className='relative h-[300px] w-[200px] '>
						<Image
							src={item}
							alt='company pictures'
							fill
							className='md:height-auto block rounded-lg object-cover md:w-full'
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default Images
