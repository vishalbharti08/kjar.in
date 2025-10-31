import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description:
      "Join our frontend team to build beautiful, responsive web applications using React and modern web technologies.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "UI/UX sensibility",
    ],
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York",
    type: "Full-time",
    salary: "$130k - $170k",
    description:
      "Lead product strategy and roadmap for our core platform, working closely with engineering and design teams.",
    requirements: [
      "3+ years PM experience",
      "Technical background",
      "Strong analytical skills",
    ],
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco",
    type: "Full-time",
    salary: "$110k - $140k",
    description:
      "Design intuitive and delightful user experiences that solve real problems for our customers.",
    requirements: [
      "4+ years UX design",
      "Prototyping skills",
      "User research experience",
    ],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$125k - $155k",
    description:
      "Build and maintain our cloud infrastructure, ensuring scalability, security, and reliability.",
    requirements: [
      "AWS/GCP experience",
      "Kubernetes knowledge",
      "CI/CD expertise",
    ],
  },
];

const JobListings = () => {
  return (
    <section id="open-positions" className="py-20 px-6 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your next opportunity and help us shape the future of Eyecare
            and Eyewear.
          </p>
        </header>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-lg p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2 font-semibold">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 font-medium">
                      {job.department}
                    </span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" aria-hidden="true" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 lg:mt-0 inline-flex items-center bg-red-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-red-700 transform group-hover:scale-105 transition-transform duration-200"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <p className="text-gray-700 mb-4">{job.description}</p>
              <section>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Requirements:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </section>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
