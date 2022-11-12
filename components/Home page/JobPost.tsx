import Image from 'next/image'
import { BookmarkIcon, MapIcon, RatingIcon } from '../icons'
import Link from 'next/link'
import getTimeDifference from '../../lib/GetTimeDifference.'
import { formatAdress } from '../../lib/formatters'

interface Props {
	job: Job
}

const JobPost = ({ job }: Props) => {
	const { createdAt, name, pictures, title, id, address, updatedAt } = job
	const timeAgo = getTimeDifference(createdAt, updatedAt)

	return (
		<article className='bg-white rounded-lg shadow-custom'>
			<div className='flex w-full gap-7 pt-6 pb-5 pr-3 pl-4 md:gap-5'>
				<div className='relative h-[85px] w-[85px] overflow-hidden rounded-full md:h-[66px] md:w-[66px] md:self-center'>
					<Image src={pictures[0]} fill alt={name} className='object-cover' />
				</div>

				<div className='flex flex-1 gap-8 md:flex-col-reverse md:gap-4'>
					<div className='flex flex-1 flex-col justify-center'>
						<Link href={`/${id}`}>
							<h3 className=' text-lg font-bold leading-6 tracking-tighter'>
								{title}
							</h3>
						</Link>
						<p className='my-2 leading-6 tracking-wide text-[#878D9D]'>
							{name}
						</p>
						<div className='flex items-center'>
							<MapIcon />
							<p className='pl-2 leading-6 tracking-wide text-[#878D9D] '>
								{formatAdress(address)}
							</p>
						</div>
					</div>

					<div className='flex  gap-8 md:justify-between'>
						<RatingIcon className='h-[18px] w-24 self-center md:h-[10px] md:w-[54px]' />

						<div className='flex flex-col justify-between'>
							<BookmarkIcon className='h-8 w-8 cursor-pointer self-end duration-300 hover:scale-110 md:hidden' />
							<p className='text-md whitespace-nowrap font-light leading-4 tracking-wide text-[#878D9D] '>
								Updated {timeAgo}
							</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default JobPost
