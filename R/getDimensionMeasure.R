getDimensionMeasure<-function(datasetId){

#get dataset_name from Dataset table in BIT_Dev
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='BIT_dev', host='192.168.2.45');
rs = dbSendQuery(mydb, paste0( "select dataset_name from Dataset where dataset_id=" ,datasetId, ";" , sep=""));
dataset_name <- fetch(rs,n=1);
tableName<- as.character(dataset_name);

#Close connection 
dbDisconnect( dbListConnections( dbDriver( drv = "MySQL"))[[1]]);


#Connect to BIT_Dev(mysql) database to fetch connection details
mydb <- dbConnect(MySQL(), user='appuser', password='appuser123', dbname='BIT_dev', host='192.168.2.45');
rs = dbSendQuery(mydb, paste0( "SELECT * FROM Data_Connection WHERE connection_id = (SELECT connection_id FROM Dataset  WHERE dataset_id= " ,datasetId, ");" , sep=""));    
connectionDetails <- fetch(rs,n=1);

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
                rs = dbSendQuery(mydb_mySQL, paste0("Select * from ",tableName," LIMIT 10;",sep=""));
                tablemySQL <- fetch(rs,n=1);

                ###Convert dataframe to JSON###
                #Get data tpes
                preData<-sapply(tablemySQL,typeof);
                preData.df=data.frame(preData);

                #Subset of dimensions
                Dimension <- subset(preData.df, preData== "character");
                preDim <- data.frame(row.names(Dimension));
                names(preDim)[1] <-paste("Dimension");
                Dim <- toJSON(preDim) 

                #Sub set of Measures
                Measure <- subset(preData.df, preData!= "character");
                preMeasure <- data.frame(row.names(Measure));
                names(preMeasure)[1] <-paste("Measure");
                Measure <- toJSON(preMeasure)

                #Merge Dimensions and Measures
                Dim2<-fromJSON(Dim); 
                Measure2<-fromJSON(Measure);
                merge <- rbind.fill(Dim2,Measure2);

                meregeJSON<- toJSON(merge);

                return(meregeJSON)
                

        }
#MSSQL
 	if (data_source_type_id==3){

		host= paste0(ip_address,"/",dbname,";user=", username ,";password=", password);
                mydb_MSSQL = dbConnect(SQLServer(), host);
                rs = dbSendQuery(mydb_MSSQL, paste0("Select TOP 10 * from ",tableName,";",sep=""));
                tableMSSQL <- fetch(rs,n=1);

                ###Convert dataframe to JSON###
                #Get data tpes
                preData<-sapply(tableMSSQL,typeof);
                preData.df=data.frame(preData);

                #Subset of dimensions
                Dimension <- subset(preData.df, preData== "character");
                preDim <- data.frame(row.names(Dimension));
                names(preDim)[1] <-paste("Dimension");
                Dim <- toJSON(preDim) 

                #Sub set of Measures
                Measure <- subset(preData.df, preData!= "character");
                preMeasure <- data.frame(row.names(Measure));
                names(preMeasure)[1] <-paste("Measure");
                Measure <- toJSON(preMeasure)

                #Merge Dimensions and Measures
                Dim2<-fromJSON(Dim); 
                Measure2<-fromJSON(Measure);
                merge <- rbind.fill(Dim2,Measure2);

                meregeJSON<- toJSON(merge);

                return(meregeJSON);
                
	}
#Oracle Database
 	if (data_source_type_id==4){table="Oracle Database"}
#Hadoop
 	if (data_source_type_id==5){table="Hadoop"}
#Invalid Input
	if (data_source_type_id>=6 || connectionId<1){table="Invalid Input"}

}