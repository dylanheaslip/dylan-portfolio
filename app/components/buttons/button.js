import Link from "next/link"

function Button({ text = "Learn More", href = "#", light = false }) {
  return (
    <Link 
      className={`btn ${light ? 'btn--light' : ''}`} 
      href={href} 
      style={{
        fontSize: "14px", 
        fontWeight: "600"
      }}
    >
      {text}
    </Link>
  )
}

export default Button