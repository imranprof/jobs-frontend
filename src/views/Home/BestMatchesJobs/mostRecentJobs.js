import Job from "../../Job";

const MostRecentJobs = ({mostRecentJobsList}) => {
  return (
    <>
      {mostRecentJobsList?.map(job => (
          <Job key={job.id} job={job} />
        ))}
    </>
  );
};

export default MostRecentJobs;
