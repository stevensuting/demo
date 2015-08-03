getDimension<-function(dimension){
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');

#Option to aggregate in mysql
#rs = dbSendQuery(mydb, paste0( "select *from product"));

rs = dbSendQuery(mydb, paste0( "select Distinct( " ,dimension, ") from product" , sep=""));
dataset <- fetch(rs, n=-1);
dimensionExt <- dataset[,1]
names(dataset)[1] <-paste("Dimension");


DimJSON<-toJSON(dataset)
return(dimensionExt);

}
