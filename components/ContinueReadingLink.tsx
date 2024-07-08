import Link from "next/link"

function ContinueReadingLink() {
  return (
    <Link
    href='/'
    className='text-sky-500 hover:underline'>
    <p>...Continue Reading</p>
  </Link>
  )
}

export default ContinueReadingLink