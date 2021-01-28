const db = require('../db')

module.exports.getInvoice=function(req,res){
  let page =req.query.page;
  let limit=req.query.limit;
  console.log("page "+page, "size " +limit);
  db.query('select * from ... ',(err,table)=>{
    if(err){
      return console.log(err);
    }else{
      console.log(table.rows[0]);
      res.json(table.rows[0].count);
      res.end();
    }
  })
}