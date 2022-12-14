import { GetStaticProps, GetStaticPaths } from 'next'
import { getJobsFromApi } from '../api/axios'
import { Button } from '../components'
import {
	JobDescription,
	AdditionalInfo,
	Overview,
	PageHeader,
	Images,
	Heading,
	Map,
	ContactInfo,
} from '../components/Details page'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'

interface Props {
	job: Job
	hasError: boolean
}

const DetailsPage = ({ job }: Props) => {
	const { employment_type, benefits, description, pictures, location } = job
	const { isTabletOrBigger } = useStateContext() as AppContext

	return (
		<div className='relative mx-auto flex max-w-[1602px] justify-between bg-[#fff] py-6 px-16 pb-52  md:px-4 md:pb-7 lg:flex-col lg:items-center'>
			<div className='max-w-[774px]'>
				<PageHeader isTabletOrBigger={isTabletOrBigger} />
				<article>
					{isTabletOrBigger && <Button text='Apply Now' />}

					<Overview job={job} />

					<JobDescription description={description} />

					<Button text='Apply Now' />
				</article>

				<article className='mt-[84px] flex flex-col gap-[84px] md:my-[136px] md:gap-16 lg:mb-14'>
					<AdditionalInfo
						employment_type={employment_type}
						benefits={benefits}
					/>
					<Images pictures={pictures} />
				</article>
			</div>

			<section className='flex flex-col md:max-w-full lg:w-[774px]'>
				<div className='mb-10 hidden md:w-full lg:block'>
					<Heading text='Contacts' />
				</div>

				<div className='h-[436px] w-[402px] overflow-hidden rounded-lg bg-[#202336] xs:max-w-[320px] md:w-[372px] md:self-center'>
					<ContactInfo job={job} />
					<Map location={location} />
				</div>
			</section>

			<div className='absolute bottom-[2%] left-[1%] lg:bottom-[3%]'>
				<Link href='/'>
					<Button returnBtn={true} text='Return to Job Board' />
				</Link>
			</div>
		</div>
	)
}

export default DetailsPage

export const getStaticProps: GetStaticProps = async context => {
	const itemId = context.params?.slug
	const data: Job[] = await getJobsFromApi()
	const foundItem = data.find((job: Job) => job.id === itemId)

	return {
		props: {
			job: foundItem,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const data: Job[] = await getJobsFromApi()
	const paths = data.map(item => ({
		params: {
			slug: item.id,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}
