function CategoryCard({ emoji, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer">

      <div className="w-20 h-20 bg-white rounded-2xl shadow flex items-center justify-center text-4xl hover:scale-105 transition">

        {emoji}

      </div>

      <p className="mt-2 font-medium text-gray-700">
        {title}
      </p>

    </div>
  );
}

export default CategoryCard;