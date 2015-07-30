getaggrdata<-function(dim,measures){
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');

#Option to aggregate in mysql
#rs = dbSendQuery(mydb, paste0( "select " ,dim, ", sum(" ,measures, ") from product group by ",dim," " , sep=""));

rs = dbSendQuery(mydb, paste0( "select " ,dim, "," ,measures, " from product" , sep=""));
dataset <- fetch(rs, n=-1);

#aggregate in R
# dataset[,2] is measure and dataset[,1] is Dimension
aggdata<- aggregate(dataset[,2]~dataset[,1],data=dataset,FUN=sum);


aggrdataJSON<-toJSON(aggdata)
return(aggrdataJSON);
}
