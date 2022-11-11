import Heading from '../Heading'
import ContentBox from '../ContentBox'

interface Props {
	employment_type: string[]
	benefits: string[]
}

const AdditionalInfo = ({ employment_type, benefits }: Props) => {
	return (
		<section className='md:order-1'>
			<Heading text='Additional Info' />

			<h3 className='h-3'>Employment type</h3>
			<div className='boxContainer'>
				{employment_type.map(item => (
					<ContentBox item={item} key={item} />
				))}
			</div>

			<h3 className='h-3'>Benefits</h3>
			<div className='boxContainer'>
				{benefits.map(item => (
					<ContentBox item={item} key={item} yellow={true} />
				))}
			</div>
		</section>
	)
}

export default AdditionalInfo
