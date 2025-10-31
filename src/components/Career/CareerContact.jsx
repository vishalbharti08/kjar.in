import { Mail, MessageCircle, HelpCircle, ArrowRight } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about working here?",
    buttonLabel: "careers@company.com",
    isEmail: true,
  },
  {
    icon: MessageCircle,
    title: "Chat with Recruiter",
    description: "Get instant answers",
    buttonLabel: "Start Chat",
    isEmail: false,
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Common questions answered",
    buttonLabel: "View FAQ",
    isEmail: false,
  },
];

const CareerContact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-red-900 via-green-900 to-red-900 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join Our Team?
        </h2>
        <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
          Don&apos;t see the perfect role? We&apos;re always looking for
          talented individuals. Reach out and let&apos;s start a conversation
          about your future with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 p-6 text-center"
            >
              <option.icon className="w-8 h-8 text-green-300 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{option.title}</h3>
              <p className="text-red-100 text-sm mb-4">{option.description}</p>

              {option.isEmail ? (
                <a
                  href={`mailto:${option.buttonLabel}`}
                  className="inline-block px-4 py-2 text-sm border border-white/30 rounded-md text-white hover:bg-white hover:text-red-900 transition-all"
                >
                  {option.buttonLabel}
                </a>
              ) : (
                <button
                  type="button"
                  className="inline-block px-4 py-2 text-sm border border-white/30 rounded-md text-white hover:bg-white hover:text-red-900 transition-all"
                >
                  {option.buttonLabel}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 bg-white text-red-900 font-medium rounded-md hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
          >
            Submit Open Application
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <p className="text-red-200 text-sm">
            We&apos;ll keep your information on file for future opportunities
            that match your skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerContact;
