agg<-function(mydata){
aggregate(mydata[,2], by=list(mydata[,1]), FUN=sum);

}