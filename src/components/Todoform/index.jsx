import React, {useState} from 'react';
import PropTypes from 'prop-types';

function TodoForm(props) {
  const {onSubmit} = props;
  const [value, setvalue] = useState('');

  function hanleOnchange(e){
    setvalue(e.target.value);
  }

  function handleOnSubmit(e){
    e.preventDefault();
    if(!onSubmit) return;
    let formValue = {
      title: value,
    }
    onSubmit(formValue);
  }

  return (<form onSubmit={handleOnSubmit}>
      <input value={value} onChange={hanleOnchange}/>
  </form>);
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
}


export default TodoForm;
