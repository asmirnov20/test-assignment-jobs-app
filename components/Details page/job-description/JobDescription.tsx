import { getDescriptionContent, formatForList } from '../../../lib/formatters'
import { BulletIcon } from '../../icons'

interface Props {
	description: string
}

const JobDescription = ({ description }: Props) => {
	const { about, responsibilities, compensation } =
		getDescriptionContent(description)

	return (
		<section>
			<p className='p-text md:mb-12'>{about}</p>

			<h3 className='h-text'>Responsibilities</h3>
			<p className='p-text'>{responsibilities}</p>

			<h3 className='h-text'>Compenstaion and Benefits</h3>
			<ul className='list-outside'>
				{formatForList(compensation).map(item => (
					<li className='p-text relative m-0 font-normal ' key={item}>
						<BulletIcon className='absolute top-[30%] -left-5 min-h-[9px] min-w-[9px] md:static md:inline' />
						<span className='md:ml-8'>{item}</span>
					</li>
				))}
			</ul>
		</section>
	)
}

export default JobDescription
