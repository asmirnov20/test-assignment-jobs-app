import { PrevIcon } from './icons'

interface Props {
	returnBtn?: boolean
	text: string
}

const Button = ({ returnBtn, text }: Props) => {
	return (
		<button
			className={`hovered my-8 flex items-center justify-center rounded-lg text-center text-xs font-semibold uppercase  md:mx-auto md:my-7
        ${
					returnBtn
						? 'mr-12 h-[50px] w-[213px] bg-[#38456414] md:hidden'
						: 'h-[52px] w-[127px] bg-[#384564] px-4 py-[30px] tracking-wider  text-[#fff]'
				}`}
		>
			{returnBtn ? (
				<div className='flex items-center justify-center gap-5'>
					<PrevIcon />
					{text}
				</div>
			) : (
				<span>{text}</span>
			)}
		</button>
	)
}

export default Button
