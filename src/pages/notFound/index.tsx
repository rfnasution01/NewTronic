export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 style={{ fontSize: '180px', fontWeight: 700, lineHeight: '130%' }}>
        OOPS !
      </h1>
      <h2 style={{ fontSize: '40px', fontWeight: 400, lineHeight: '130%' }}>
        Page Not Found
      </h2>

      <h6 style={{ fontSize: '28px', fontWeight: 400, lineHeight: '130%' }}>
        <a href="/" style={{ color: 'blue' }}>
          /Home
        </a>
      </h6>
    </div>
  )
}
