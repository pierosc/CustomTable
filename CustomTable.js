import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomToolbar from "./CustomToolbar/CustomToolbar";
import CustomHeader from "./CustomHeader/CustomHeader";
import EditIcon from "@mui/icons-material/Edit";

//**************************************************************************
//********************************* ORDER **********************************

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

//**************************************************************************
//******************************* TABLE BODY *******************************
//**************************************************************************

function CustomTable({ settings, data, selected, setSelected }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  // const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(
    settings?.pagination
      ? settings?.pagination[0].rowsPerPageOptions
        ? settings?.pagination[0]?.rowsPerPageOptions[0]
        : 5
      : 5
  );

  //**************************************************************************
  //********************************* ORDER **********************************

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  //**************************************************************************
  //******************************* SELECTION ********************************

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data?.data.map((n) => n);
      setSelected(newSelected);
      // setSelection(newSelected);
      return;
    }
    setSelected([]);
    // setSelection([]);
  };

  const handleClick = (event, name, index) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (settings?.selectionType == "single") {
      newSelected = newSelected.concat(name);
    } else if (settings?.selectionType == "singleToggle") {
      newSelected = JSON.stringify(selected).includes(JSON.stringify(name))
        ? []
        : newSelected.concat(name);
    } else if (settings?.selectionType == "multi") {
      if (JSON.stringify(selected).includes(JSON.stringify(name))) {
        let index = selected.findIndex((object) => {
          return object[data?.dataKey] === name[data?.dataKey];
        });
        newSelected = selected
          .slice(0, index)
          .concat(selected.slice(index + 1, selected.length + 1));
      } else {
        newSelected = newSelected.concat(selected, name);
      }
    }

    setSelected(newSelected);
  };

  //**************************************************************************
  //******************************* PAGINATION *******************************

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.data.length) : 0;

  //**************************************************************************
  //********************************* STYLES *********************************

  const rowColor = (status) => {
    switch (status) {
      case "selected":
        return settings?.body[0]?.rowSelectedColor
          ? settings?.body[0]?.rowSelectedColor
          : "rgba(25, 118, 210, 0.08)";
        break;
      case "normal":
        return settings?.body[0]?.rowColor
          ? settings?.body[0]?.rowColor
          : "rgb(255,255,255)";
        break;
      case "selected-hover":
        return settings?.body[0]?.rowSelectedHoverColor
          ? settings?.body[0]?.rowSelectedHoverColor
          : "rgba(25, 118, 210, 0.12)";
        break;
      case "hover":
        return settings?.body[0]?.rowHoverColor
          ? settings?.body[0]?.rowHoverColor
          : "rgba(0, 0, 0, 0.04)";
        break;
      default:
        return "white";
    }
  };

  const labelColor = (status) => {
    switch (status) {
      case "selected":
        return settings?.body[0]?.labelSelectedColor
          ? settings?.body[0]?.labelSelectedColor
          : "rgba(0, 0, 0, 0.87)";
        break;
      case "normal":
        return settings?.body[0]?.labelColor
          ? settings?.body[0]?.labelColor
          : "rgba(0, 0, 0, 0.87)";
        break;
      case "selected-hover":
        return settings?.body[0]?.labelSelectedHoverColor
          ? settings?.body[0]?.labelSelectedHoverColor
          : settings?.body[0]?.labelSelectedColor
          ? settings?.body[0]?.labelSelectedColor
          : "rgba(0, 0, 0, 0.87)";
        break;
      case "hover":
        return settings?.body[0]?.labelHoverColor
          ? settings?.body[0]?.labelHoverColor
          : settings?.body[0]?.labelColor
          ? settings?.body[0]?.labelColor
          : "rgba(0, 0, 0, 0.87)";
        break;
      default:
        return "rgba(0, 0, 0, 0.87)";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={settings?.elevation ? settings?.elevation : 0}
        sx={{ width: "100%" }}
      >
        <TableContainer
          sx={{ maxHeight: settings?.height ? settings?.height : "100%" }}
        >
          <Table
            size={
              settings?.dense == "small"
                ? "small"
                : settings?.dense == "medium"
                ? "medium"
                : "medium"
            }
          >
            {/* //***************************************************************************
            //**************************** HEADER & TOOLBAR ***************************** */}

            {settings?.header ? (
              <CustomHeader
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={data?.data.length}
                //...

                toolbar={settings?.toolbar ? settings?.toolbar[0] : []}
                //...
                data={data}
                settings={settings}
              />
            ) : null}

            {/* //***************************************************************************
            //********************************** BODY *********************************** */}

            <TableBody>
              {stableSort(data?.data, getComparator(order, orderBy))
                .slice(
                  settings?.pagination != undefined ? page * rowsPerPage : 0,
                  settings?.pagination != undefined
                    ? page * rowsPerPage + rowsPerPage
                    : data?.data.length
                )
                .map((row, index) => {
                  const isItemSelected = JSON.stringify(selected).includes(
                    JSON.stringify(row)
                  );

                  return (
                    <TableRow
                      onClick={(event) => {
                        handleClick(event, row, index);
                      }}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row[data?.dataKey]}
                      sx={{
                        backgroundColor: isItemSelected
                          ? rowColor("selected")
                          : rowColor("normal"),

                        "&:hover": {
                          backgroundColor: isItemSelected
                            ? rowColor("selected-hover")
                            : rowColor("hover"),

                          cursor:
                            !settings?.body[0]?.editColumn &&
                            !settings?.body[0]?.deleteColumn
                              ? "pointer"
                              : "auto",
                        },
                      }}
                    >
                      {settings?.body[0]?.checkbox ? (
                        <TableCell padding="checkbox">
                          <ThemeProvider
                            theme={createTheme({
                              palette: {
                                neutral: {
                                  main: settings?.body[0]?.labelSelectedColor
                                    ? settings?.body[0]?.labelSelectedColor
                                    : "#1976d2",
                                },
                              },
                            })}
                          >
                            {!settings?.body[0]?.checkboxType ||
                            settings?.body[0]?.checkboxType == "checkbox" ||
                            settings?.body[0]?.checkboxType != "radio" ? (
                              <Checkbox
                                color="neutral"
                                checked={isItemSelected}
                                sx={{
                                  color: settings?.body[0]?.labelColor
                                    ? settings?.body[0]?.labelColor
                                    : "rgba(0, 0, 0, 0.87)",
                                }}
                                onClick={
                                  settings?.body[0]?.editColumn ||
                                  settings?.body[0]?.deleteColumn
                                    ? (event) => {
                                        handleClick(event, row, index);
                                      }
                                    : () => {}
                                }
                              />
                            ) : (
                              <Radio
                                color="neutral"
                                checked={isItemSelected}
                                sx={{
                                  color: settings?.body[0]?.labelColor
                                    ? settings?.body[0]?.labelColor
                                    : "rgba(0, 0, 0, 0.87)",
                                }}
                                onClick={
                                  settings?.body[0]?.editColumn ||
                                  settings?.body[0]?.deleteColumn
                                    ? (event) => {
                                        handleClick(event, row, index);
                                      }
                                    : () => {}
                                }
                              />
                            )}
                          </ThemeProvider>
                        </TableCell>
                      ) : null}
                      {/* //***************************************************************************
                      //********************************** ROWS *********************************** */}
                      {data?.header.map((n, index) => {
                        return (
                          <TableCell
                            key={index}
                            align={
                              settings?.body[0]?.align
                                ? settings?.body[0]?.align
                                : "center"
                            }
                            padding={
                              settings?.body[0]?.padding
                                ? settings?.body[0]?.padding
                                : "normal"
                            }
                            sx={{
                              color: isItemSelected
                                ? labelColor("selected")
                                : labelColor("normal"),
                              "&:hover": {
                                color: isItemSelected
                                  ? labelColor("selected-hover")
                                  : labelColor("hover"),
                              },
                            }}
                          >
                            {row[n.id]}
                          </TableCell>
                        );
                      })}
                      {/* //***************************************************************************
                      //********************************** EDIT *********************************** */}
                      {settings?.body[0]?.editColumn ? (
                        <TableCell
                          align={"center"}
                          padding={
                            settings?.body[0]?.padding
                              ? settings?.body[0]?.padding
                              : "normal"
                          }
                        >
                          <IconButton
                            disabled={
                              settings?.body[0]?.editColumn[0]?.disabled
                            }
                            onClick={() => {
                              settings?.body[0]?.editColumn[0]?.function
                                ? settings?.body[0]?.editColumn[0]?.function()
                                : console.log(
                                    "No function asigned to the edit button"
                                  );
                            }}
                            sx={{
                              color: isItemSelected
                                ? labelColor("selected")
                                : labelColor("normal"),
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      ) : null}
                      {/* //***************************************************************************
                      //********************************* DELETE ********************************** */}
                      {settings?.body[0]?.deleteColumn ? (
                        <TableCell
                          align={"center"}
                          padding={
                            settings?.body[0]?.padding
                              ? settings?.body[0]?.padding
                              : "normal"
                          }
                        >
                          <IconButton
                            disabled={
                              settings?.body[0]?.deleteColumn[0]?.disabled
                            }
                            onClick={() => {
                              settings?.body[0]?.deleteColumn[0]?.function
                                ? settings?.body[0]?.deleteColumn[0]?.function()
                                : console.log(
                                    "No function asigned to the delete button"
                                  );
                            }}
                            sx={{
                              color: isItemSelected
                                ? labelColor("selected")
                                : labelColor("normal"),
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      ) : null}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (settings?.dense == "small" ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            {/* </TableContainer> */}
          </Table>
        </TableContainer>

        {/* //***************************************************************************
        //******************************* PAGINATION ******************************** */}

        {settings?.pagination ? (
          <TablePagination
            sx={{
              backgroundColor: settings?.pagination[0]?.color
                ? settings?.pagination[0]?.color
                : "white",
              color: settings?.pagination[0]?.labelColor
                ? settings?.pagination[0]?.labelColor
                : "rgba(0, 0, 0, 0.87)",
            }}
            labelRowsPerPage={settings?.pagination[0]?.label}
            rowsPerPageOptions={
              settings?.pagination[0]?.rowsPerPageOptions
                ? settings?.pagination[0]?.rowsPerPageOptions
                : [5, 10, 25]
            }
            component="div"
            count={data?.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        ) : null}
      </Paper>
    </Box>
  );
}

export default CustomTable;
