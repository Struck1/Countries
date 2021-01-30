import { useState } from "react";
import CountryList from "./Components/CountryList";
import Search from "./Components/Search";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <main className='py3'>
      <div className='container mt-3'>
        <Search search={search} searchChange={setSearch} />
        <CountryList search={search} />
      </div>
    </main>
  );
};

export default App;
