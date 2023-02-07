import React from "react";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { visuallyHidden } from "@mui/utils";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import CustomToolbar from "../CustomToolbar/CustomToolbar";

function CustomHeader({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  data,
  settings,
  toolbar,
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      {settings?.toolbar ? (
        <CustomToolbar
          numSelected={numSelected}
          toolbar={toolbar}
          data={data}
          settings={settings}
        />
      ) : null}
      <TableRow
        sx={{
          backgroundColor: settings?.header[0]?.color
            ? settings?.header[0]?.color
            : "white",
        }}
      >
        {/****************************************************************************
        //******************************* CHECKBOX ***********************************
        //**************************************************************************/}

        {settings?.body[0]?.checkbox ? (
          settings?.header[0]?.checkbox &&
          settings?.selectionType != "single" &&
          settings?.selectionType != "singleToggle" ? (
            <TableCell
              padding={
                // settings?.header[0]?.padding
                //   ? settings?.header[0]?.padding
                //   :
                "checkbox"
              }
            >
              <ThemeProvider
                theme={createTheme({
                  palette: {
                    neutral: {
                      main: settings?.header[0]?.labelColor
                        ? settings?.header[0]?.labelColor
                        : "rgb(0,0,0)",
                    },
                  },
                })}
              >
                <div className="flex items-center">
                  <Checkbox
                    sx={{
                      color: settings?.header[0]?.labelColor
                        ? settings?.header[0]?.labelColor
                        : "rgb(0,0,0)",
                    }}
                    color="neutral"
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                  />
                  {settings?.header[0]?.checkboxLabel ? (
                    <Typography
                      sx={{
                        color: settings?.header[0]?.labelColor
                          ? settings?.header[0]?.labelColor
                          : "rgb(0,0,0)",
                      }}
                    >
                      {settings?.header[0]?.checkboxLabel}
                    </Typography>
                  ) : null}
                </div>
              </ThemeProvider>
            </TableCell>
          ) : (
            <TableCell
              padding={
                settings?.header[0]?.padding
                  ? settings?.header[0]?.padding
                  : "checkbox"
              }
            ></TableCell>
          )
        ) : null}

        {/****************************************************************************
        //******************************** TITLES ************************************
        //**************************************************************************/}

        {data?.header.map((n) => (
          <TableCell
            key={n.id}
            align={
              n.align
                ? n.align
                : settings?.header[0]?.align
                ? settings?.header[0]?.align
                : "center"
            }
            padding={
              n.padding
                ? n.padding
                : settings?.header[0]?.padding
                ? settings?.header[0]?.padding
                : "normal"
            }
            sortDirection={orderBy === n.id ? order : false}
          >
            {settings?.order ? (
              <TableSortLabel
                active={orderBy === n.id}
                direction={orderBy === n.id ? order : "asc"}
                onClick={createSortHandler(n.id)}
              >
                <Typography
                  sx={{
                    color: settings?.header[0]?.labelColor
                      ? settings?.header[0]?.labelColor
                      : "black",
                  }}
                >
                  {n.label}
                </Typography>
                {orderBy === n.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <Typography
                sx={{
                  color: settings?.header[0]?.labelColor
                    ? settings?.header[0]?.labelColor
                    : "black",
                }}
              >
                {n.label}
              </Typography>
            )}
          </TableCell>
        ))}
        {settings?.body[0]?.editColumn ? <TableCell></TableCell> : null}
        {settings?.body[0]?.deleteColumn ? <TableCell></TableCell> : null}
      </TableRow>
    </TableHead>
  );
}

export default CustomHeader;
