getDimension<-function(dimension){
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');

#Option to aggregate in mysql
#rs = dbSendQuery(mydb, paste0( "select *from product"));

rs = dbSendQuery(mydb, paste0( "select Distinct( " ,dimension, ") from VW_RetailDataset" , sep=""));
dataset <- fetch(rs, n=-1);
dimensionExt <- dataset[,1]
return(dimensionExt);

}
