rmysql<-function(){
mydb = dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');
rs = dbSendQuery(mydb, "select count(*) from product");
data = fetch(rs, n=-1);
data
}