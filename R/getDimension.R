
getDimension<-function(dimension){
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');

#Option to aggregate in mysql
#rs = dbSendQuery(mydb, paste0( "select " ,dim, ", sum(" ,measures, ") from product group by ",dim," " , sep=""));

rs = dbSendQuery(mydb, paste0( "select Distinct( " ,dimension, ") from product" , sep=""));
dataset <- fetch(rs, n=-1);
names(dataset)[1] <-paste("Dimension");

DimJSON<-toJSON(dataset)
return(DimJSON);

}
