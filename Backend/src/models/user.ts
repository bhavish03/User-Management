"use strict";
import { Model, UUIDV4 } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  phone_no:string;
  role:string;
  varification:string;
  varification_code:string;
}

export class User extends Model<UserAttributes> implements UserAttributes {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  phone_no!:string;
  role!:string;
  varification!:string;
  varification_code!:string;

  static associate(models: any) {
    // Define associations here if needed
  }
}

export default (sequelize: any, DataTypes: any) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      phone_no:{
        type:DataTypes.STRING,
        unique:true
      },
      role:{
        type:DataTypes.STRING,
      },
      varification:{
        type:DataTypes.STRING,
      },
      varification_code:{
        type:DataTypes.STRING,
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};












// "use strict";
// import { Model, UUIDV4 } from "sequelize";

// interface UserAttributes {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
//   phone_no:string;
//   role:string;
//   varification:string;
//   varification_code:string;
  
// }

// module.exports = (sequelize: any, DataTypes: any) => {
//   class User extends Model<UserAttributes> implements UserAttributes {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     id!: string;
//     name!: string;
//     email!: string;
//     password!: string;
//     phone_no!:string;
//     role!:string;
//     varification_code!:string;
//     varification!:string;

//     static associate(models: any) {
     
//     }
//   }
//   User.init(
//     {
//       id: {
//         type: DataTypes.UUID,
//         defaultValue: UUIDV4,
//         allowNull: false,
//         primaryKey: true,
//       },
      
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         unique: true,
//       },
//       password: {
//         type: DataTypes.STRING,
//       },
//       phone_no:{
//         type:DataTypes.STRING,
//         unique:true
//       },
//       role:{
//         type:DataTypes.STRING,

//       },
//       varification:{
//         type:DataTypes.STRING,
//       },
//       varification_code:{
//         type:DataTypes.STRING,
//       }

     
    
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );
//   return User;
// };