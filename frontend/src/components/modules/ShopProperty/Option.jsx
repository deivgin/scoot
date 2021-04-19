export default function Option({ name, price }) {
  return (
    <>
      <input type="checkbox" name="option" value={1} />
      <label htmlFor={name}>{name}</label>
      <span>{price}</span>
    </>
  );
}
