rmysql_doublelist2<-function(){
#mydb = dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');
mydb = dbConnect(SQLServer(),"192.168.2.113/MicrosoftBIRetailDemo;user=appuser;password=appuser123");
rs = dbSendQuery(mydb, "select * from FactOnlineSales");

#Pulls only 1st row
data = fetch(rs, n=1);
preData<-sapply(data,typeof);
preData.df=data.frame(preData);

Dimension <- subset(preData.df, preData== "character");
preDim <- data.frame(row.names(Dimension));
names(preDim)[1] <-paste("Dimension");
Dim <- toJSON(preDim) 

Measure <- subset(preData.df, preData!= "character");
preMeasure <- data.frame(row.names(Measure));
names(preMeasure)[1] <-paste("Measure");
Measure <- toJSON(preMeasure)

Dim2<-fromJSON(Dim); 
Measure2<-fromJSON(Measure);
merge <- rbind.fill(Dim2,Measure2);

meregeJSON<- toJSON(merge);

return(meregeJSON)
}