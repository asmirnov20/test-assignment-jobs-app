import ReactPaginate from 'react-paginate'
import { NextIcon, PrevIcon } from '../icons'

interface Props {
	handlePageChange: ({ selected }: { selected: number }) => void
	pageCount: number
}

const Pagination = ({ handlePageChange, pageCount }: Props) => {
	return (
		<div className='mt-9 mb-16 grid place-content-center md:mt-6 md:mb-4'>
			<ReactPaginate
				breakLabel='...'
				initialPage={0}
				onPageChange={handlePageChange}
				pageCount={pageCount}
				previousLabel={
					<>
						<PrevIcon />
					</>
				}
				nextLabel={
					<>
						<NextIcon />
					</>
				}
				marginPagesDisplayed={1}
				renderOnZeroPageCount={undefined}
				containerClassName='pagination-container'
				nextLinkClassName='nextStyle'
				pageClassName='pages'
				pageLinkClassName='pageLink'
				activeClassName='activePage'
				activeLinkClassName='activeLink'
				breakClassName='break'
				previousClassName='prevStyle'
			/>
		</div>
	)
}

export default Pagination
