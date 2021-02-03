import Link from "next/link";

const Button = ({name, href}) => {
  return (
    <Link href={`./${href}`}>
      <a className='button'>{name}</a>
    </Link>
  )
}

export default Button;