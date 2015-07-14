printsummary <- function(mydata){
  #override default 
  options(max.print=99999999);
  options(width=180);
  a <- "**********************************DATA SET**********************************"
  b <- "**********************************Aggregate**********************************"
  
  #print
  print(a) 
  print(mydata)

  print(b)  
  mydata <- aggregate(mydata[,2], by=list(mydata[,1]), FUN=sum)
  print(mydata)
  invisible();
  
}