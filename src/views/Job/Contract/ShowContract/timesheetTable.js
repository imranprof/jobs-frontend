import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const TimesheetTable = (props) => {
  const {timeSheetList, classes} = props

  return (
    <TableContainer component={Paper}>
      <Table className={`${classes}__table`}>
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Work Hours</TableCell>
            <TableCell>Work Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeSheetList.map((timesheet) => (
            <TableRow key={timesheet.id}>
              <TableCell>{timesheet.start_date}</TableCell>
              <TableCell>{timesheet.end_date}</TableCell>
              <TableCell>{timesheet.work_hours}</TableCell>
              <TableCell>{timesheet.work_description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TimesheetTable;
