export default function Page({ params }: { params: { location: string } }) {
  return <h1>{params.location}</h1>;
}
