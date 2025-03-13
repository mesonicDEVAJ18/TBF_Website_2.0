export function UpdateCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-serif mb-4">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}