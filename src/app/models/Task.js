import  Sequelize, { Model } from "sequelize";

class Task extends Model {
    // sequelize é a minha conexão com o banco
    static init(sequelize) {
        super.init(
            {
                task: Sequelize.STRING,
                check: Sequelize.BOOLEAN
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    }
}

export default Task;