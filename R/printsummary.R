printsummary <- function(mydata){
  #override default 
  options(max.print=99999999);
  options(width=180);
  
  #print
  print(xtable(mydata, type = "html", include.rownames = F))
  
}