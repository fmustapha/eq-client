export function formatDate (data) {
  const newDat = [];
  for(let dat of data){
    let newDay = new Date(dat.date);
    newDay = newDay.toDateString();
    let obj = {...dat,date:newDay}
    newDat.push(obj);
  }
  return newDat;
};