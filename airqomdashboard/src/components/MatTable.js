import MaterialTable from 'material-table'


const columns = [
    {title: "ID", field: "id"},
    {title: "Champion", field: "lastName"},
    {title: "Number", field: "Number"},
    {title: "Residency", field: "Residency"},

  ];
  
  const rows = [
    { id: "AQ1", lastName: 'AirQommunity', Number: '0780303876', Residency: "Makerere" },
    { id: "AQ2", lastName: 'AirQo', Number: '0780300000', Residency: "Makerere" },
  
  ];
  
const MatTable =()=>{

    
    return (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            columns={columns}
            data={rows}
            title="Demo Title"
          />
        </div>
      )
    }

export default MatTable;