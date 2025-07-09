export default async function Docs({params}: 
  {
    params: Promise<{slug: string[]}>
  }
){
  const { slug } = await params;
  if (slug.length > 0) {
    return (
      <div>
        <h2>Slug Page: {slug.join('/')}</h2>
      </div>
    )
  }
  else if (slug.length === 0) {
    return (
      <div>
        <h2>Docs Home Page {slug[0]}</h2>
      </div>
    )
  }
  return (
    <div>
      <h2>Slug Page / Docs Home Page</h2>
    </div>
  )
}