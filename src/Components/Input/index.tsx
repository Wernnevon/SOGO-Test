import "./styles.css";

interface Params{
  value: any;
  handle: Function;
  type?: string
  options?: any;
}

const Input = ({value, handle, options, type}: Params) => {

  return <input value={options? options(value): value} onChange={(e)=> handle(e.target.value)} id="inputField" type={type} />;
};
export default Input;
