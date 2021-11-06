import { Button, ButtonGroup } from "@material-ui/core";

const handleClick = ({ currentTarget }) => console.log(currentTarget.value, currentTarget.name);
const ToogleButtons = ({ valuesObj, onClickFunc = handleClick }) => {

  const generateButtons = () => Object.entries(valuesObj).map(([key, value]) => {
    return (
      <Button
        name={ key }
        key={ key }
        value={ value }
        onClick={ onClickFunc }
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