mssql <- function(){
driver <- JDBC("com.microsoft.sqlserver.jdbc.SQLServerDriver", "demo/inst/www/etc/sqljdbc4.jar")
conn.JDBC <- dbConnect(driver,"jdbc:sqlserver://192.168.2.113;databaseName=MicrosoftBIRetailDemo","appuser","appuser123")
data<- dbGetQuery(conn.JDBC, "select top 10 * from FactOnlineSales;")
data
}