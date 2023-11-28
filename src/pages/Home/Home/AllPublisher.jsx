import usePublisher from "../../../hooks/usePublisher";

const AllPublisher = () => {
  const [publisher, loading] = usePublisher([]);
  console.log(publisher);
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div className="my-10">
      <h2 className="text-4xl font-semibold text-center text-balck mb-5">
        All Our Publisher
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {publisher.map((person) => (
          <div
            key={person._id}
            className="w-full max-w-sm bg-white border border-gray-200 space-y-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 mt-5 h-24 mb-3 rounded-full shadow-lg"
                src={person.image}
                alt="Publisher image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {person.publisher_name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPublisher;
