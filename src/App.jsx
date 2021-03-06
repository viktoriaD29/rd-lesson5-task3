import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './users/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};
export default App;

/*
стор провайдиться в юсерліст
стор звичайний
екшин має записувати введений текст, тобто фільтртекст (в пейлоад)
цей текст разом з екшином потрапляє в редюсер
редюсер оновлює стейт в графі фільттекст на текст який передався з екшина
тобто стор складається з кусочка тексту і масиву юзерів
фільтрацію списку робить селектор
конектимо компоненту зі стором
в мапстейт передається селектор який передає у стейт компоненти відфільтрований список і кусочок введеного користувачем тексту
в мапдіспатч передається екшин (в цей екшин передаєтся через онченч кусочок введеного тексту через івент таргет)
міняємо дані з тим що були на дані зі стору
*/