module.exports = (sequelize, DataTypes) => {
    const Perfume = sequelize.define("Perfume", {
        Perfumename: DataTypes.STRING,
        brand: DataTypes.STRING,
        type: DataTypes.STRING,
        size: DataTypes.STRING,
        scenttype: DataTypes.STRING,
        country: DataTypes.STRING,
        price: DataTypes.STRING
    })
    return Perfume;
  };