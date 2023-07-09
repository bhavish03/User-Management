"use strict";
import { Model, UUIDV4 } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  phone_no:number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    name!: string;
    email!: string;
    password!: string;
    phone_no!:number;
    static associate(models: any) {
     
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
       email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      phone_no:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
    
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
