import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { getJobsFromApi } from '../api/axios'
import { Error, Loading, Button } from '../components'
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

const DetailsPage = ({ job, hasError }: Props) => {
	const router = useRouter()
	const { employment_type, benefits, description, pictures } = job
	const { isTabletOrBigger } = useStateContext() as AppContext

	if (hasError) {
		<Error />
	}

	if (router.isFallback) {
		<Loading />
	}

	return (
		<div className='bg-white relative mx-auto mb-[250px] flex max-w-[1602px] justify-between py-6 px-24 md:mb-4 lg:flex-col lg:items-center lg:px-8'>
			<div className='max-w-[774px]'>
				<PageHeader isTabletOrBigger={isTabletOrBigger} />
				<article>
					{isTabletOrBigger && <Button />}

					<Overview job={job} />

					<JobDescription description={description} />

					<Button />
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

				<div className='h-[436px] w-[402px] overflow-hidden rounded-lg bg-[#202336] md:w-[372px] md:self-center'>
					<ContactInfo job={job} />
					<Map job={job} />
				</div>
			</section>

			<div className='absolute -bottom-[10%] left-[1%] lg:-bottom-[7%]'>
				<Link href='/'>
					<Button returnBtn={true} />
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

	if (!foundItem) {
		return {
			props: { hasError: true },
		}
	}

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
		fallback: true,
	}
}
