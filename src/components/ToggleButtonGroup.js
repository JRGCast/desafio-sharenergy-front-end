import { Button, ButtonGroup } from "@material-ui/core";

const ToogleButtons = ({ valuesObj, onClickFunc }) => {
  console.log(valuesObj);

  const generateButtons = () => Object.entries(valuesObj).map(([key, value], index) => {
    console.log(key, value);
    const handleClick = ({ currentTarget }) => console.log(currentTarget.value, currentTarget.name);
    return (
      <Button
        name={ key }
        key={ key }
        value={ value }
        onClick={ handleClick }
      >{ key }</Button>
    );
  });
  return (
    <ButtonGroup color='primary'
      variant="outlined"
      aria-label="outlined primary button group">
      { generateButtons() }
    </ButtonGroup>
  );
};

export default ToogleButtons;