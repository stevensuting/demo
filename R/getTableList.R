getTableList <- function(connectionId){
#Connect to BIT(mysql) database to fetch connection details
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='BIT_dev', host='192.168.2.45');

#Return connection details for given connection_id
rs = dbSendQuery(mydb, paste0( "select * from Data_Connection where connection_id=" ,connectionId, ";" , sep=""));     
connectionDetails <- fetch(rs,n=1);

#Extract connection details from connectionDetails dataframe

data_source_type_id <- connectionDetails$data_source_type_id;
ip_address<- connectionDetails$ip_address;
username<- connectionDetails$username;
password<- connectionDetails$password;
port<- connectionDetails$port;
dbname<- connectionDetails$db_name;
filepath<- connectionDetails$filepath;


#flat file
	if (data_source_type_id==1){table="Flat File"}
#mySQL
 	if (data_source_type_id==2){
                mydb_mySQL <- dbConnect(MySQL(), user=username, password=password, dbname=dbname, host=ip_address);
                rs = dbSendQuery(mydb_mySQL, "Show tables;");
                tablemySQL <- fetch(rs,n=-1);
                names(tablemySQL)[1] <-paste("Table List");
                tablemySQLJson <- toJSON(tablemySQL);
                return(tablemySQLJson)

        }
#MSSQL
 	if (data_source_type_id==3){

		host= paste0(ip_address,"/",dbname,";user=", username ,";password=", password);
                mydb_MSSQL = dbConnect(SQLServer(), host);
                rs = dbSendQuery(mydb_MSSQL,  "select name from sys.tables;");
                tableMSSQL <- fetch(rs,n=-1);
                names(tableMSSQL)[1] <-paste("Table List");
                tableMSSQLJson <- toJSON(tableMSSQL);
                return(tableMSSQLJson)
	}
#Oracle Database
 	if (data_source_type_id==4){table="Oracle Database"}
#Hadoop
 	if (data_source_type_id==5){table="Hadoop"}
#Invalid Input
	if (data_source_type_id>=6 || connectionId<1){table="Invalid Input"}
}
