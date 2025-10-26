import clsx from 'clsx'
import React, { useRef } from 'react'

type Props = {
  isOpen: boolean
  setIsOpen: () => void
}

const MenuBtn = ({ isOpen, setIsOpen }: Props) => {
  const divRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={divRef}
      className="ham-menu-btn  group py-5 cursor-pointer"
      onClick={setIsOpen}
    >
      <div className="pointer-events-none w-8 sm:w-9 h-6 sm:h-7 flex flex-col justify-between  relative z-[51]">
        <span
          className={clsx(
            `block w-full h-1 bg-white lg:group-hover:bg-black duration-300 pointer-events-none`,
            {
              'rotate-45 translate-y-[11.5px] sm:translate-y-[13.5px] 2xl:translate-y-[15.5px]':
                isOpen
            }
          )}
        />
        <span
          className={clsx(
            `block w-full h-1 bg-white lg:group-hover:bg-black duration-300 pointer-events-none`,
            {
              'scale-x-0': isOpen
            }
          )}
        />
        <span
          className={clsx(
            `block w-full h-1 bg-white lg:group-hover:bg-black duration-300 pointer-events-none`,
            {
              '-rotate-45 translate-y-[-11.5px] sm:translate-y-[-13.5px] 2xl:translate-y-[-15.5px]':
                isOpen
            }
          )}
        />
      </div>
    </div>
  )
}

export default MenuBtn
