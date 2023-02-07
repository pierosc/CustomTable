HOW TO USE THE CUSTOM TABLE

Import the component

![image](https://user-images.githubusercontent.com/84884384/214341820-a6d18953-54d3-419e-acf1-29013decc8e2.png)

Create a useState variable to get the selection data from the table

![image](https://user-images.githubusercontent.com/84884384/214342840-77630aa5-07b3-48f0-9b4c-5afd7dc179e2.png)

Create a JSON with all the settings you need. The more customization you need, the larger the JSON is going to be. Here are two examples of settings but you can find more on the Custom Components menu

![image](https://user-images.githubusercontent.com/84884384/214342639-229a8469-e384-44cd-8b57-b8a4fc4bb78d.png)

![image](https://user-images.githubusercontent.com/84884384/214343987-e3cef5a3-e7ce-4538-a4b7-2363c5bfeff2.png)

In order to understand all the settings the custom table can process, here it is the table with all settings currently avaliable

<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">

<head>

<meta name=ProgId content=Excel.Sheet>
<meta name=Generator content="Microsoft Excel 15">
<link id=Main-File rel=Main-File
href="file:///C:/Users/PSALDA~1/AppData/Local/Temp/msohtmlclip1/01/clip.htm">
<link rel=File-List
href="file:///C:/Users/PSALDA~1/AppData/Local/Temp/msohtmlclip1/01/clip_filelist.xml">
<style>
<!--table
	{mso-displayed-decimal-separator:"\.";
	mso-displayed-thousand-separator:"\,";}
@page
	{margin:.75in .7in .75in .7in;
	mso-header-margin:.3in;
	mso-footer-margin:.3in;}
tr
	{mso-height-source:auto;}
col
	{mso-width-source:auto;}
br
	{mso-data-placement:same-cell;}
td
	{padding-top:1px;
	padding-right:1px;
	padding-left:1px;
	mso-ignore:padding;
	color:black;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:Calibri, sans-serif;
	mso-font-charset:0;
	mso-number-format:General;
	text-align:general;
	vertical-align:bottom;
	border:none;
	mso-background-source:auto;
	mso-pattern:auto;
	mso-protection:locked visible;
	white-space:nowrap;
	mso-rotate:0;}
.xl63
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;}
.xl64
	{text-align:center;
	vertical-align:middle;
	white-space:normal;}
.xl65
	{text-align:center;
	vertical-align:middle;
	border:.5pt solid windowtext;
	white-space:normal;}
.xl66
	{text-align:center;
	vertical-align:middle;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl67
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:.5pt solid windowtext;
	background:#DDEBF7;
	mso-pattern:black none;
	white-space:normal;}
.xl68
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	background:#DDEBF7;
	mso-pattern:black none;
	white-space:normal;}
.xl69
	{text-align:center;
	vertical-align:middle;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:none;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl70
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	background:#F4B084;
	mso-pattern:black none;
	white-space:normal;}
.xl71
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	background:#F4B084;
	mso-pattern:black none;
	white-space:normal;}
.xl72
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	background:#F4B084;
	mso-pattern:black none;
	white-space:normal;}
.xl73
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	background:#DDEBF7;
	mso-pattern:black none;}
.xl74
	{text-align:left;
	vertical-align:middle;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:none;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl75
	{text-align:left;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:.5pt solid windowtext;
	background:#DDEBF7;
	mso-pattern:black none;
	white-space:normal;}
.xl76
	{text-align:left;
	vertical-align:middle;
	white-space:normal;}
.xl77
	{text-align:left;
	vertical-align:middle;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl78
	{text-align:left;
	vertical-align:middle;
	border:.5pt solid windowtext;
	white-space:normal;}
.xl79
	{color:windowtext;
	text-align:left;
	vertical-align:middle;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl80
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	background:#DDEBF7;
	mso-pattern:black none;}
.xl81
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	background:#DDEBF7;
	mso-pattern:black none;}
.xl82
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	background:#DDEBF7;
	mso-pattern:black none;}
-->
</style>
</head>

<body link="#0563C1" vlink="#954F72">



