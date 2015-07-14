printsummary <- function(mydata){
  #override default 
  options(max.print=99999999);
  options(width=180);
  
  #print
  mydata <- aggregate(mydata[,2], by=list(mydata[,1]), FUN=sum)
  print(mydata)
invisible();
  
}