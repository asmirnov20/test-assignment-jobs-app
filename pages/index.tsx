import { GetStaticProps } from 'next'
import Head from 'next/head'
import { JobList, Pagination } from '../components/Home page'
import { getJobsFromApi } from '../api/axios'
import { useEffect, useState } from 'react'

interface Props {
	jobs: Job[]
}

const HomePage = ({ jobs }: Props) => {
	const [currentItems, setCurrentItems] = useState<Job[]>([])
	const [firstItemIndex, setFirstItemIndex] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const pageCount = Math.ceil(jobs.length / itemsPerPage)

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		const lastItemIndex = firstItemIndex + itemsPerPage
		setCurrentItems(jobs.slice(firstItemIndex, lastItemIndex))
	}, [firstItemIndex, itemsPerPage, jobs])

	const handlePageChange = ({ selected }: { selected: number }) => {
		const newFirstIndex = (selected * itemsPerPage) % jobs.length

		setFirstItemIndex(newFirstIndex)
	}

	return (
		<div className='mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between'>
			<Head>
				<title>Jobs App</title>
			</Head>

			<main className=' my-7 flex flex-col gap-2 px-2 md:m-2 md:gap-1'>
				<JobList jobs={currentItems} />
			</main>

			{isMounted && (
				<Pagination handlePageChange={handlePageChange} pageCount={pageCount} />
			)}
		</div>
	)
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
	const jobs: Job[] = await getJobsFromApi()

	return {
		props: {
			jobs,
		},
	}
}
