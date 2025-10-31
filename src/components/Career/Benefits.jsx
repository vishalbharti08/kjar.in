import {
  Heart,
  Plane,
  GraduationCap,
  Home,
  Coffee,
  Shield,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision insurance plus wellness programs and mental health support.",
  },
  {
    icon: Plane,
    title: "Unlimited PTO",
    description:
      "Take the time you need to recharge. We believe in work-life balance and trust our team to manage their time.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "Annual learning budget, conference attendance, and internal training programs to grow your skills.",
  },
  {
    icon: Home,
    title: "Remote-First Culture",
    description:
      "Work from anywhere with flexible hours. We provide home office stipends and co-working space access.",
  },
  {
    icon: Coffee,
    title: "Team Building",
    description:
      "Regular team events, quarterly retreats, and social activities to build strong connections.",
  },
  {
    icon: Shield,
    title: "Financial Security",
    description:
      "Competitive salary, equity participation, 401k matching, and life insurance coverage.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-green-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We invest in our people because we believe that happy, healthy
            employees do their best work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg rounded-lg p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-green-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
