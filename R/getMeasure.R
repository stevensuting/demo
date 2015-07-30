getMeasure<-function(dimension,measure){
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');

#Option to aggregate in mysql
#rs = dbSendQuery(mydb, paste0( "select " ,dim, ", sum(" ,measures, ") from product group by ",dim," " , sep=""));

rs = dbSendQuery(mydb, paste0( "select ( " ,measure, ") from product" , sep=""));
dataset <- fetch(rs, n=-1);

#aggregate in R
# dataset[,2] is measure and dataset[,1] is Dimension
aggdata <- aggregate(dataset[,2]~dimension,data=dataset,FUN=sum);
names(aggdata)[1] <-paste("Dimension");
names(aggdata)[2] <-paste("Measure");
aggMeasure <- data.frame(aggdata$Measure);
names(aggMeasure)[1] <-paste("Measure");


aggJSON<-toJSON(aggMeasure)
return(aggJSON);
}