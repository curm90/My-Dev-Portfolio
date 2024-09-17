export default function SectionHeader({ header }: { header: string }) {
  return (
    <h2 className='mb-8 text-center text-3xl font-medium capitalize text-gray-950'>{header}</h2>
  );
}
