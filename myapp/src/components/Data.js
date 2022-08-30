import info from "./information";
function DataFromFFile() {
  console.log(info);
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {info.map((value, ind) => {
          return <p key={ind}>{value.name}</p>;
        })}
      </ul>
    </div>
  );
}
export default DataFromFFile;