name | type | default | description
-- | -- | -- | --
dense | "small",   "medium" | "medium" | Sets the Height   of all the table's cells
selectionType | "single",   "singleToggle", "multi" | "multi" | single   - Selecciona solo uno a la vez, singleToggle - Selecciona solo uno a la vez y   puede deseleccionar, multi - selecciona multiples opciones
order | bool | false | It   activates and deactivates the sort function.
height | String, CSS   values | "100%" | Sets the   max-height css property of the table. If the table is higher than that, it   makes the table scrolleable. It doesn't affect the pagination.
elevation | number from 0   to 24 | 0 | Adds an   elevation effect to the table.
consoleLog | bool | false | It shows some   variables when they changed.
toolbar | [{}] | null | Display toolbar   in table
title | string | "" | Display the   title on the toolbar
color | string | "white" | Sets   the background color of the toolbar
labelColor | "#nnn",   "#nnnnnn", "rgb()", "rgba()",   "hsl()", "hsla()", "color()" | "rgb(0,0,0)" | Color   of the title from the toolbar
header | [{}] | null | Display header   in table
align | "right",   "left, "center", "justify" | "center" | Set the   text-align on the table cell content.
padding | "none","normal" | "normal" | Set   the padding property of the cells
color | string | "white" | Set   the background color of the header
labelColor | "#nnn",   "#nnnnnn", "rgb()", "rgba()",   "hsl()", "hsla()", "color()" | "rgb(0,0,0)" | Color   of the text from the header and the color of the checkbox
checkbox | bool | false | Display   the checkbox. It won't display it if the checkbox from the body is false,   null or if the selectionType is single or singleTogle
checkboxLabel | string | null | Display   the string on the left of the checkbox
Body
checkbox | bool | false | Display the   checkbox.
checkboxType | "checkbox",   "radio" | "checkbox" | Set   the component to Checkbox or RadioButton
align | "right",   "left, "center", "justify" | "center" | Set the   text-align on the table cell content.
labelColor | String,   CSS color values | "rgba(0,   0, 0, 0.87)" | Set   the label color of the rows
labelHoverColor | String, CSS   color values | "rgba(0,   0, 0, 0.87)" | Set the label   Hover color of the rows
labelSelectedColor | "#nnn",   "#nnnnnn", "rgb()", "rgba()",   "hsl()", "hsla()", "color()" | "rgba(0,   0, 0, 0.87)" | Set the label   color of the selected rows
labelSelectedHoverColor | String, CSS   color values | "rgba(0,   0, 0, 0.87)" | Set the label   Hover color of the selected rows
rowColor | String, CSS   color values | "rgb(255,255,255)" | Set the Hover   background color of the rows
rowHoverColor | String, CSS   color values | "rgba(0,   0, 0, 0.04)" | Set the   background color of the rows
rowSelectedColor | String, CSS   color values | "rgba(25,   118, 210, 0.08)" | Set the   background color of the selected row
rowSelectedHoverColor | String, CSS   color values | "rgba(25,   118, 210, 0.12)" | Set the Hover   background color of the selected row
padding | "none","normal" | "normal" | Set the padding   property of the cells
Pagination | [{}] | null | Display header   in table
color | String, CSS   color values | "white" | Set the   background color.
labelColor | String, CSS   color values | "rgba(0,   0, 0, 0.87)" | Set the color   of the label, the numbers and the active buttons that change the page.
label | String | "Rows   per page:" | Set   the string from the Pagination section
rowsPerPageOptions | Array   of numbers | [5,   10, 25] | Set   the rows per page Options

</body>

</html>

To manage the data you have to create a JSON with all the data needed. This JSON is going to look like this.
![image](https://user-images.githubusercontent.com/84884384/214345060-a81598a6-952f-4552-81ae-b25e3894dbf7.png)
If you need to know more about this JSON, here it is the table with some explanations

<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">

<head>

<meta name=ProgId content=Excel.Sheet>
<meta name=Generator content="Microsoft Excel 15">
<link id=Main-File rel=Main-File
href="file:///C:/Users/PSALDA~1/AppData/Local/Temp/msohtmlclip1/01/clip.htm">
<link rel=File-List
href="file:///C:/Users/PSALDA~1/AppData/Local/Temp/msohtmlclip1/01/clip_filelist.xml">
<style>
<!--table
	{mso-displayed-decimal-separator:"\.";
	mso-displayed-thousand-separator:"\,";}
@page
	{margin:.75in .7in .75in .7in;
	mso-header-margin:.3in;
	mso-footer-margin:.3in;}
tr
	{mso-height-source:auto;}
col
	{mso-width-source:auto;}
br
	{mso-data-placement:same-cell;}
td
	{padding-top:1px;
	padding-right:1px;
	padding-left:1px;
	mso-ignore:padding;
	color:black;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:Calibri, sans-serif;
	mso-font-charset:0;
	mso-number-format:General;
	text-align:general;
	vertical-align:bottom;
	border:none;
	mso-background-source:auto;
	mso-pattern:auto;
	mso-protection:locked visible;
	white-space:nowrap;
	mso-rotate:0;}
.xl65
	{text-align:center;
	vertical-align:middle;
	white-space:normal;}
.xl66
	{text-align:center;
	vertical-align:middle;
	border:.5pt solid windowtext;
	white-space:normal;}
.xl67
	{text-align:center;
	vertical-align:middle;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl68
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	background:#DDEBF7;
	mso-pattern:black none;
	white-space:normal;}
.xl69
	{text-align:center;
	vertical-align:middle;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:none;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl70
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:1.0pt solid windowtext;
	background:#F4B084;
	mso-pattern:black none;
	white-space:normal;}
.xl71
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:none;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	background:#F4B084;
	mso-pattern:black none;
	white-space:normal;}
.xl72
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:none;
	background:#F4B084;
	mso-pattern:black none;
	white-space:normal;}
.xl73
	{text-align:left;
	vertical-align:middle;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:none;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl74
	{text-align:left;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:1.0pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:.5pt solid windowtext;
	background:#DDEBF7;
	mso-pattern:black none;
	white-space:normal;}
.xl75
	{text-align:left;
	vertical-align:middle;
	white-space:normal;}
.xl76
	{text-align:left;
	vertical-align:middle;
	border-top:none;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;
	border-left:.5pt solid windowtext;
	white-space:normal;}
.xl77
	{text-align:left;
	vertical-align:middle;
	border:.5pt solid windowtext;
	white-space:normal;}
.xl78
	{text-align:center;
	vertical-align:middle;
	border-top:1.0pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:1.0pt solid windowtext;
	border-left:.5pt solid windowtext;
	background:#DDEBF7;
	mso-pattern:black none;
	white-space:normal;}
-->
</style>
</head>

<body link="#0563C1" vlink="#954F72">



name | type | default | description
-- | -- | -- | --
data | JSON | null | The data that   will be displayed
dataKey | String | "" | The   key from the Json that you want to use as the key for the table mapping
Header | Array | null | It contains the   data from the label and the id
label | String | null | The label you   want to display on your header
id | String | null | It's   the key from the Json you wants the values from



</body>

</html>

And for the last step you have to call the component with the variables and settings for that table.
![image](https://user-images.githubusercontent.com/84884384/214341470-390fb900-36c7-4152-9771-9672b29463a2.png)
