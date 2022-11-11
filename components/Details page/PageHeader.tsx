import { BookmarkIcon, ShareIcon, StarIcon } from '../icons'
import Heading from './Heading'

interface Props {
	isTabletOrBigger: boolean
}

const PageHeader = ({ isTabletOrBigger }: Props) => {
	return (
		<header className='relative mb-12 flex justify-between md:mb-6 md:flex-col md:gap-y-10'>
			<Heading text='Job Details' />
			<span className='absolute -bottom-2 right-0 h-[1px] w-full bg-[#3A4562] opacity-[0.13] md:hidden' />

			<section className='flex gap-8'>
				<div className='flex items-center justify-start gap-2 duration-300 hover:scale-105 hover:cursor-pointer'>
					{isTabletOrBigger ? <BookmarkIcon /> : <StarIcon />}

					<p className='font-secondary text-lg leading-6 tracking-tight '>
						Save to my list
					</p>
				</div>
				<div className='flex items-center justify-center duration-300 hover:scale-105 hover:cursor-pointer'>
					<ShareIcon />
					<p className='ml-3 font-secondary text-lg tracking-tight '>Share</p>
				</div>
			</section>
		</header>
	)
}

export default PageHeader
