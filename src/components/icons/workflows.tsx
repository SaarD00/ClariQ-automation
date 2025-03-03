import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Workflows = ({ selected }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  >
      <path className={clsx(
        ' transition-all dark:fill-[#353346] fill-[#C0BFC4] group-hover:fill-[#7540A9]',
        { 'dark:!fill-[#C8C7FF] !fill-[#7540A9] ': selected }
      )} stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>

  )
}

export default Workflows
