var devConfig = {
    host: "localhost",
    database: "liuyang",
    user: "root",
    password: "root"
};
var prodConfig = {
    host: "localhost",
    database: "liuyang",
    port: 3306,
    user: "root",
    password: "root"
};
module.exports = process.env.NODE_ENV === "development" ? devConfig : prodConfig;
