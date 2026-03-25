import { Instructor } from "@/lib/instructors-data";

export default function InstructorCard({ instructor }: { instructor: Instructor }) {
  // Assign different colors to each instructor for visual variety
  const colors = [
    "bg-red-600",
    "bg-blue-600",
    "bg-purple-600",
    "bg-green-600",
  ];
  const colorIndex = instructor.initials.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div className="bg-dark-surface border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition">
      {/* Placeholder Image */}
      <div
        className={`${bgColor} h-48 flex items-center justify-center text-white text-5xl font-bold`}
      >
        {instructor.initials}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-1">{instructor.name}</h3>
        <p className="text-primary/70 text-sm font-semibold mb-3">
          {instructor.title}
        </p>

        <p className="text-light-text text-sm mb-4">{instructor.bio}</p>

        <div className="pt-4 border-t border-primary/10">
          <p className="text-xs text-light-text/60 font-semibold mb-1">
            SPECIALTY
          </p>
          <p className="text-sm text-light-text">{instructor.specialty}</p>
        </div>
      </div>
    </div>
  );
}
