
export default async function BlogPost({
  params, 
} : {
  params: Promise<{blogid: string}>;
}) {
  const blogId = (await params).blogid;
  return (
    <div>
      <h2>Blog Post: {blogId}</h2>
    </div>
  )
}