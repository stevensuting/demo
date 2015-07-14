printsummary <- function(mydata){
  #override default 
  options(max.print=99999999);
  options(width=180);
  #print
  print(mydata)
  invisible();
}