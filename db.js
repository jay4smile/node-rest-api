var mongoose = require('mongoose');
mongoose.connect('mongodb://jay4smile:Feb%402012@cluster0-shard-00-00-pdylk.mongodb.net:27017,cluster0-shard-00-01-pdylk.mongodb.net:27017,cluster0-shard-00-02-pdylk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

module.exports = mongoose;
