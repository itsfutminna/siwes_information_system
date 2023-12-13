export default function SearchBar() {
  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="flex items-center gap-4">
        <label htmlFor="year">Year: </label>
        <select
          name="year"
          id="year"
          className="w-1/6 rounded-md py-1 ring focus:ring-Futpurple ring-Newpurple outline-none hover:ring-purple-300 px-2"
          placeholder="year"
        >
          <option>All</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
        <label htmlFor="filter">Filter: </label>
        <select
          name="filter"
          id="filter"
          className="w-1/5 rounded-md py-1 ring focus:ring-Futpurple ring-Newpurple outline-none hover:ring-purple-300 px-2"
        >
          <option>All</option>
          <option>MIS</option>
          <option>Networking</option>
          <option>Nitdah</option>
        </select>
        <input
          type="text"
          className="basis-1/2 flex-1 rounded-md py-1 ring focus:ring-Futpurple ring-Newpurple outline-none hover:ring-purple-300 px-4"
          placeholder="Matric No."
        />
        <button
          onClick={(e) => handleSearch(e)}
          className="px-6 bg-Futpurple text-white  rounded-md py-1"
        >
          Search
        </button>
      </form>
    </div>
  );
}
