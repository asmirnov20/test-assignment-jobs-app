interface Props {
	text: string
}

const Heading = ({ text }: Props) => {
	return (
		<>
			<h1 className='relative ml-2 text-3xl font-bold tracking-wide md:ml-0'>
				{text}
				<span className='absolute -bottom-2 right-0 h-[1px] w-full bg-[#3A4562] opacity-[0.13]' />
			</h1>
		</>
	)
}

export default Heading
