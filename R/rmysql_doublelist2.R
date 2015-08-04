rmysql_doublelist2<-function(){
#mydb = dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');
mydb = dbConnect(SQLServer(),"192.168.2.113/MicrosoftBIRetailDemo;user=appuser;password=appuser123");
rs = dbSendQuery(mydb, "select * from FactOnlineSales");

#Pulls only 1st row
data = fetch(rs, n=1);

#get datatypes of columns
preData<-sapply(data,typeof);
preData.df=data.frame(preData);
names(preData.df)[1] <-paste("Variable_Type");

#Convert data frame to JSON
dataJSON<- toJSON(preData.df)

#Seperate different datatypes
#integer <- subset(preData.df,Variable_Type == "integer");
#int <- row.names(integer);
#int.ds <- data.frame(int);

#character <- subset(preData.df,Variable_Type == "character");
#char <- row.names(character);
#char.ds <- data.frame(char);

#Save into JSON
#intJSON <- toJSON(int.ds);
#charJSON <- toJSON(char.ds);

return(dataJSON)
}