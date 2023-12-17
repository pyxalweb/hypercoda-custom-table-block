// **************************************
//  WordPress Tables: Mobile
//  example: https://codepen.io/pyxal/pen/bGzmPpM
//  Requires: 'custom-table-block' plugin
//  2023-12-04 by Alex Winter / HyperCoda
// **************************************
const responsiveTable = () => {
  // Select all tables with the class '.wp-block-table__a'
  const tables = document.querySelectorAll('.wp-block-table--a table');

  // Iterate through each selected table
  tables.forEach(table => {
    // Get the header row of the table
    const thead = table.querySelector('thead tr');
    const theadLength = thead.children.length;

    // Check if the first <th> element is empty
    if (thead.children[0].innerHTML.trim() !== '') {
      return;
    }

    // Iterate through each <th> element (excluding the first one)
    for (let i = 1; i < theadLength; i++) {
      // Create a new table for each <th> element
      const newTable = document.createElement('table');
      // Add classes to the new table for styling purposes
      newTable.classList.add(
        'wp-block-table__new-table-a',
        `wp-block-table__new-table-a--${i}`
      );

      // Create a new <thead> and <tr> structure within each new table
      const newThead = document.createElement('thead');
      const newTr = document.createElement('tr');
      // Create a new <th> and append the content of the original <th> (excluding the first one)
      const newTh = document.createElement('th');
      newTh.innerHTML = thead.children[i].innerHTML;
      newTr.appendChild(newTh);
      newThead.appendChild(newTr);
      newTable.appendChild(newThead);

      // Create a new <tbody> for the remaining rows
      const newTbody = document.createElement('tbody');

      // Iterate through each <tbody><tr> element
      const tbodyRows = table.querySelectorAll('tbody tr');
      tbodyRows.forEach(tbodyRow => {
        // Create a new <tr> structure within each new tbody
        const newTrBody = document.createElement('tr');

        // Create a new <td> and append the content of the first <td> in the original table
        const newTdLabel = document.createElement('td');
        newTdLabel.innerHTML = tbodyRow.children[0].innerHTML;

        // Create a new <td> and append the content of the corresponding <td> in the original table
        const newTdValue = document.createElement('td');
        newTdValue.innerHTML = tbodyRow.children[i].innerHTML;

        // Append the content of both <td> elements within the same <tr>
        newTrBody.appendChild(newTdLabel);
        newTrBody.appendChild(newTdValue);

        // Append the new <tr> to the new <tbody>
        newTbody.appendChild(newTrBody);
      });

      // Append the new tbody to the new table
      newTable.appendChild(newTbody);

      // Insert the new table before the original table in the DOM
      table.parentNode.insertBefore(newTable, table);
    }
  });
};
responsiveTable();