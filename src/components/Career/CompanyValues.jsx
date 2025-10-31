import { Heart, Lightbulb, Target, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description:
      "We believe in doing what you love and loving what you do. Passion fuels innovation and drives exceptional results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We encourage creative thinking and bold ideas. Every team member is empowered to contribute to our innovative culture.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description:
      "We set ambitious goals and work together to achieve them. Success is measured by impact and meaningful outcomes.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "We believe in the power of teamwork. Together, we can accomplish more than any individual could alone.",
  },
];

const CompanyValues = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values Drive Everything We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re not just building products – we&apos;re building a
            culture that empowers every team member to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-lg"
            >
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
