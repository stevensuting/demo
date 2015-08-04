getMeasure<-function(dimension,measure){
#mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');
mydb_MSSQL = dbConnect(SQLServer(),"192.168.2.113/MicrosoftBIRetailDemo;user=appuser;password=appuser123");
#Option to aggregate in mysql
#rs = dbSendQuery(mydb, paste0( "select " ,dimension, ", sum(" ,measure, ") from product group by ",dimension," " , sep=""));
#rs = dbSendQuery(mydb, paste0( "select " ,dimension, "," ,measure, " from product " , sep=""));

rs = dbSendQuery(mydb_MSSQL, paste0( "select " ,dimension, "," ,measure, " from VW_RetailDataset " , sep=""));
dataset <- fetch(rs, n=10000);
names(dataset)[1] <-paste("Dimension");
names(dataset)[2] <-paste("Measure");
aggData<- ddply(dataset,.(Dimension), summarize, sum = sum(Measure) )
measureExt <- aggData[,2]
return(measureExt);


}
