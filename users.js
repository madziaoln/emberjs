import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    return ['Jan Kowalski', 'Paweł Nowak', 'Tomasz Polak'];
  }
}
