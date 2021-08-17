import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Filter from './Filter';
import * as usersAction from './users.actions';
import { filterTextSelector, filterUsersList } from './users.selectors';

/*
вводять текст і видає елементи списку в яких міститься цей текст
тобто заново відфільтрований список

стейт треба зберігати в редакс

вводиться текст, в екшин попадає цей кусочок тексту +++
цей екшин попадає в редьюсер +++
в селекторі в залежності від введеного тексту фільруємо список
рендеримо список з відфільтрваним масивом

пишемо екшин який записує введений текст 
  в екшин введений текст передається через онченч і діспатч
пишемо редюсер який буде фомувати стор, в стейт записуємо той кусочок тексту з екшина
в сторі буде весь масив і кусочок введеного тексту
пишемо селектор який буде фільтрувати масив в залежності від введеного тексту
в компоненту треба передати кусочок того тексту через селектор і відфільтрований масив
*/

class UsersList extends React.Component {
  onChange = (e) => {
    this.props.onChangeUsersList(e.target.value);
  };
  render() {
    return (
      <>
        <Filter
          filterText={this.props.filterText}
          count={this.props.users.length}
          onChange={this.onChange}
        />
        <ul className="users">
          {this.props.users.map((users) => (
            <User key={users.id} {...users} />
          ))}
        </ul>
      </>
    );
  }
}

const mapState = (state) => {
  return {
    users: filterUsersList(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  onChangeUsersList: usersAction.findUsers,
};

export default connect(mapState, mapDispatch)(UsersList);