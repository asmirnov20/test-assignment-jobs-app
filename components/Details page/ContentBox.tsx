
interface Props {
    item: string
    yellow?: boolean
}

const ContentBox = ({ item, yellow }: Props) => {
    return (
        <div className={`font-bold leading-4 tracking-tight  border-[1px] rounded-lg flex flex-[0_0_220px] justify-center items-center md:flex-[0_0_122px] mt-4
        ${yellow
                ? 'text-[#988B49] bg-my-yellow border-[#FFCF00]'
                : 'text-[#55699E] bg-my-blue  border-dark-blue'}`}
        >
            <span className="block p-4 text-center whitespace-nowrap">
                {item}
            </span>
        </div>
    )
}

export default ContentBox