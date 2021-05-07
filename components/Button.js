import Link from "next/link";

const Button = ({name, href, classN}) => {
  return (
    <Link href={`./${href}`}>
      <a className={`button ${classN}`}>{name}</a>
    </Link>
  )
}

export default Button;
