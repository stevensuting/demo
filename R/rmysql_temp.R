rmysql_temp<-function(){
mydb = dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');
rs = dbSendQuery(mydb, "select * from product");
data = fetch(rs, n=5);

#get datatypes of columns
preData<-sapply(data,typeof);
preData.df=data.frame(preData);
names(preData.df)[1] <-paste("Variable_Type");


character <- subset(preData.df,Variable_Type == "character");
char <- row.names(character);
char.ds <- data.frame(char);

#save into JSON
charJSON <- toJSON(char.ds);
return(charJSON);

}