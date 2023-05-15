module.exports = {
  dialect: process.env.CONNECTION,
  host: process.env.HOST,
  username: process.env.NAME,
  password: process.env.PASSWD,
  database: process.env.DATABASE,
  define: {
    timestamp: true, 
    underscored: true
  }
}