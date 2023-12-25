This component is a table. Table is to be used to display data in an organised fashion. This component works well with JSON format. 

props:
    1) name
        The name of the table. Takes in a string.
    2) description
        The description of the table. Takes in a string.
    3) header
        The name of each column. Takes in a list of strings.
    4) rowAttributes
        The key of the table data. Takes in a list of strings.
    5) tableData
        The actual data to be render in the table row. Takes in a list of objects.
    6) topButton
        The text in the top button. Takes in a string.
    7) handleAdd
        The function to be called when the top button is clicked (usually a navigate). Takes in a reference to a function.
    8) dataButton
        The text in the button that is rendered in each table row. Takes in a string.
    9) handleEdit
        The function to be called when the data button is clicked (usually a navigate). Takes in a reference to a function.

Refer to the example under react-design-system\src\pages\DashboardCode to understand how to utilise this component