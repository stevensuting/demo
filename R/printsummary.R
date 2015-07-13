printsummary <- function(mydata){
  #override default 
  options(max.print=99999999);
  options(width=120);
  
  #print
  print(summary(mydata))
  invisible()
}