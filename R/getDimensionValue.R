getDimensionValue<-function(datasetId,dimension){

#get dataset_name from Dataset table in BIT_Dev
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='BIT_dev', host='192.168.2.45');
rs = dbSendQuery(mydb, paste0( "select dataset_name from Dataset where dataset_id=" ,datasetId, ";" , sep=""));
dataset_name <- fetch(rs,n=1);
tableName<- as.character(dataset_name);

#Close connection 
#dbDisconnect( dbListConnections( dbDriver( drv = "MySQL"))[[1]]);


#Connect to BIT_Dev(mysql) database to fetch connection details
mydb2 <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='BIT_dev', host='192.168.2.45');
rs2 = dbSendQuery(mydb2, paste0( "SELECT * FROM Data_Connection WHERE connection_id = (SELECT connection_id FROM Dataset  WHERE dataset_id= " ,datasetId, ");" , sep=""));    
connectionDetails <- fetch(rs2,n=1);

#Close connection 
#dbDisconnect( dbListConnections( dbDriver( drv = "MySQL"))[[1]]);

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
                rs = dbSendQuery(mydb_mySQL, paste0( "select Distinct( " ,dimension, ") from ",tableName," Limit 1000;" , sep=""));
                dataset <- fetch(rs, n=1000);
                names(dataset)[1] <-paste("Dimension");
                distinctDataset<-unique(dataset[c("Dimension")]);
                datasetDimension <- distinctDataset[,1];    
                return(datasetDimension);
                

        }
#MSSQL
 	if (data_source_type_id==3){

		host= paste0(ip_address,"/",dbname,";user=", username ,";password=", password);
                mydb_MSSQL = dbConnect(SQLServer(), host);
                rs = dbSendQuery(mydb_MSSQL, paste0( "select top 1000( " ,dimension, ") from ",tableName,";" , sep=""));
                dataset <- fetch(rs, n=1000);
                names(dataset)[1] <-paste("Dimension");
                distinctDataset<-unique(dataset[c("Dimension")]);
                datasetDimension <- distinctDataset[,1];    
                return(datasetDimension);
         
           
	}
#Oracle Database
 	if (data_source_type_id==4){table="Oracle Database"}
#Hadoop
 	if (data_source_type_id==5){table="Hadoop"}
#Invalid Input
	if (data_source_type_id>=6 || connectionId<1){table="Invalid Input"}


}
