getaggrdata<-function(dim){
mydb = dbConnect(MySQL(), user='appuser', password='appuser123', dbname='mstore', host='192.168.2.45');
rs = dbSendQuery(mydb, paste0( "select " ,dim, " from product"  , sep=""));
data = fetch(rs, n=-1);
return(data);
}
