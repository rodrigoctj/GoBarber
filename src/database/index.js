import Sequelize from 'sequelize';

import databaseConfig from '../config/database'; // importanndo configuracoes da conexao com o banco

import User from '../app/models/User';

const models = [User];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    console.log(1);
    this.connection = new Sequelize(databaseConfig);
    console.log(2);
    models.map(model => model.init(this.connection));
    console.log(3);
  }
}

export default DataBase;
