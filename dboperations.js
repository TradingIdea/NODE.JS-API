var config = require('./dbconfig');
const sql = require('mssql');


async function getUsersfx() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from UsersFx");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getUserfx(userfxId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, userfxId)
            .query("SELECT * from UsersFx where Id = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addUserfx(usersfx) {
    
    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('FullName', sql.NVarChar, usersfx.FullName)
            .input('Edu', sql.NVarChar, usersfx.Edu)
            .input('NationalCode', sql.NVarChar, usersfx.NationalCode)
            .input('City', sql.NVarChar, usersfx.City)
            .input('Age', sql.NVarChar, usersfx.Age)
            .input('Phone', sql.NVarChar, usersfx.Phone)
            .input('Date', sql.NVarChar, usersfx.Date)
            .input('Description', sql.NVarChar, usersfx.Description)
            .execute('InsertFx');
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}



async function deleteUsersfx(usersfxId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, usersfxId)
            .query("DELETE from UsersFx where Id = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function putUsersfx(usersfxId,usersfx) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, usersfxId)
            .input('FullName', sql.NVarChar, usersfx.FullName)
            .input('Edu', sql.NVarChar, usersfx.Edu)
            .input('NationalCode', sql.NVarChar, usersfx.NationalCode)
            .input('City', sql.NVarChar, usersfx.City)
            .input('Age', sql.NVarChar, usersfx.Age)
            .input('Phone', sql.NVarChar, usersfx.Phone)
            .input('Date', sql.NVarChar, usersfx.Date)
            .input('Description', sql.NVarChar, usersfx.Description)
            .query("UPDATE UsersFx SET FullName=@FullName,Edu=@Edu,NationalCode=@NationalCode,"
            +"Age=@Age,Phone=@Phone,Date=@Date,Description=@Description where Id = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}





module.exports = {
    getUsersfx: getUsersfx,
    getUserfx : getUserfx,
    addUserfx : addUserfx,
    deleteUsersfx : deleteUsersfx,
    putUsersfx : putUsersfx,
    
}