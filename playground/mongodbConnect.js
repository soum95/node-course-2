//const MongoClient=require('mongodb').MongoClient;
const  {MongoClient,ObjectID}=require('mongodb');
var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
	{
		if(err){
		return	console.log('unable to vonnect');
		}
console.log('conncted');
db.collection('Todos').insertOne({
text :' somthing to do',
completed : false
},(err,result)=>{
	if(err){
		return console.log('unable t inssert',err);

	}
	console.log(JSON.stringify(result.ops,undefined,2));
});
db.collection('users').insertOne({

name :' soumaya',
age : 22 ,
location :'ghom'
},(err,result)=>{
	if(err){
		return console.log('unable t inssert user ',err);

	}
	console.log(result.ops[0]._id.getTimestamp());
});
db.close();
	});