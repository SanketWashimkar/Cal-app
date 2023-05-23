import "./Button.css";
const Button = (props) => {
  <Button>{props.btName}</Button>;

  const { btName, btFun } = props;

    // const btClick = () =>{

  //   console.log('porps value', props)
  // }

  return (
    <div>
      <button className="bt-cal" onClick={btFun}>
        {btName}
      </button>
    </div>
  );
};

export default Button;
