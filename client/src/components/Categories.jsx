import CategoryCard from "./CategoryCard";

const categories = [
  { emoji: "🥬", title: "Vegetables" },
  { emoji: "🍎", title: "Fruits" },
  { emoji: "🍚", title: "Rice" },
  { emoji: "🥛", title: "Dairy" },
  { emoji: "🥤", title: "Beverages" },
  { emoji: "🍪", title: "Snacks" },
  { emoji: "🐟", title: "Fish" },
  { emoji: "🐔🥩", title: "Meat" },
];

function Categories() {
  return (
    <section className="mx-5 mt-8">

      <h2 className="text-2xl font-bold mb-5">
        Shop by Category
      </h2>

      <div className="grid grid-cols-3 gap-5">

        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            emoji={category.emoji}
            title={category.title}
          />
        ))}

      </div>

    </section>
  );
}

export default Categories;