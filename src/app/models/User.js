import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    console.log(4);
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    console.log(5);
  }
}

export default User;
