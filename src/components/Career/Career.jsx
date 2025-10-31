import CareerHero from "./CareerHero";
import CompanyValues from "./CompanyValues";
import JobListings from "./JobListings";
import Benefits from "./Benefits";
import ApplicationProcess from "./ApplicationProcess";
import CareerContact from "./CareerContact";

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-red-100">
      <CareerHero />
      <CompanyValues />
      <JobListings />
      <Benefits />
      <ApplicationProcess />
      <CareerContact />
    </div>
  );
};

export default Career;
