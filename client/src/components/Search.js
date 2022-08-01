const Search = (props) => {
  const Form = () => {};
  return (
    <div className="container">
      <div className="header">
        <h1>Safe Journey</h1>
        <h2>To feel safe when you are out and about exploring</h2>
        <p>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </p>
        {/* <form onSubmit={handlesubmit}> */}
          <div>
            <label>Search</label>
            {/* <input onChange={handleChange} type="text" name="search" /> */}
          </div>
        {/* </form> */}
        <Form />
      </div>
    </div>
  );
};

export default Search;
