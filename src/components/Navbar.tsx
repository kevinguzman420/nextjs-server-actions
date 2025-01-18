import Link from 'next/link'
import { DarkmodeToggleButton } from './DarkmodeToggleButton'
import { buttonVariants } from './ui/button'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between my-5 ">
      <Link href="/">
        <h1 className=" text-3xl font-bold text-gray-800 dark:text-gray-100">
          SeveCode
        </h1>
      </Link>
      <div className=" flex gap-x-2 items-center">
        <Link className={buttonVariants({ variant: 'secondary' })} href="/new">
          New product
        </Link>
        <DarkmodeToggleButton />
      </div>
    </div>
  )
}
