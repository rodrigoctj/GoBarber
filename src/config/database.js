module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'root',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
