DivTables
=========

This snippet demonstrates rendering a table using divs and css display: 
attributes. It includes a master outer table with three inner tables that 
use css overflow: attributes to introduce scroll bars for a portion of 
the table.

Example:
<div class="table">
	<div class="table-row">
		<div class="table-cell">
		</div>
	</div>
</div>

.table
{
	display: table;
}
.table-row
{
	display: table-row;
}
.table-cell
{
	display: table-cell;
}