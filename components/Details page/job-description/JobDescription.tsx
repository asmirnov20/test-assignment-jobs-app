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
			<ul>
				{formatForList(compensation).map(item => (
					<li
						className='p-text relative m-0 font-normal md:indent-8'
						key={item}
					>
						<BulletIcon className='absolute top-[30%] -left-5 md:left-0' />
						{item}
					</li>
				))}
			</ul>
		</section>
	)
}

export default JobDescription
