import { FileText, Users, Video, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description:
      "Submit your application with resume and cover letter through our careers portal.",
    duration: "5 min",
  },
  {
    icon: Users,
    title: "Initial Screening",
    description:
      "Our talent team will review your application and may reach out for a brief phone conversation.",
    duration: "1-2 days",
  },
  {
    icon: Video,
    title: "Team Interviews",
    description:
      "Meet with your potential teammates and manager through video or in-person interviews.",
    duration: "1 week",
  },
  {
    icon: CheckCircle,
    title: "Decision & Offer",
    description:
      "We will make a decision quickly and extend an offer to the right candidate.",
    duration: "2-3 days",
  },
];

const ApplicationProcess = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Hiring Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;ve designed a transparent and efficient process to help you
            understand what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-red-50 border-0 shadow-lg h-full rounded-lg p-8 text-center flex flex-col">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-green-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </div>

              {/* Connection line for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-300 to-green-300 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
