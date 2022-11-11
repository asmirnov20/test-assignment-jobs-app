import { GetStaticProps } from 'next'
import Head from 'next/head'
import JobList from '../components/Home page/JobList'
import { getJobsFromApi } from '../api/axios'
import { useEffect, useState } from 'react'
import Pagination from '../components/Home page/Pagination'
import { useStateContext } from '../context/StateContext'

interface Props {
	jobs: Job[]
}

const HomePage = ({ jobs }: Props) => {
	const [currentItems, setCurrentItems] = useState<Job[]>([])
	const [firstItemIndex, setFirstItemIndex] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const pageCount = 2
	const [isMounted, setIsMounted] = useState(false)
	const { isTabletOrBigger } = useStateContext() as AppContext

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
		<div>
			<Head>
				<title>Jobs App</title>
			</Head>

			<main className='mx-auto my-[30px] flex max-w-[1400px] flex-col gap-2 px-2 md:m-2 md:gap-1'>
				<JobList jobs={currentItems} />
			</main>

			{isMounted && isTabletOrBigger && (
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
