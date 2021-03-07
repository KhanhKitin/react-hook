import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/Todoform';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import PostFilterSearch from './components/PostFilterSearch';

function App() {
  const [todolist, setTodoList] = useState([
    { id: 1, title: 'Hoang Thi Thu Huong' },
    { id: 2, title: 'Hoang Bich Phuong' },
    { id: 3, title: 'Hoang Thi Hong Nhung' },
    { id: 4, title: 'Hoang Thi Nhu Nu' },
    { id: 5, title: 'Hoang Quoc Khanh' },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        console.log('====>', responseJson);
        const { data, pagination } = responseJson;
        setPostList(data);
        setPagination(pagination);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPostList();
  }, [filters]);

  function handleOnClick(todo) {
    let index = todolist.findIndex((item) => item.id === todo.id);
    let newArrayTodo = [...todolist];
    newArrayTodo.splice(index, 1);
    setTodoList(newArrayTodo);
  }

  function handleOnSubmit(data) {
    console.log('====>', data);
  }

  function handlePagination(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  function handleOnSubmitFilterSearch(formValue){
    setFilters({
      ...filters,
      _page: 1,
      title_like: formValue.searchTerm,
    })
  }

  return (
    <div className='App'>
      <h1>TodoList</h1>
      <PostFilterSearch onSubmit={handleOnSubmitFilterSearch} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onHandlePagination={handlePagination} />
      {/* <TodoForm onSubmit={handleOnSubmit} />
      <TodoList todos={todolist} onclickTodo={handleOnClick} /> */}
    </div>
  );
}

export default App;
