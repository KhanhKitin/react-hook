import React from 'react'
import PropTypes from 'prop-types'

function Pagination(props) {
  const {pagination, onHandlePagination} = props;
  const {_page, _limit, _totalRows} = pagination;
  const pageFinal = Math.ceil(_totalRows/_limit);

  function handlePagination(newPage){
    if(onHandlePagination){
      onHandlePagination(newPage);
    }
  }

  return (
    <div>
      <button
        disabled={_page <= 1}
        onClick={() => handlePagination(_page - 1)}
      >
        Prev
      </button>
      <button
        disabled={_page >= pageFinal}
        onClick={() => handlePagination(_page + 1)}
      >
        Next
      </button>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onHandlePagination: PropTypes.func,
}

Pagination.defaultProps = {
  onHandlePagination: null,
}

export default Pagination

