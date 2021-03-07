import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

function PostSearch(props) {
  const {onSubmit} = props;
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeOutRef = useRef(null);


  function handleChangeValue(e) {
    let value = e.target.value;
    setSearchTerm(value);

    if(typingTimeOutRef.current){
      clearTimeout(typingTimeOutRef.current);
    }
    typingTimeOutRef.current = setTimeout(() => {
      if(!onSubmit) return;
      const formValue = {
        searchTerm: value,
      }
      onSubmit(formValue);
    }, 1000);
  }

  return (
    <form>
        <input value={searchTerm} onChange={handleChangeValue} />
    </form>
  )
}

PostSearch.propTypes = {
  onSubmit: PropTypes.func,
}

PostSearch.defaultProps = {
  onSubmit: null,
}

export default PostSearch;

