const MongoClient=require("mongodb").MongoClient;

const url="mongodb://127.0.0.1:27017/";

const client=new MongoClient(url);

const connection= async ()=>{

    try {
        await client.connect();
        const database=client.db("Human-Resource");
        const collection=database.collection("employee");



        // 1) Query the collection ""employee"" and list all the documents

        const dbResponce1= collection.find();
         const responceCorrect1=await dbResponce1.toArray();
         console.log(" first query (Data base Responce) =>",responceCorrect1);


       // 2) Query the collection ""employee"" and list the employees who are having salary more than 30000

       const dbResponce2= collection.find({salary:{$gt:"30000"}});
         const responceCorrect2=await dbResponce2.toArray();
         console.log("Second Query (Data base Responce) =>",responceCorrect2);


         // 3) Query the collection ""employee"" and list the employees who are having experience more than 2 years.

         const dbResponce3= collection.find({overallExp:{$gt:"2"}});
         const responceCorrect3=await dbResponce3.toArray();
         console.log(" Third Query (Data base Responce) =>",responceCorrect3);



         // 4) Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 

         const dbResponce4= collection.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}});
         const responceCorrect4=await dbResponce4.toArray();
         console.log("Fourth Query (Data base Responce) =>",responceCorrect4);


         // 5) Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

         const dbResponce5= collection.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}});
         const responceCorrect5=await dbResponce5;
         console.log("Fifth Query (Data base Responce) =>",responceCorrect5);



         // 6) Delete all the documents from ""employee"" where last company is Y"

         const dbResponce6= collection.deleteMany({lastCompany:"Y"});
         const responceCorrect6=await dbResponce6;
         console.log("Sixth Query (Data base Responce) =>",responceCorrect6);


        await client.close();
       
       
    } catch (error) {
        console.log("Some Error =>",error);
        return error.message;
    }
}
// module.exports=connection;

connection();
