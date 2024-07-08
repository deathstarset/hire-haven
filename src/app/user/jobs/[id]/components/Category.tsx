interface CategoryProps {
  job: GetJobResponse;
}

export default function Category({ job }: CategoryProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-header-color mb-4">
        Category
      </h3>
      <div className="bg-slate-200 rounded-full px-2 py-1 font-medium w-fit">
        {job.category.name}
      </div>
    </div>
  );
}
