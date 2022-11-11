import { MapIcon } from '../../icons'
import { formatPhoneNumber, formatAdress } from '../../../lib/formatters'

interface Props {
	job: Job
}

const ContactInfo = ({ job }: Props) => {
	
	const { address, phone, email, name } = job

	return (
		<div className='flex flex-[1_0_40%] flex-col gap-3 pt-7 pb-5 pr-[70px] pl-16 md:flex-[1_0_50%] md:py-8'>
			<div>
				<h4 className='text-xl font-bold leading-6 tracking-tight text-[#E7EAF0] md:text-base md:leading-5 md:tracking-wider'>
					{name}
				</h4>
			</div>
			<div className='flex items-center gap-2 md:py-2'>
				<MapIcon />
				<p className='pt-1 font-secondary text-lg tracking-tighter text-[#E8EBF3] md:font-main md:text-base md:text-[#E7EAF0]'>
					{formatAdress(address)}
				</p>
			</div>
			<div className='font-secondary text-lg tracking-tighter text-[#E8EBF3] md:font-main md:text-base md:text-[#fff] md:opacity-70'>
				<p>{formatPhoneNumber(phone)},</p>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default ContactInfo
