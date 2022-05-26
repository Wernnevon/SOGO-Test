import "./styles.css";

interface Params{
  value: any;
  handle: Function;
  type?: string
}

const Input = ({value, handle, type}: Params) => {

  return <input value={value} onChange={(e)=> handle(e.target.value)} id="inputField" type={type} />;
};
export default Input;
