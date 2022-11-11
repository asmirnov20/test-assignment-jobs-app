import JobPost from './JobPost'

interface Props {
	jobs: Job[]
}

const JobList = ({ jobs }: Props) => {
	return (
		<>
			{jobs?.map(job => (
				<JobPost key={job.id} job={job} />
			))}
		</>
	)
}

export default JobList
