import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'react_todolist',
  username: 'root',
  password: 'root',
  port: 3306,
  dialect: 'mysql',
});

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    phone: {
      type: DataTypes.CHAR(11),
      allowNull: false,
    },
    password: {
      type: DataTypes.CHAR(12),
      allowNull: false,
    },
  },
  {
    tableName: 'user_info',
    timestamps: false,
  },
);

// User.sync();

const Matter = sequelize.define(
  'Matter',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.CHAR(8),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: 'matter_list',
    timestamps: false,
  },
);

// Matter.sync();

export default sequelize;

export { User, Matter };
