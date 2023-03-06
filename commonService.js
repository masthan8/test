

module.exports = {
  rolesAndPrivileges: async function (id, req) {
    console.log(req);
    console.log(req.star);
    let array = req.star
    for (let addRole of array) {
      let query = 'INSERT INTO roles_has_privileges (role_id, permission_id) VALUES (?,?);'
      try {
        let rows = await dbcon.query(query,[id,addRole])
        console.log('successfully inserted');
      }
      catch (err) {
        console.log(err);
      }
    }
  },
  updatePrivileges: async function (id, req) {
    console.log(id, 'my name is irshath');
    let query = 'delete from roles_has_privileges where role_id=?'
    try {
      let rows = await dbcon.query(query,[id])
      console.log('successfully installed');
      let arrays = req.star
      for (let array of arrays) {
        let updateQuery = 'INSERT INTO roles_has_privileges (role_id, permission_id) VALUES( (?,?);'
        let updateRows = await dbcon.query(updateQuery,[ id, array])
        console.log('successfully updated');
      }

    }
    catch (err) {
      console.log(err);
    }
  },
  deletePrivilege: async function (req) {
    console.log(req.id);
    let query = 'delete from roles_has_privileges where role_id=?'
    try {
     
      let rows = await dbcon.query(query,[req.id])
      console.log(rows);
      if(rows.affectedRows>0){
        console.log('successfully deleted');
    }
    else{
      console.log('not successfully deleted');
    }
  }
    catch (err) {
      console.log(err);
    }
  }


}

