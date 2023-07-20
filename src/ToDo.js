export default function ToDo({ name, index }) {
  return (
    <div>
      <input id={index} type="checkbox" />
      <label htmlFor="">Name: {name}</label>
    </div>
  );
}
