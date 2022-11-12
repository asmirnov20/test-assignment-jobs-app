import getTimeDifference from '../../../lib/GetTimeDifference.'
import { formatSalary } from '../../../lib/formatters'

interface Props {
	job: Job
}

const Overview = ({ job }: Props) => {
	const { title, salary, createdAt, updatedAt } = job

	const timeAgo = getTimeDifference(createdAt, updatedAt)

	return (
		<section className='mt-8 flex flex-wrap justify-between gap-x-16 md:my-3 xs:gap-x-0'>
			<h2 className='mt-2 flex flex-[1_1_65%] text-2xl font-bold tracking-tight md:flex-[1_0_100%]'>
				{title}
			</h2>

			<div className='flex flex-[0_1_170px] flex-col items-end justify-center md:order-1'>
				<h3 className='mt-1 text-xl font-bold leading-6 tracking-tighter '>
					{formatSalary(salary)}
				</h3>
				<p className='text-lg leading-6 tracking-tight text-[#38415dd1] md:-order-1'>
					Brutto, per year
				</p>
			</div>

			<p className='mb-2 self-center font-secondary text-lg leading-6 tracking-tight text-[#38415d99] md:font-main md:text-[13px] md:font-light md:tracking-wide'>
				Posted {timeAgo}
			</p>
		</section>
	)
}

export default Overview
