getMeasure<-function(dimension,measure){
#mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');
mydb_MSSQL = dbConnect(SQLServer(),"192.168.2.113/MicrosoftBIRetailDemo;user=appuser;password=appuser123");
#Option to aggregate in mysql
#rs = dbSendQuery(mydb, paste0( "select " ,dimension, ", sum(" ,measure, ") from product group by ",dimension," " , sep=""));
#rs = dbSendQuery(mydb, paste0( "select " ,dimension, "," ,measure, " from product " , sep=""));
rs = dbSendQuery(mydb_MSSQL, paste0( "select " ,dimension, "," ,measure, " from FactOnlineSales " , sep=""));

dataset <- fetch(rs, n=10000);
names(dataset)[1] <-paste("Dimension");
names(dataset)[2] <-paste("Measure");

aggData<- ddply(dataset,.(Dimension), summarize, sum = sum(Measure) )

measureExt <- aggData[,2]
#aggregate in R
#dataset[,2] is measure and dataset[,1] is Dimension
#aggdata <- aggregate(dataset[,2]~ dataset[,1],data=dataset,FUN=sum);
#aggdata <- aggregate(list(Measure=dataset[,2]),list(Dimension=dataset[,1]),sum);

#aggMeasure <- data.frame(dataset[,2]);
#names(aggMeasure)[1] <-paste("Measure");

#aggJSON<-toJSON(aggMeasure);
return(measureExt);
}
