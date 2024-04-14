const parseQuery = require('./queryParser');
const readCSV = require('./csvReader');

async function executeSELECTQuery(query) {
    const { fields, table } = parseQuery(query);
    const data = await readCSV(`${table}.csv`);
    console.log(data);
    // Filter the fields based on the query
    return data.map(row => {
        const filteredRow = {};
        fields.forEach(field => {
            filteredRow[field] = row[field];
        });
        return filteredRow;
    });
}
// const query = "SELECT name FROM sample";
// executeSELECTQuery(query).then((result)=>{console.log(result)}).catch((err)=>console.log(err));

module.exports = executeSELECTQuery;