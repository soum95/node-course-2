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

db.collection('Users').find({name :'andrew'}).toArray().then((docs)=>{

console.log(JSON.stringify(docs,undefined,2));
});



db.close();
	});