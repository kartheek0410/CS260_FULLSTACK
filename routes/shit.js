//--------------------------------------signup call--------------------------------------------
exports.signup = function(req, res){
    message = '';
    
    if(req.method == "POST"){
       var post  = req.body;
       var name= post.user_name;
       var pass= post.password;
       var fname= post.first_name;
       var lname= post.last_name;
       var mob= post.mob_no;
 
       var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";
 
       var query = db.query(sql, function(err, result) {
 
          message = "Succesfully! Your account has been created.";
          res.render('signup.ejs',{message: message});
       });
 
    } else {
       res.render('signup');
    }
 };
  
 //-----------------------------------------------login page call------------------------------------------------------
 exports.login = function(req, res){
    var message = '';
    var sess = req.session; 
 
    if(req.method == "POST"){
       var post  = req.body;
       var name= post.user_name;
       var pass= post.password;
      
       var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";  
       console.log(name);                         
       db.query(sql, function(err, results){      
          if(results.length){
             req.session.userId = results[0].id;
             req.session.user = results[0];
             console.log(results[0].id);
             res.redirect('/dashboard');
          }
          else{
             message = 'Wrong Credentials.';
             res.render('index.ejs',{message: message});
          }
                  
       });
    } else {
       res.render('index.ejs',{message: message});
    }
            
 };
 //----------------------------------------dashboard page----------------------------------------------------------
 exports.dashboard = function(req, res, next) {
   
    if(req.method == "POST"){
       var post  = req.body;
       
       
       
       // Proceed with form submission
       var Advertising= post.Advertising;
       var PAF= post.PAF;
       var DS= post.DS;
       var fname= post.fname;
       var mname= post.mname;
       var lname= post.lname;
       var nationality= post.nationality;
       var dob= post.dob;
       var gender= post.gender;
       var mstatus= post.mstatus;
       var id_proof= post.id_proof;
       var pic= post.pic;
       var father_name= post.father_name;
       var photo= post.photo;
       var mobile= post.mobile;
       var amobile= post.amobile;
       var aemail= post.aemail;
       var cadd= post.cadd;
       var cadd1= post.cadd1;
       var cadd2= post.cadd2;
       var cadd3= post.cadd3;
       var cadd4= post.cadd4;
       var padd= post.padd;
       var padd1= post.padd1;
       var padd2= post.padd2;
       var padd3= post.padd3;
       var padd4= post.padd4;
       
       var sql = "INSERT INTO `page1`(`Advertising`, `PAF`, `DS`, `fname`, `mname`, `lname`, `nationality`, `dob`, `gender`, `mstatus`, `id_proof`, `pic`, `father_name`, `photo`, `mobile`, `amobile`, `aemail`, `cadd`, `cadd1`, `cadd2`, `cadd3`, `cadd4`, `padd`, `padd1`, `padd2`, `padd3`, `padd4`) VALUES ('" + Advertising + "', '" + PAF + "', '" + DS + "', '" + fname + "', '" + mname + "', '" + lname + "', '" + nationality + "', '" + dob + "', '" + gender + "', '" + mstatus + "', '" + id_proof + "', '" + pic + "', '" + father_name + "', '" + photo + "', '" + mobile + "', '" + amobile + "', '" + aemail + "', '" + cadd + "', '" + cadd1 + "', '" + cadd2 + "', '" + cadd3 + "', '" + cadd4 + "', '" + padd + "', '" + padd1 + "', '" + padd2 + "', '" + padd3 + "', '" + padd4 + "')";
 
       var query = db.query(sql, function(err, result) {
          if (err) {
             // Handle error
             console.error(err);
             res.status(500).send("Error occurred while saving data.");
          } else {
             // Data inserted successfully, redirect to page 2
             console.log('appi');
             res.redirect('/page');
          }
       });
 
    } else {
       res.render('dashboard');
    }
 };
 //------------------------------page 2----------------------------
 exports.page = function(req, res,next) {
    console.log('sri0');
   
    if (req.method == "POST") {
        console.log('sri1');
        var post = req.body;
        var ui = post.ui;
        var dp = post.dp;
        var name = post.name;
        var year = post.year;
        var date = post.date;
        var da = post.da;
        var title = post.title;
        var dc1 = post.dc1;
        var ui1 = post.ui1;
        var bs2 = post.bs2;
        var yj2 = post.yj2;
        var yc2 = post.yc2;
        var d2 = post.d2;
        var pc2 = post.pc2;
        var di2 = post.di2;
        var dc3 = post.dc3;
        var ui3 = post.ui3;
        var bs3 = post.bs3;
        var yj3 = post.yj3;
        var yc3 = post.yc3;
        var d3 = post.d3;
        var pc3 = post.pc3;
        var d4 = post.d4;
       //  var school1=post.school1;
       //  var passing_year1=post.passing_year1;
       //  var s_perce1=post.s_perce1;
       //  var s_rank1=post.s_rank1;
       //  var school2=post.school2;
       //  var passing_year2=post.passing_year2;
       //  var s_perce2=post.s_perce2;
       //  var s_rank2=post.s_rank2;
        console.log('srikar1');
        // Your insert statement for table `page2`
        var sql = "INSERT INTO `page2`(`ui`, `dp`, `name`, `year`, `date`, `da`, `title`, `dc1`, `ui1`, `bs2`, `yj2`, `yc2`, `d2`, `pc2`, `di2`, `dc3`, `ui3`, `bs3`, `yj3`, `yc3`, `d3`, `pc3`, `d4`) VALUES ('" + ui + "', '" + dp + "', '" + name + "', '" + year + "', '" + date + "', '" + da + "', '" + title + "', '" + dc1 + "', '" + ui1 + "', '" + bs2 + "', '" + yj2 + "', '" + yc2 + "', '" + d2 + "', '" + pc2 + "', '" + di2 + "', '" + dc3 + "', '" + ui3 + "', '" + bs3 + "', '" + yj3 + "', '" + yc3 + "', '" + d3 + "', '" + pc3 + "', '" + d4 + "')";
 
       //  // Check if the form fields are arrays before iterating over them
        
 
       //      // Iterate over the arrays to save data to the database
       //      for (let i = 0; i < degree.length; i++) {
       //          var degree = degree[i];
       //          var college = college[i];
       //          var subjects = subjects[i];
       //          var yoj = yoj[i];
       //          var yog = yog[i];
       //          var duration = duration[i];
       //          var perce = perce[i];
       //          var rank = rank[i];
 
       //          // Your insert statement for table `page2sub`
       //          var que = "INSERT INTO `page2sub`(`degree`, `college`, `subjects`, `yoj`, `yog`, `duration`, `perce`, `rank`) VALUES ('" + degree + "', '" + college + "', '" + subjects + "', '" + yoj + "', '" + yog + "', '" + duration + "', '" + perce + "', '" + rank + "')";
       //          console.log('srikar2');
       //      }
 
            // Execute the queries
            var query = db.query(sql, function(err, result) {
                if (err) {
                    console.error(err);
                    res.status(500).send("Error occurred while saving data.");
                } else {
                   res.redirect('/page3');
                   //  var query2 = db.query(que, function(err2, result2) {
                   //      if (err2) {
                   //          console.error(err2);
                   //          res.status(500).send("Error occurred while saving data.");
                   //      } else {
                   //          console.log('Data inserted successfully');
                   //          res.redirect('/page3');
                   //      }
                   //  });
                }
            });
        } else {
            console.error("Add degree is not an array");
            res.status(500).send("Error occurred while saving data.");
        }
    };
 
 
 
 //------------------------------------logout functionality----------------------------------------------
 exports.logout=function(req,res){
    req.session.destroy(function(err) {
       res.redirect("/login");
    })
 };
 //--------------------------------render user details after login--------------------------------
 exports.profile = function(req, res){
 
    var userId = req.session.userId;
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
    var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
    db.query(sql, function(err, result){  
       res.render('profile.ejs',{data:result});
    });
 };
 //---------------------------------edit users details after login----------------------------------
 exports.editprofile=function(req,res){
    var userId = req.session.userId;
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
    var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
    db.query(sql, function(err, results){
       res.render('edit_profile.ejs',{data:results});
    });
 };