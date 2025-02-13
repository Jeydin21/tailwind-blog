import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-md mr-3 font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
