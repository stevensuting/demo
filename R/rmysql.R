rmysql<-function(){
mydb = dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');
rs = dbSendQuery(mydb, "select * from product");
data = fetch(rs, n=-1);
#get datatypes of columns
preData<-sapply(data,typeof);
preData.df=data.frame(preData);
names(preData.df)[1] <-paste("Variable_Type");

#seperate different datatypes
integer <- subset(preData.df,Variable_Type == "integer");
int <- row.names(integer);
int.ds <- data.frame(int);

character <- subset(preData.df,Variable_Type == "character");
char <- row.names(character);
char.ds <- data.frame(char);

#save into JSON
intJSON <- toJSON(int.ds);
charJSON <- toJSON(char.ds);

return(charJSON);
#return(list(intJSON,charJSON))
}