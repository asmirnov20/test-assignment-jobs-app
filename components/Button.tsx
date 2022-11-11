import { PrevIcon } from "./icons"

interface Props {
    returnBtn?: boolean
}

const Button = ({ returnBtn }: Props) => {
    return (
        <button className={`flex justify-center items-center rounded-lg font-semibold text-xs uppercase text-center duration-300 hover:scale-105 my-8 md:mx-auto md:my-7 hover:cursor-pointer
        ${returnBtn
                    ? 'bg-[#38456414] w-[213px] h-[50px] md:hidden mr-12'
                    : 'w-[127px] h-[52px] px-4 py-[30px] bg-[#384564] text-[#fff]  tracking-wider'}
`}>
            {returnBtn
                ? <div className="flex justify-center items-center gap-5">
                    <PrevIcon />
                    <span>Return to Job Board</span>
                </div>
                : 'Apply Now'}
        </button>
    )
}

export default Button